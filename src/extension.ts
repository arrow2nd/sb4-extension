import * as vscode from 'vscode'
import { completionItemProvider } from './completion'
import { hoverProvider } from './hover'
import { scanSouceCode } from './scan'

const SB4_MODE = { scheme: 'file', language: 'sb4' }

export function activate(context: vscode.ExtensionContext) {
  const scan = new scanSouceCode()
  let updateTimeoutId: NodeJS.Timeout | null

  // 全体のコードをスキャン
  scan.update()

  // エディタの画面が切り替えられた
  const handleChangeActiveEditor = vscode.window.onDidChangeActiveTextEditor(
    (event) => {
      if (event && event.document.languageId === 'sb4') {
        scan.update()
      }
    }
  )
  context.subscriptions.push(handleChangeActiveEditor)

  // ドキュメントが変更された
  const handleChangeTextDocument = vscode.workspace.onDidChangeTextDocument(
    (event) => {
      if (event.document.languageId !== 'sb4') return

      // タイムアウト前なら破棄
      if (updateTimeoutId !== null) {
        clearTimeout(updateTimeoutId)
      }

      // 0.5秒後にスキャンを実行
      updateTimeoutId = setInterval(() => {
        scan.update()
        clearTimeout(updateTimeoutId!)
        updateTimeoutId = null
      }, 600)
    }
  )
  context.subscriptions.push(handleChangeTextDocument)

  // ホバー表示
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
