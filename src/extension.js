const vscode = require('vscode');
const defaultCommplationItems = require('./completionItems.json');
const SB4_MODE = { scheme: 'file', language: 'sb4' };

let saveDeclarationData = {};	// 宣言データ保持用
let saveDefineData = [];		// def定義データ保持用

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
		//		console.log(`hover: ${currentWord} / defId: ${defId}`);

		// 宣言データを参照
		let data;
		while (1) {
			data = saveDeclarationData[chkKey];
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
		desc = (desc === '') ? 'No Comment...' : desc;

		// 表示メッセージを作成
		const message = createMarkdown(data, desc, true);
		return Promise.resolve(new vscode.Hover(message));
	};
};

/**
 * 入力補完
 */
class sb4CompletionItemProvider {
	constructor() {
		this.saveLine = null;
		this.completionItems = [];
	};

	provideCompletionItems(document, position) {
		const currentLine = position.line + 1;
		//		console.log(`current: ${currentLine} / save: ${this.saveLine}`);

		if (this.saveLine != currentLine) {
			// ユーザー定義を候補に追加
			let addCommplationItems = [];
			for (let key in saveDeclarationData) {
				let data = saveDeclarationData[key];
				// 名前が重複するものは追加しない
				const hasSameDataRegistered = addCommplationItems.some(d => d.label == data.name);
				if (!hasSameDataRegistered) {
					addCommplationItems.push({
						"label": data.name,
						"documentation": createMarkdown(data, data.desc, false),
						"kind": (data.type === 'DEF') ? 2 : 5
					});
				};
			};
			this.saveLine = currentLine;
			this.completionItems = defaultCommplationItems.concat(addCommplationItems);
		};

		return Promise.resolve(new vscode.CompletionList(this.completionItems, false));
	};
};

/**
 * 行番号からDEFIDを取得
 * @param  {Number} line 行番号
 * @return {Number}      DEFID
 */
function getDefId(line) {
	for (let data of saveDefineData) {
		if (data.startLine < line && data.endLine > line) return data.id;
	};
	return null;
};

/**
 * マークダウン形式の表示テキストを作成する
 * @param  {Object}  data   定義データ
 * @param  {String}  desc   コメント
 * @param  {Boolean} showHr 水平線を表示するか
 * @return {String}         マークダウンテキスト
 */
function createMarkdown(data, desc, showHr) {
	const scope = (data.isLocal) ? '[Local] ' : '';
	let message = new vscode.MarkdownString();
	// 追加
	message.appendCodeblock(`${scope}${data.type} ${data.name} '(Line ${data.line})`);
	if (desc != null) message.appendMarkdown(((showHr) ? '\n\n***' : '') + `\n\n${desc}`);
	return message;
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
		// 定義のある行を探す
		let define = line.match(/(?<!\s*'\s*)\b(CONST|ENUM|DIM|VAR|DEF)\b\s+([ -&(-~]+)/i);
		if (!define) {
			// DEFの終端
			if (isDef && line.match(/^\s*\bEND\b/i)) {
				defineResult[defId].endLine = i + 1;
				defId++;
				isDef = false;
			};
			return;
		};

		// コメントを抽出
		let desc = line.match(/'.*/);
		desc = (desc == null) ? '' : desc[0].slice(1);
		// コメントが取得できなかった場合、上方向にコメントがないか探す
		let commentLine = i - 1;
		if (desc === '' && commentLine >= 0) {
			let comment = document.lineAt(commentLine).text;
			while (comment.match(/^'/)) {
				desc = comment.slice(1) + '\n\n' + desc;
				commentLine--;
				if (commentLine < 0) break;
				comment = document.lineAt(commentLine).text;
			};
		};

		// 宣言タイプ
		let type = define[1].toUpperCase();
		// 宣言名を解析
		let keys = [];
		let segmented = define[2].replace(/[\[|\(|"].*?[\]|\)|"]/g, '').split(",");
		if (type === 'DEF') {
			keys.push(segmented[0].split(' ')[0]);
			defineResult.push({ 'id': defId, 'startLine': i + 1, 'endLine': null });
			isDef = true;
		} else {
			keys = segmented.map(value => value.replace(/ /g, '').split(/\s*?=/)[0]);
		};

		// リストに追加
		for (let key of keys) {
			let name = key;
			let isLocal = false;
			key = name.toUpperCase();
			if (isDef && type != 'DEF') {
				key = `${defId}:${key}`;
				isLocal = true
			};
			if (declarationResult[key]) continue;	// 名前が重複するものは追加しない
			declarationResult[key] = {
				"name": name,
				"type": type,
				"isLocal": isLocal,
				"desc": desc,
				"line": i + 1
			};
		};
	});
	//	console.log(declarationResult);
	//	console.log(defineResult);

	return [declarationResult, defineResult];
};

/**
 * 拡張機能起動時に呼ばれるやつ
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let timeout;

	// 起動時にスキャン
	[saveDeclarationData, saveDefineData] = scanSourceCode(vscode.window.activeTextEditor.document);

	// 画面が切り替えられた
	const changeActiveEditor = vscode.window.onDidChangeActiveTextEditor(event => {
		if (event._documentData._languageId != 'sb4') return;
		[saveDeclarationData, saveDefineData] = scanSourceCode(event.document);
	});
	context.subscriptions.push(changeActiveEditor);

	// ドキュメントの内容が変更された
	const changeTextDocument = vscode.workspace.onDidChangeTextDocument(event => {
		if (event.document.languageId != 'sb4') return;
		// タイムアウト前に呼び出された場合
		if (timeout != null) {
			clearTimeout(timeout);
		};
		// インターバル設定
		timeout = setInterval(() => {
			clearTimeout(timeout);
			timeout = null;
			[saveDeclarationData, saveDefineData] = scanSourceCode(event.document);
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
