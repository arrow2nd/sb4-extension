import * as vscode from 'vscode'

type scopeDataType = {
  name: string
  start: number
  end: number
}

type declarationDataType = {
  name: string
  comment: string
  statement: string
  position: number
  kind: vscode.CompletionItemKind
}

export class scanSouceCode {
  private scopeData: scopeDataType[]
  private declarationData: { [key: string]: declarationDataType[] }

  constructor() {
    this.scopeData = []
    this.declarationData = {}
  }

  /**
   * 更新
   */
  public update(): void {
    const document = vscode.window.activeTextEditor?.document
    if (!document) return

    let isDef = false
    let tmpScopeData: scopeDataType

    // 初期化
    this.scopeData = []
    this.declarationData = {}

    // 全ての行を捜索
    const lines = document.getText().split(/[\r\n]/g)
    lines.forEach((line, index) => {
      const position = index + 1
      line = line.trim()

      // 宣言内容を取得
      const [type, names, statement] = this.getDeclarationStatement(
        document,
        line,
        index
      )

      if (!type && !names.length) {
        // DEFの終端ならDEF定義データを追加
        if (isDef && /\bEND\b/i.test(line)) {
          tmpScopeData.end = position
          this.scopeData.push(tmpScopeData)
          isDef = false
        }
        return
      }

      // コメントを取得
      const comment = this.getCommentSentence(document, line, index)

      // DEF定義データを作成
      if (type === 'DEF') {
        tmpScopeData = {
          name: names[0],
          start: position,
          end: 0
        }
        isDef = true
      }

      // 追加する宣言データのスコープ
      const scope = isDef && type !== 'DEF' ? tmpScopeData.name : 'global'
      if (!this.declarationData[scope]) {
        this.declarationData[scope] = []
      }

      // 宣言データを追加
      for (let name of names) {
        this.declarationData[scope].push({
          name: name,
          comment: comment,
          statement: statement,
          position: position,
          kind: this.getCompletionItemKind(type)
        })
      }
    })
  }

  /**
   * 補完候補を取得
   *
   * @param position 行
   * @returns 補完候補
   */
  public getCompletionItems = (position: number): vscode.CompletionItem[] => {
    const completionItems: vscode.CompletionItem[] = []
    const scopes = ['global']

    // positionがDEF内なら定義名を取得
    const defineName = this.getDefineName(position)
    if (defineName) {
      scopes.push(defineName)
    }

    // スコープ内の変数、関数定義を入力候補に追加
    for (let scope of scopes) {
      for (let data of this.declarationData[scope]) {
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
   * ホバー表示のコンテンツを取得
   *
   * @param word 単語
   * @param position 行数
   * @returns Markdownテキスト
   */
  public getHoverContent = (
    word: string,
    position: number
  ): vscode.MarkdownString | null => {
    const scopes = ['global']

    // positionがDEF内なら定義名を取得
    const defineName = this.getDefineName(position)
    if (defineName) {
      scopes.push(defineName)
    }

    // 検索
    for (let scope of scopes) {
      const matchedData = this.declarationData[scope].find(
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
  private getDeclarationStatement(
    document: vscode.TextDocument,
    line: string,
    position: number
  ): [string, string[], string] {
    const declaration = line.match(
      /(?!\s*'\s*)\b(CONST|ENUM|DIM|VAR|DEF)\b\s+([ -&(-~]+)/i
    )
    if (!declaration) return ['', [], '']

    // 種類
    const type = declaration[1].toUpperCase()

    // 名前
    const backSlashRegExp = /\\.*$/
    let name = declaration[2].trim().replace(/'.*/, '')
    let addname = ''
    // 行末にバックスラッシュがあるなら次の行を結合
    for (let count = 1; backSlashRegExp.test(name); count++) {
      addname = document.lineAt(position + count).text.trim()
      name = name.replace(backSlashRegExp, '') + addname
    }

    // ドットで分割して括弧、スペース、代入演算子以降を削除
    const names = name
      .replace(/ .*|[\[\(].*[\]\)]/, '')
      .split(',')
      .map((e) => e.replace(/\s*=.*/, ''))

    // 宣言文
    const statement = `${type} ${name}`

    return [type, names, statement]
  }

  /**
   * CompletionItemKindを取得
   *
   * @param type 宣言種類
   * @returns CompletionItemKind
   */
  private getCompletionItemKind(type: string): vscode.CompletionItemKind {
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
   * コメント文を取得
   *
   * @param document ドキュメント
   * @param line 行
   * @param position 行数
   * @returns コメント文
   */
  private getCommentSentence(
    document: vscode.TextDocument,
    line: string,
    position: number
  ): string {
    // 行末のコメントを探す
    const matchArray = line.match(/'.*/)
    let comment = matchArray ? matchArray[0].slice(1) : ''

    // コメントが無いなら上方向にコメントを探す
    if (!comment) {
      const commentRegExp = /^\s*'(.*)/
      const list: string[] = []
      for (let nextPos = position - 1; nextPos > 0; nextPos--) {
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
  private getDefineName(position: number): string {
    for (let data of this.scopeData) {
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
  private createMarkdown(data: declarationDataType): vscode.MarkdownString {
    const markdown = new vscode.MarkdownString()
    markdown.appendCodeblock(data.statement)
    if (data.comment) {
      markdown.appendText(data.comment)
    }
    return markdown
  }
}
