import * as vscode from 'vscode'

type defineDataType = {
  name: string
  start: number
  end: number
}

type declarationDataType = {
  name: string
  desc: string
  type: string
  position: number
}

export class scan {
  private defineData: defineDataType[]
  private declarationData: { string: declarationDataType[] }[]

  constructor() {
    this.defineData = []
    this.declarationData = []
  }

  public update() {
    const document = vscode.window.activeTextEditor?.document
    if (!document) return

    // 全体を取得
    const lines = document.getText().split(/[\r\n]/g)

    lines.forEach((line, index) => {
      line = line.trim()

      // 宣言文を取得
      const [type, name] = this.getDeclarationStatement(document, line, index)
      if (!type && !name) {
        return
      }

      // コメントを取得
      this.getCommentSentence(document, line, index)
    })
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
  ): [string, string] {
    // 宣言文を取得
    const declaration = line.match(
      /(?!\s*'\s*)\b(CONST|ENUM|DIM|VAR|DEF)\b\s+([ -&(-~]+)/i
    )
    if (!declaration) return ['', '']

    // 宣言の種類と名前
    const type = declaration[1].toUpperCase()
    let name = declaration[2]

    // 行末にバックスラッシュがある場合、次の行を結合
    const backSlashRegExp = /\\.*$/
    let addName = ''
    for (let count = 1; backSlashRegExp.test(name); count++) {
      addName = document.lineAt(position + count).text.trim()
      name = name.replace(backSlashRegExp, '') + addName
    }

    // 括弧、関数のOUT以降、代入演算子以降を削除
    name = name.replace(/\s*(=|OUT).*|[\[\(].*[\]\)]/i, '')

    return [type, name]
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

    // コメントが無かった場合、上方向にコメントを探す
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
    for (let data of this.defineData) {
      if (data.start < position && data.end > position) {
        return data.name
      }
    }
    return ''
  }
}
