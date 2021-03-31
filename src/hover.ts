import * as vscode from 'vscode'
import { createMarkdown } from './util'

export class sb4HoverProvider {
  provideHover(document: vscode.TextDocument, position: vscode.Position) {
    const message = createMarkdown('desc', true)
    return Promise.resolve(new vscode.Hover(message))
  }
}
