import * as vscode from 'vscode'
import { defaultCompletionItems } from './data/completionItems'

type createCompletionItemsType = (position: number) => vscode.CompletionItem[]

export class completionItemProvider {
  private createCompletionItems: createCompletionItemsType

  constructor(func: createCompletionItemsType) {
    this.createCompletionItems = func
  }

  public provideCompletionItems(
    _document: vscode.TextDocument,
    position: vscode.Position
  ) {
    // ユーザー定義の候補を取得
    const userDefinitionItems = this.createCompletionItems(position.line + 1)
    // デフォルトの候補と結合
    const completionItems = defaultCompletionItems.concat(userDefinitionItems)

    return new vscode.CompletionList(completionItems, false)
  }
}
