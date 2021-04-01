import * as vscode from 'vscode'

type createHoverContent = (
  word: string,
  position: number
) => vscode.MarkdownString | null

export class hoverProvider {
  private createHoverContent: createHoverContent

  constructor(func: createHoverContent) {
    this.createHoverContent = func
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
    if (!wordRange) return null

    // 単語を切り出し
    const currentWord = document
      .lineAt(position.line)
      .text.slice(wordRange.start.character, wordRange.end.character)

    // ホバーの内容を作成
    const content = this.createHoverContent(currentWord, position.line + 1)
    if (!content) return null

    return new vscode.Hover(content)
  }
}
