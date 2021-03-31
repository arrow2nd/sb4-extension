import * as vscode from 'vscode'
import { sb4CompletionItemProvider } from './completion'
import { sb4HoverProvider } from './hover'
import { scan } from './scan'

const SB4_MODE = { scheme: 'file', language: 'sb4' }

export function activate(context: vscode.ExtensionContext) {
  const s = new scan()
  s.update()

  // ホバー
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(SB4_MODE, new sb4HoverProvider())
  )

  // コード補完
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      SB4_MODE,
      new sb4CompletionItemProvider()
    )
  )
}

export function deactivate() {}
