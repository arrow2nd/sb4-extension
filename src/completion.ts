import * as vscode from 'vscode'
import { defaultCompletionItems } from './data/completionItems'

type getCompletionItemsType = (position: number) => vscode.CompletionItem[]

export class completionItemProvider {
  private getCompletionItems: getCompletionItemsType

  constructor(func: getCompletionItemsType) {
    this.getCompletionItems = func
  }

  public provideCompletionItems(
    _document: vscode.TextDocument,
    position: vscode.Position
  ) {
    const userDefinitionItems = this.getCompletionItems(position.line + 1)
    const completionItems = defaultCompletionItems.concat(userDefinitionItems)
    return Promise.resolve(new vscode.CompletionList(completionItems, false))
  }
}
