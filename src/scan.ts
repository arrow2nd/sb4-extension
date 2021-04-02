import * as vscode from 'vscode'

type funcDefDataType = {
  name: string
  start: number
  end: number
}

type declStatementDataType = {
  name: string
  comment: string
  statement: string
  position: number
  kind: vscode.CompletionItemKind
}

export class scanSourceCode {
  private funcDefData: funcDefDataType[]
  private declStatementData: { [key: string]: declStatementDataType[] }

  constructor() {
    this.funcDefData = []
    this.declStatementData = { global: [] }
  }

  /**
   * 更新
   */
  public update(): void {
    const document = vscode.window.activeTextEditor?.document
    if (!document) return

    // 初期化
    let isDef = false
    let tmpFuncDefData: funcDefDataType
    this.funcDefData = []
    this.declStatementData = { global: [] }

    // 全ての行を捜索
    const lines = document.getText().split(/[\r\n]/g)
    lines.forEach((line, index) => {
      const position = index + 1
      line = line.trim()

      // 宣言文を解析
      const [type, names, statement] = this.getDeclStatement(
        document,
        line,
        index
      )

      if (!type && !names.length) {
        // DEFの終端ならDEF定義のデータを追加
        if (isDef && /\bEND\b/i.test(line)) {
          tmpFuncDefData.end = position
          this.funcDefData.push(tmpFuncDefData)
          isDef = false
        }
        return
      }

      if (type === 'DEF') {
        // DEF定義のデータを作成
        tmpFuncDefData = {
          name: names[0],
          start: position,
          end: 0
        }
        // スコープを追加
        this.declStatementData[names[0]] = []
        isDef = true
      }

      // 宣言文のスコープ
      const scope = isDef && type !== 'DEF' ? tmpFuncDefData.name : 'global'

      // 対応するコメント
      const comment = this.getComment(document, line, index)

      // 宣言文のデータを追加
      for (let name of names) {
        this.declStatementData[scope].push({
          name: name,
          comment: comment,
          statement: statement,
          position: position,
          kind: this.convertToCompletionItemKind(type)
        })
      }
    })

    // console.log(this.declStatementData)
  }

  /**
   * 補完候補を作成
   *
   * @param position 行
   * @returns 補完候補
   */
  public createCompletionItems = (
    position: number
  ): vscode.CompletionItem[] => {
    const completionItems: vscode.CompletionItem[] = []
    const scopes = ['global']

    // positionがDEF内なら定義名を取得
    const defineName = this.getFuncName(position)
    if (defineName) {
      scopes.push(defineName)
    }

    // スコープ内の変数、関数定義を入力候補に追加
    for (let scope of scopes) {
      for (let data of this.declStatementData[scope]) {
        completionItems.push({
          label: data.name,
          documentation: this.createMarkdown(data),
          kind: data.kind
        })
      }
    }

    return completionItems
  }

  /**
   * ホバー表示の内容を作成
   *
   * @param word 単語
   * @param position 行数
   * @returns Markdownテキスト
   */
  public createHoverContent = (
    word: string,
    position: number
  ): vscode.MarkdownString | null => {
    const scopes = ['global']

    // positionがDEF内なら定義名を取得
    const funcName = this.getFuncName(position)
    if (funcName) {
      scopes.push(funcName)
    }

    // 検索
    for (let scope of scopes) {
      const matchedData = this.declStatementData[scope].find(
        (data) => data.name === word
      )
      if (matchedData) {
        return this.createMarkdown(matchedData)
      }
    }

    return null
  }

  /**
   * 宣言文を取得
   *
   * @param document ドキュメント
   * @param line 行
   * @param position 行数
   * @returns 宣言の種類, 宣言名
   */
  private getDeclStatement(
    document: vscode.TextDocument,
    line: string,
    position: number
  ): [string, string[], string] {
    // 宣言文を分割
    const declStatement = line.match(
      /(?!\s*'\s*)\b(CONST|ENUM|DIM|VAR|DEF)\b\s+(\S+)/i
    )
    if (!declStatement) return ['', [], '']

    // 宣言名の末尾にバックスラッシュがある場合次の行を結合
    const backSlashRegExp = /\\.*$/
    let name = declStatement[2].trim().replace(/'.*/, '')
    let addname = ''
    for (let count = 1; backSlashRegExp.test(name); count++) {
      addname = document.lineAt(position + count).text.trim()
      name = name.replace(backSlashRegExp, '') + addname
    }

    const type = declStatement[1].toUpperCase()
    const statement = `${type} ${name}`

    // ドットで分割して括弧、スペース、代入演算子以降を削除
    const names = name
      .replace(/ .*|\[[^\]]*\]|\(.*\)/g, '')
      .split(',')
      .map((e) => e.replace(/\s*=.*/, ''))

    return [type, names, statement]
  }

  /**
   * CompletionItemKindに変換
   *
   * @param type 宣言の種類
   * @returns CompletionItemKind
   */
  private convertToCompletionItemKind(type: string): vscode.CompletionItemKind {
    switch (type) {
      case 'DEF':
        return vscode.CompletionItemKind.Function
      case 'ENUM':
        return vscode.CompletionItemKind.Enum
      case 'CONST':
        return vscode.CompletionItemKind.Constant
      default:
        return vscode.CompletionItemKind.Variable
    }
  }

  /**
   * コメントを取得
   *
   * @param document ドキュメント
   * @param line 行
   * @param position 行数
   * @returns コメント文
   */
  private getComment(
    document: vscode.TextDocument,
    line: string,
    position: number
  ): string {
    // 行端のコメントを探す
    const matchArray = line.match(/'.*/)
    let comment = matchArray ? matchArray[0].slice(1) : ''

    // 上の行のコメントを探す
    if (!comment) {
      const commentRegExp = /^\s*'(.*)/
      const list: string[] = []
      for (let nextPos = position - 1; nextPos >= 0; nextPos--) {
        const matchArray = document.lineAt(nextPos).text.match(commentRegExp)
        if (!matchArray) break
        list.unshift(matchArray[1])
      }
      comment = list.join('\n')
    }

    return comment
  }

  /**
   * 行番号からDEF定義名を取得
   *
   * @param position 行番号
   * @returns DEF定義名
   */
  private getFuncName(position: number): string {
    for (let data of this.funcDefData) {
      if (data.start < position && data.end > position) {
        return data.name
      }
    }
    return ''
  }

  /**
   * Markdownテキストを作成
   *
   * @param data 宣言データ
   * @returns Markdownテキスト
   */
  private createMarkdown(data: declStatementDataType): vscode.MarkdownString {
    const markdown = new vscode.MarkdownString()
    markdown.appendCodeblock(data.statement)
    if (data.comment) {
      markdown.appendText(data.comment)
    }
    return markdown
  }
}
