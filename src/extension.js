const vscode = require('vscode');
const SB4_MODE = { scheme: 'file', language: 'sb4' };

let declarationData = {};	// 宣言データ
let defineData = [];		// def定義データ

/**
 * ホバー表示
 */
class sb4HoverProvider {
    provideHover(document, position) {
		// ホバーされている単語を切り出す
		const wordRange = document.getWordRangeAtPosition(position, /[a-zA-Z0-9_#$%]+/);
		if (!wordRange) return Promise.reject("Not Found");
		const currentWord = document.lineAt(position.line).text.slice(wordRange.start.character, wordRange.end.character).toUpperCase();
		
		// 現在の行がDEF内かチェック
		let defId = getDefId(position.line + 1);
		let chkKey = (defId != null) ? `${defId}:${currentWord}` : currentWord;

		// 宣言データを参照
		let data;
		while (1) {
			data = declarationData[chkKey];
			// ローカルに無かった場合、グローバルで再検索する
			if (defId != null && !data) {
				chkKey = currentWord;
				defId = null;
				continue;
			};
			break;
		};
		if (!data) return Promise.reject("Not Found");

		// コメント取得
		let desc = data.desc;
		// コメントが無い場合、上方向のコメントを検索
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
		const scope = (data.type != 'DEF' && defId != null) ? 'Local: ' : '';
		let message = new vscode.MarkdownString();
		message.appendCodeblock(`${scope}${data.type} ${data.name} '(Line ${data.line})`);
		message.appendMarkdown(`\n\n***\n\n${desc}`);

		return Promise.resolve(new vscode.Hover(message));
    };
};

/**
 * コード補完
 */
class sb4CompletionItemProvider {
    provideCompletionItems(document, position, token) {
		
		// 現在の行がDEF内かチェック
		let defId = getDefId(position.line + 1);
		console.log(`line ${position.line + 1} defId:${defId}`);

        const completionItems = [
            {
				label: 'apple',
				documentation: 'test',
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

/**
 * ソースコードをスキャン
 * @param   {Object} document ドキュメント
 * @returns {Object}          宣言データ
 * @returns {Array}           def定義データ
 */
function scanSourceCode(document) {
	const lines = document.getText().split(/\r?\n/g);
	let isDef = false;
	let defId = 0;
	let declarationResult = {};
	let defineResult = [];

	lines.forEach((line, i) => {
		let define = line.match(/(?<!\s*'\s*)\b(CONST|ENUM|DIM|VAR|DEF)\b\s+([ -&(-~]+)/i);
		if (!define) {
			// DEFの終端
			if (isDef && line.match(/\bEND\b/i)) {
				defineResult[defId].endLine = i + 1;
				defId++;
				isDef = false;
			};
			return;
		};

		// 右側のコメントを抽出
		let desc = line.split("'");
		desc = (desc.length > 1) ? desc[1] : '';
		// 宣言タイプ
		let type = define[1].toUpperCase();
		// 括弧を削除して変数・関数名をカンマで分割
		let keys = [];
		let segmented = define[2].replace(/[\[|\(|"].*?[\]|\)|"]/g, '').split(",");
		// キーを作成
		if (type === 'DEF') {
			keys.push(segmented[0].split(' ')[0]);
			defineResult.push({'id': defId, 'startLine': i + 1, 'endLine': null});
			isDef = true;
		} else {
			keys = segmented.map(value => value.replace(/ /g, '').split(/\s*?=/)[0]);
		};

		// 追加
		for (let key of keys) {
			let name = key;
			key = name.toUpperCase();
			key = (isDef && type != 'DEF') ? `${defId}:${key}` : key;
			if (declarationResult[key]) continue;	// 同じ名前が記録されている場合スキップ
			declarationResult[key] = {
				"name": name,
				"type": type,
				"desc": desc,
				"line": i + 1
			};
		};
	});

	console.log(declarationResult);
	console.log(defineResult);

	return [declarationResult, defineResult];
};

/**
 * 行番号からDEFIDを取得
 * @param  {Number} line 行番号
 * @return {Number}      DEFID
 */
function getDefId(line) {
	for (let data of defineData) {
		if (data.startLine < line && data.endLine > line) return data.id;
	};
	return null;
};

/**
 * 拡張機能起動時に呼ばれるやつ
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
//	let declarationData = {};	// 宣言データ
//	let defineData = [];		// def定義データ
	let timeout;

	// 起動時にスキャン
	[declarationData, defineData] = scanSourceCode(vscode.window.activeTextEditor.document);

	// 画面が切り替えられた
	const changeActiveEditor = vscode.window.onDidChangeActiveTextEditor(event => {
		if (event._documentData._languageId != 'sb4') return;
		[declarationData, defineData] = scanSourceCode(event.document);
	});
	context.subscriptions.push(changeActiveEditor);

	// ドキュメントの内容が変更された
	const changeTextDocument = vscode.workspace.onDidChangeTextDocument(event => {
		if (event.document.languageId != 'sb4') return;
		// タイムアウト前に呼び出された場合
		if (timeout != null) {
			clearTimeout(timeout);
		};
		// スキャンとインターバル設定
		timeout = setInterval(() => {
			clearTimeout(timeout);
			timeout = null;
			[declarationData, defineData] = scanSourceCode(event.document);
		}, 500);
	});
	context.subscriptions.push(changeTextDocument);

	// ホバー
	context.subscriptions.push(
		vscode.languages.registerHoverProvider(SB4_MODE, new sb4HoverProvider())
	);

	// コード補完
	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(SB4_MODE, new sb4CompletionItemProvider())
	);
};

exports.activate = activate;

/**
 * VSCode終了時に呼ばれるとこ
 */
function deactivate() {
	return undefined;
};

module.exports = {
	activate,
	deactivate
};
