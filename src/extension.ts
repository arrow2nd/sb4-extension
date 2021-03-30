import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "sb4-extension" is now active!')

  let disposable = vscode.commands.registerCommand(
    'sb4-extension.helloWorld',
    () => {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage('Hello World from sb4-extension!')
    }
  )

  context.subscriptions.push(disposable)
}

export function deactivate() {}
