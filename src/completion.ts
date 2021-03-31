import * as vscode from 'vscode'
import { defaultCompletionItems } from './data/completionItems'

export class sb4CompletionItemProvider {
  private completionItems: vscode.CompletionItem[]

  constructor() {
    this.completionItems = []
  }

  provideCompletionItems(
    _document: vscode.TextDocument,
    position: vscode.Position
  ) {
    this.completionItems = defaultCompletionItems

    return Promise.resolve(
      new vscode.CompletionList(this.completionItems, false)
    )
  }
}
