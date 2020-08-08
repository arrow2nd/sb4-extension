const vscode = require('vscode');

const SB4_MODE = { scheme: 'file', language: 'sb4' };

// hover provider カーソル直下のキーワードを表示するだけ
class sb4HoverProvider {
    provideHover(document, position,) {
		// カーソル位置の行内の正規表現にマッチした単語がある範囲を取得
		let wordRange = document.getWordRangeAtPosition(position, /[a-zA-Z0-9_#$%]+/);

		// マッチするものがなかったときに返すメッセージ
        if (wordRange === undefined) return Promise.reject("no word");

		// カーソル位置の行から単語を切り出し
		let currentWord = document.lineAt(position.line).text.slice(wordRange.start.character, wordRange.end.character);

		// 
		const regexp = new RegExp(`\\b(CONST|DIM|VAR|DEF)\\b\\s+?\\b${currentWord}`, 'i');
		let comments = '';

		for (let i = 0; i < document.lineCount;i++) {
			let line = document.lineAt(i).text;

			// ホバーした単語を探す
			if (line.match(regexp)) {
				console.log(line);

				// 横のコメントを拾う
				const commentsOfs = line.indexOf("'");
				if (commentsOfs != -1) {
					comments = line.slice(commentsOfs);
				} else {
					for (let j = i; j <= 0; j--) {
						let line2 = document.lineAt(j).text + '\n';
						if (line2.indexOf("'") == -1) break;
						comments = comments + line2
					};
				};

				break;
			};
		};

		
		// ホバーAPIに表示する文字列を渡す
        return Promise.resolve(new vscode.Hover(comments));
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
 * 拡張機能起動時に呼ばれる
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
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
