import * as vscode from 'vscode'
import { completionItemProvider } from './completion'
import { hoverProvider } from './hover'
import { scanSourceCode } from './scan'

const SB4_MODE = { scheme: 'file', language: 'sb4' }

export function activate(context: vscode.ExtensionContext) {
  const scan = new scanSourceCode()
  let updateTimeoutId: NodeJS.Timeout | null = null

  // 全体をスキャン
  scan.update()

  console.log('Hello!')

  // 画面が切り替わった
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

      // タイムアウト前ならクリア
      if (updateTimeoutId !== null) {
        clearTimeout(updateTimeoutId)
      }

      // 0.5秒後に更新
      updateTimeoutId = setTimeout(() => {
        scan.update()
        updateTimeoutId = null
      }, 500)
    }
  )
  context.subscriptions.push(handleChangeTextDocument)

  // ホバー表示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(
      SB4_MODE,
      new hoverProvider(scan.createHoverContent)
    )
  )

  // 入力補完
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      SB4_MODE,
      new completionItemProvider(scan.createCompletionItems)
    )
  )
}

export function deactivate() {}
