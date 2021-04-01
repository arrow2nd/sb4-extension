import * as vscode from 'vscode'
import { defaultCompletionItems } from './data/completionItems'

export class completionItemProvider {
  private getCompletionItems: (position: number) => vscode.CompletionItem[]

  constructor(func: (position: number) => vscode.CompletionItem[]) {
    this.getCompletionItems = func
  }

  provideCompletionItems(
    _document: vscode.TextDocument,
    position: vscode.Position
  ) {
    const userDefinitionItems = this.getCompletionItems(position.line)
    const completionItems = defaultCompletionItems.concat(userDefinitionItems)
    return Promise.resolve(new vscode.CompletionList(completionItems, false))
  }
}
