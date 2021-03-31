import * as vscode from 'vscode'

export function createMarkdown(desc: string, shouldShowHr: boolean) {
  const message = new vscode.MarkdownString()

  message.appendCodeblock('test')

  return message
}
