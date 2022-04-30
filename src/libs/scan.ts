import * as vscode from 'vscode'

/** DEF定義情報 */
type funcDefDataType = {
  name: string
  start: number
  end: number
}

/** 宣言情報 */
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
    let tmpFuncDefData = {} as funcDefDataType
    this.funcDefData = []
    this.declStatementData = { global: [] }

    // 全ての行を捜索
    const lines = document.getText().split(/[\r\n]/g)

    for (let index = 0; index < lines.length; index++) {
      const position = index + 1
      const line = lines[index]

      // コメント文ならスキップ
      if (/^(REM|')/i.test(line)) continue

      for (const part of line.trim().split(':')) {
        // 宣言・定義文を抽出
        const results =
          this.getDeclStatement(document, part, index) ||
          this.getLabelStatement(part)

        if (!results) {
          // DEFの終端ならDEF定義のデータを追加
          if (isDef && /\bEND\b/i.test(part)) {
            tmpFuncDefData.end = position
            this.funcDefData.push(tmpFuncDefData)
            isDef = false
          }
          break
        }

        const [type, names, statement] = results

        // DEF定義のデータを作成
        if (type === 'DEF') {
          this.declStatementData[names[0]] = []
          tmpFuncDefData = {
            name: names[0],
            start: position,
            end: 0
          }
          isDef = true
        }

        // 宣言文のスコープ
        const scope = isDef && type !== 'DEF' ? tmpFuncDefData.name : 'global'
        // 対応するコメント
        const comment = this.getComment(document, line, index)

        // 宣言文のデータを追加
        for (const name of names) {
          this.declStatementData[scope].push({
            name,
            comment,
            statement,
            position,
            kind: this.convertToCompletionItemKind(type)
          })
        }
      }
    }
  }

  /**
   * 補完候補を作成
   * @param position 行
   * @returns 補完候補
   */
  public createCompletionItems = (
    position: number
  ): vscode.CompletionItem[] => {
    const completionItems = [] as vscode.CompletionItem[]
    const scopes = ['global']

    // positionがDEF内なら定義名を取得
    const defineName = this.getFuncName(position)
    if (defineName) {
      scopes.push(defineName)
    }

    // スコープ内の変数、関数定義を入力候補に追加
    for (const scope of scopes) {
      for (const data of this.declStatementData[scope]) {
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
   * @param word 単語
   * @param position 行数
   * @returns Markdownテキスト
   */
  public createHoverContent = (
    word: string,
    position: number
  ): vscode.MarkdownString | null => {
    const scopes = []

    // positionがDEF内なら定義名を取得
    const funcName = this.getFuncName(position)
    if (funcName) {
      scopes.push(funcName)
    }

    // スコープにグローバルを追加
    // NOTE: DEF内 -> グローバルの順に検索するため、最後に追加
    scopes.push('global')

    // 検索
    for (const scope of scopes) {
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
   * 定数・変数・DEFの宣言・定義文を取得
   * @param document ドキュメント
   * @param line 行
   * @param position 行数
   * @returns [種類, 名前, 宣言・定義文]
   */
  private getDeclStatement(
    document: vscode.TextDocument,
    line: string,
    position: number
  ): [string, string[], string] | undefined {
    // コメントアウトされた行なら無視
    if (/\s*'/.test(line)) return

    // 定数・変数・DEF・ラベルの宣言を抽出
    const declStatement = line.match(/\b(CONST|ENUM|DIM|VAR|DEF)\b\s+(.+)/i)
    if (!declStatement) return

    // 宣言名の末尾にバックスラッシュがある場合次の行を結合
    let name = declStatement[2]
    for (let count = 1; /\\.*$/.test(name); count++) {
      const add = document.lineAt(position + count).text.trim()
      name = name.replace(/\\.*$/, '') + add
    }

    // コメントを削除
    name = name.replace(/'.*/, '')

    const type = declStatement[1].toUpperCase()
    const statement = [type, name].join(type === '@' ? '' : ' ')

    // カンマで分割して括弧、スペース、代入演算子以降を削除
    const names = name
      .replace(/\[[^\]]*\]|\(.*\)/g, '')
      .split(/,/)
      .map((e) => e.trim().replace(/(\s*=| ).*/, ''))

    return [type, names, statement]
  }

  /**
   * ラベルの宣言を取得
   * @param line 行
   * @returns [種類, 名前, 宣言文]
   */
  private getLabelStatement(
    line: string
  ): [string, string[], string] | undefined {
    // ラベルの宣言を抽出
    const declStatement = line.match(/^(?!GO(?:TO|SUB))@([A-Za-z0-9_]+)/)
    if (!declStatement) return undefined

    const statement = `@${declStatement[1].trim()}`
    return ['LABEL', [statement], statement]
  }

  /**
   * CompletionItemKindに変換
   * @param type 宣言の種類
   * @returns CompletionItemKind
   */
  private convertToCompletionItemKind(type: string): vscode.CompletionItemKind {
    const typeList = new Map([
      ['DEF', vscode.CompletionItemKind.Function],
      ['ENUM', vscode.CompletionItemKind.Enum],
      ['CONST', vscode.CompletionItemKind.Constant],
      ['LABEL', vscode.CompletionItemKind.Class]
    ])

    return typeList.get(type) || vscode.CompletionItemKind.Variable
  }

  /**
   * コメントを取得
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
    if (comment) return comment

    // 上の行のコメントを探す
    const commentRegExp = /^\s*'(.*)/
    const list: string[] = []

    for (let nextPos = position - 1; nextPos >= 0; nextPos--) {
      const matchArray = document.lineAt(nextPos).text.match(commentRegExp)
      if (!matchArray) break
      list.unshift(matchArray[1])
    }

    return list.join('\n')
  }

  /**
   * 行番号からDEF定義名を取得
   * @param position 行番号
   * @returns DEF定義名
   */
  private getFuncName(position: number): string {
    return (
      this.funcDefData.find(
        ({ start, end }) => start < position && end >= position
      )?.name || ''
    )
  }

  /**
   * Markdownテキストを作成
   * @param data 宣言データ
   * @returns Markdownテキスト
   */
  private createMarkdown({
    statement,
    comment
  }: declStatementDataType): vscode.MarkdownString {
    const markdown = new vscode.MarkdownString()

    markdown.appendCodeblock(statement)
    if (comment) {
      markdown.appendText(comment)
    }

    return markdown
  }
}
