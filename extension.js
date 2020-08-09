const vscode = require('vscode');

const SB4_MODE = { scheme: 'file', language: 'sb4' };

// 定義データ
let definedData = {};

// ホバー表示
class sb4HoverProvider {
    provideHover(document, position,) {
		// カーソル位置の行内の正規表現にマッチした単語がある範囲を取得
		const wordRange = document.getWordRangeAtPosition(position, /[a-zA-Z0-9_#$%]+/);
    if (wordRange === undefined) return Promise.reject("Not Found");

		// カーソル位置の行から単語を切り出し
		const currentWord = document.lineAt(position.line).text.slice(wordRange.start.character, wordRange.end.character).toUpperCase();
		console.log("hover: " + currentWord);
		
		// 定義データを参照
		const data = definedData[currentWord];
		if (!data) return Promise.reject("Not Found");
		
		// 
		let desc = data.desc;
		
		// コメントが無い場合
		if (desc == '') {
		  let commentLine = data.line - 1;
		  let line = document.lineAt(commentLine);
		};
		
		// 表示メッセージを作成
		const message = `${data.type} ${data.name} (Line ${data.line})\n${desc}`;
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
	const regexp = new RegExp(`\\b(CONST|DIM|VAR|DEF)\\b\\s+([\\w\\s\\[\\]#$%,]+)`, 'i');
	const lines = document.getText().split(/\r?\n/g);
	let result = {};

	lines.forEach((line, i) => {
		let define = line.match(regexp);
		// 行内に定義があれば、定義名と行番号を記録
		if (define) {
			// 右側のコメントを抽出
			let desc = line.split("'");
			desc = (desc.length > 1) ? desc[1] : '';
			// 変数、関数名を抽出してカンマで分割
			let keys = define[2].replace(/( |\[.*\])/g, '').split(',');
			// 宣言タイプ
			let type = define[1].toUpperCase();
			// 記録
			for (let key of keys) {
				let name = key;
				key = key.toUpperCase();
				if (result[key]) continue;	// 同じ名前が記録されている場合スキップ
				result[key] = {
					"name": name,
					"type": type,
					"desc": desc,
					"line": i + 1
				};
			};
		};
	});

	return result;
};


/**
 * 拡張機能起動時に呼ばれる
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// ドキュメントが変更されたらコードをスキャンする
	let timeout;
	vscode.workspace.onDidChangeTextDocument(event => {
		// タイムアウト前に操作された場合
		if (timeout != null) {
			clearTimeout(timeout);
		};
		// コードのスキャンとインターバル設定
		timeout = setInterval(() => {
			clearTimeout(timeout);
			timeout = null;
			// 分析
			definedData = scanSourceCode(event.document);

			console.log(definedData);

		}, 500);
	});

	// ホバー表示
	context.subscriptions.push(
		vscode.languages.registerHoverProvider(
			SB4_MODE, new sb4HoverProvider()
		)
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

// VSCodeが終了する際に呼ばれる
function deactivate() {
	return undefined;
}

module.exports = {
	activate,
	deactivate
}
