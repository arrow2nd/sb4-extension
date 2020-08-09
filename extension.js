const vscode = require('vscode');

const SB4_MODE = { scheme: 'file', language: 'sb4' };

let definedData = {};	// 定義データ

// ホバー表示
class sb4HoverProvider {
    provideHover(document, position,) {
		// カーソル位置の行内の正規表現にマッチした単語がある範囲を取得
		const wordRange = document.getWordRangeAtPosition(position, /[a-zA-Z0-9_#$%]+/);
		if (!wordRange) return Promise.reject("Not Found");
		
		// カーソル位置の行から単語を切り出し
		const currentWord = document.lineAt(position.line).text.slice(wordRange.start.character, wordRange.end.character).toUpperCase();
		console.log("hover: " + currentWord);
		
		// 定義データを参照
		const data = definedData[currentWord];
		if (!data) return Promise.reject("Not Found");

		console.log("hit!")
		
		// コメント取得
		let desc = data.desc;
		// 上方向にコメントが無いか検索
		if (desc === '') {
			let commentLine = data.line - 2;
			let comment = document.lineAt(commentLine).text;
			while (comment.match(/^'/)) {
				desc = comment.slice(1) + '\n\n' + desc;
				commentLine--;
				comment = document.lineAt(commentLine).text;
			};
		};
		desc = (desc === '') ? 'No Comment...' : desc;

		// 表示メッセージを作成
		const message = `${data.type} ${data.name} (Line ${data.line})\n\n${desc}`;

		// ホバーに表示する文字列を返す
		return Promise.resolve(new vscode.Hover(message));
    };
};

/*
// コード補完
class sb4CompletionItemProvider {
    provideCompletionItems(document, position, token) {
        const completionItems = [
            {
                label: 'apple',
                kind: vscode.CompletionItemKind.Keyword
            },
            {
                label: 'banana',
                kind: vscode.CompletionItemKind.Value
            },
            {
                label: 'cherry',
                kind: vscode.CompletionItemKind.Method
            }
        ];
        let completionList = new vscode.CompletionList(completionItems, false);
        return Promise.resolve(completionList);
    };
};
*/

/**
 * ソースコードをスキャン
 * @param   {Object} document ドキュメント
 * @returns {Object}          定義データ
 */
function scanSourceCode(document) {
	const regexp = new RegExp(`\\b(CONST|ENUM|DIM|VAR|DEF)\\b\\s+([ -&(-~]+)`, 'i');
	const lines = document.getText().split(/\r?\n/g);
	let result = {};

	lines.forEach((line, i) => {
		let define = line.match(regexp);
		if (!define) return;

		// 右側のコメントを抽出
		let desc = line.split("'");
		desc = (desc.length > 1) ? desc[1] : '';
		// 宣言タイプ
		let type = define[1].toUpperCase();

		// 変数、関数名を抽出
		
		// 括弧を削除してカンマで分割
		let keys = define[2].replace(/\[.*?\]|\(.*?\)|".*?"/g, '').split(",");
		if (type === 'DEF') {
			keys = [keys.split(' ')[0]];
		} else {
			keys = keys.map(value => value.replace(/ /g, '').split(/\s*?=/)[0]);
		};

		// 記録
		for (let key of keys) {
			let name = key;
			key = name.toUpperCase();
			if (result[key]) continue;	// 同じ名前が記録されている場合スキップ
			result[key] = {
				"name": name,
				"type": type,
				"desc": desc,
				"line": i + 1
			};
		};
	});

	console.log(result);
	return result;
};

/**
 * 拡張機能起動時に呼ばれるとこ
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// 起動時にスキャン
	definedData = scanSourceCode(vscode.window.activeTextEditor.document);

	// 画面が切り替えられた
	const changeActiveEditor = vscode.window.onDidChangeActiveTextEditor(event => {
		// SB4のコードではない場合
		if (event._documentData._languageId != 'sb4') return;
		// スキャン
		definedData = scanSourceCode(event.document);
	});
	context.subscriptions.push(changeActiveEditor);

	// ドキュメントの内容が変更された
	let timeout;
	const changeTextDocument = vscode.workspace.onDidChangeTextDocument(event => {
		// SB4のコードではない場合
		if (event.document.languageId != 'sb4') return;
		// タイムアウト前に呼び出された場合
		if (timeout != null) {
			clearTimeout(timeout);
		};
		// スキャンとインターバル設定
		timeout = setInterval(() => {
			clearTimeout(timeout);
			timeout = null;
			definedData = scanSourceCode(event.document);
		}, 500);
	});
	context.subscriptions.push(changeTextDocument);

	// ホバーされた
	context.subscriptions.push(
		vscode.languages.registerHoverProvider(SB4_MODE, new sb4HoverProvider())
	);

	/*
	// コード補完
	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(
			SB4_MODE, new sb4CompletionItemProvider()
		)
	);
	*/
};

exports.activate = activate;

// VSCodeが終了する際に呼ばれるとこ
function deactivate() {
	return undefined;
};

module.exports = {
	activate,
	deactivate
};
