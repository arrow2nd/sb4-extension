import * as vscode from 'vscode'

type getHoverContentType = (
  word: string,
  position: number
) => vscode.MarkdownString | null

export class hoverProvider {
  private getHoverContent: getHoverContentType

  constructor(func: getHoverContentType) {
    this.getHoverContent = func
  }

  public provideHover(
    document: vscode.TextDocument,
    position: vscode.Position
  ) {
    // 単語の範囲を取得
    const wordRange = document.getWordRangeAtPosition(
      position,
      /[a-zA-Z0-9_#$%"]+/
    )
    if (!wordRange) return Promise.reject()

    // 単語を切り出し
    const currentWord = document
      .lineAt(position.line)
      .text.slice(wordRange.start.character, wordRange.end.character)

    // ホバーコンテンツを取得
    const content = this.getHoverContent(currentWord, position.line)
    if (!content) return Promise.reject()

    return Promise.resolve(new vscode.Hover(content))
  }
}
