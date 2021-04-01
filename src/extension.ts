import * as vscode from 'vscode'
import { completionItemProvider } from './completion'
import { hoverProvider } from './hover'
import { scanSouceCode } from './scan'

const SB4_MODE = { scheme: 'file', language: 'sb4' }

export function activate(context: vscode.ExtensionContext) {
  const scan = new scanSouceCode()
  scan.update()

  // ホバー
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(
      SB4_MODE,
      new hoverProvider(scan.getHoverContent)
    )
  )

  // コード補完
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      SB4_MODE,
      new completionItemProvider(scan.getCompletionItems)
    )
  )
}

export function deactivate() {}
