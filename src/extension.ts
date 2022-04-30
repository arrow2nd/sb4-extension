import * as vscode from 'vscode'

import { completionItemProvider } from './libs/completion'
import { hoverProvider } from './libs/hover'
import { scanSourceCode } from './libs/scan'

const SB4_MODE: vscode.DocumentSelector = { scheme: 'file', language: 'sb4' }

export function activate(context: vscode.ExtensionContext) {
  const scan = new scanSourceCode()
  let updateTimeoutId: NodeJS.Timeout | null = null

  // 全体をスキャン
  scan.update()

  // 画面が切り替わった
  const handleChangeActiveEditor = vscode.window.onDidChangeActiveTextEditor(
    (event) => {
      if (event && event.document.languageId === 'sb4') {
        scan.update()
      }
    }
  )

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

  // ホバー表示
  const handleHover = vscode.languages.registerHoverProvider(
    SB4_MODE,
    new hoverProvider(scan.createHoverContent)
  )

  // 入力補完
  const handleInputCompletion = vscode.languages.registerCompletionItemProvider(
    SB4_MODE,
    new completionItemProvider(scan.createCompletionItems)
  )

  context.subscriptions.push(
    handleChangeActiveEditor,
    handleChangeTextDocument,
    handleHover,
    handleInputCompletion
  )
}

export function deactivate() {}
