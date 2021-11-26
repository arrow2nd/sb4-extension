import * as vscode from 'vscode'

export const defaultCompletionItems: vscode.CompletionItem[] = [
  {
    label: 'DIV',
    documentation: '整数除算（整数演算子）',
    kind: vscode.CompletionItemKind.Operator
  },
  {
    label: 'MOD',
    documentation: '剰余（整数演算子）',
    kind: vscode.CompletionItemKind.Operator
  },
  {
    label: 'AND',
    documentation: '論理積（整数演算子）',
    kind: vscode.CompletionItemKind.Operator
  },
  {
    label: 'OR',
    documentation: '論理和（整数演算子）',
    kind: vscode.CompletionItemKind.Operator
  },
  {
    label: 'XOR',
    documentation: '排他的論理和（整数演算子）',
    kind: vscode.CompletionItemKind.Operator
  },
  {
    label: 'NOT',
    documentation: 'ビット反転（整数演算子）',
    kind: vscode.CompletionItemKind.Operator
  },
  {
    label: 'DIM',
    documentation: '変数、配列の定義',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'VAR',
    documentation: '変数、配列の定義',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SWAP',
    documentation: '変数の値を交換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'INC',
    documentation: '変数の値を増やす',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'DEC',
    documentation: '変数の値を減らす',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'COPY',
    documentation: '値をコピー',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RINGCOPY',
    documentation: 'リングバッファとしてコピー',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SORT',
    documentation: '配列の昇順ソート',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RSORT',
    documentation: '配列の降順ソート',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PUSH',
    documentation: '配列末尾に値を挿入',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'POP',
    documentation: '配列末尾から値を取り出し',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'UNSHIFT',
    documentation: '配列先頭に値を挿入',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SHIFT',
    documentation: '配列先頭から値を取り出し',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'FILL',
    documentation: '配列全体を同じ値で埋める',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TYPEOF',
    documentation: '値の型を調べる',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ARRAY%',
    documentation: '整数配列の作成',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ARRAY#',
    documentation: '実数配列の作成',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ARRAY$',
    documentation: '文字列配列の作成',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RESIZE',
    documentation: '配列要素数変更',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'INSERT',
    documentation: '配列に要素を挿入',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'REMOVE',
    documentation: '配列から要素を削除',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'FIND',
    documentation: '配列から要素を検索',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'INSPECT',
    documentation: 'デバッグ用に変数内容表示',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GOTO',
    documentation: '無条件ジャンプ',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GOSUB',
    documentation: 'サブルーチンジャンプ',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RETURN',
    documentation: 'ジャンプ元に戻る',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ON',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'IF',
    documentation: '条件式の結果により違う処理を行う',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'THEN',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ELSE',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ELSEIF',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CASE',
    documentation: '値毎に違う処理を行う',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'WHEN',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'OTHERWISE',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ENDCASE',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'LOOP',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ENDLOOP',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'FOR',
    documentation: '変数の値を変えながらループ',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TO',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'NEXT',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'WHILE',
    documentation: '条件式が真の間ループ',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'WEND',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'REPEAT',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'UNTIL',
    documentation: '条件式が偽の間ループ',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CONTINUE',
    documentation: '次のループにジャンプ',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BREAK',
    documentation: 'ループを脱出する',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'END',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'STOP',
    documentation: 'プログラム中断',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'DEF',
    documentation: 'ユーザー定義命令',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'COMMON',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'OUT',
    documentation: '',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'DEFARGC',
    documentation: 'DEFの引数の数を取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'DEFARG',
    documentation: 'DEFの引数の値を取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'DEFOUTC',
    documentation: 'DEFの返値の数を取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'DEFOUT',
    documentation: 'DEFの返値を設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CALL',
    documentation: '命令を文字列で指定し呼び出し',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CLS',
    documentation: 'テキストスクリーンのクリア',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'COLOR',
    documentation: '文字表示色の設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'LOCATE',
    documentation: '文字表示座標の設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PRINT',
    documentation: '文字表示',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'INPUT',
    documentation: '変数に値を入力',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'LINPUT',
    documentation: '変数に値を入力',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'INKEY$',
    documentation: '入力文字の取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'INT',
    documentation: '実数を整数に変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'FLOAT',
    documentation: '整数を実数に変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'FLOOR',
    documentation: '数値の切り下げ',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ROUND',
    documentation: '四捨五入',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CEIL',
    documentation: '数値の切り上げ',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ABS',
    documentation: '絶対値',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SGN',
    documentation: '数値の符号',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'MIN',
    documentation: '最小値',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'MAX',
    documentation: '最大値',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RND',
    documentation: '整数乱数',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RNDF',
    documentation: '実数乱数',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RANDOMIZE',
    documentation: '乱数初期化',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SQR',
    documentation: '平方根',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'EXP',
    documentation: '指数',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'LOG',
    documentation: '対数',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'POW',
    documentation: 'べき乗',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RAD',
    documentation: '度をラジアンに変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'DEG',
    documentation: 'ラジアンを度に変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SIN',
    documentation: '三角関数 sin',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'COS',
    documentation: '三角関数 cos',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TAN',
    documentation: '三角関数 tan',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ASIN',
    documentation: 'sinの逆関数',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ACOS',
    documentation: 'cosの逆関数',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ATAN',
    documentation: 'tanの逆関数',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SINH',
    documentation: '双曲線関数 sinh',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'COSH',
    documentation: '双曲線関数 cosh',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TANH',
    documentation: '双曲線関数 tanh',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CLASSIFY',
    documentation: '実数の状態を調べる',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ASC',
    documentation: '文字を文字コードに変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CHR$',
    documentation: '文字コードを文字に変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'VAL',
    documentation: '文字列を数値に変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'STR$',
    documentation: '数値を文字列に変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'HEX$',
    documentation: '整数を１６進文字列に変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BIN$',
    documentation: '整数を２進数文字列に変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'FORMAT$',
    documentation: '値を整形した文字列を作る',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'LEN',
    documentation: '文字列や配列の長さを取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'LAST',
    documentation: '文字列や配列の末尾位置を取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'MID$',
    documentation: '部分文字列を取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'LEFT$',
    documentation: '文字列の左側を切り出し',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RIGHT$',
    documentation: '文字列の右側を切り出し',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'INSTR',
    documentation: '部分文字列を検索',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SUBST$',
    documentation: '文字列の一部分を置換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'DATE$',
    documentation: '現在の日付文字列を取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TIME$',
    documentation: '現在の時間文字列を取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'FILES',
    documentation: 'ファイル一覧表示・取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'LOAD',
    documentation: 'プログラムのロード',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'LOADG',
    documentation: 'グラフィックページのロード',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'LOADV',
    documentation: '配列・文字列のロード',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SAVE',
    documentation: 'プログラムのセーブ',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SAVEG',
    documentation: 'グラフィックページのセーブ',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SAVEV',
    documentation: '配列・文字列のセーブ',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PROJECT',
    documentation: '使用するプロジェクトの設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'EXEC',
    documentation: 'プログラムの実行',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CHKFILE',
    documentation: 'ファイルがあるかどうか確認',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'DELETE',
    documentation: 'ファイルの削除',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RENAME',
    documentation: 'ファイルの名前変更',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CONST',
    documentation: '定数定義',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ENUM',
    documentation: '定数を連番で定義',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'DATA',
    documentation: 'データ定義',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'READ',
    documentation: 'データ読み出し',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RESTORE',
    documentation: 'READの読み出し位置設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'OPTION',
    documentation: '実行オプション設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'WAIT',
    documentation: '描画完了まで待つ',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'VSYNC',
    documentation: '描画完了まで待つ',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'REM',
    documentation: 'コメント',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TMREAD',
    documentation: '時間の読み出し',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'DTREAD',
    documentation: '日付の読み出し',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CHKLABEL',
    documentation: 'ラベルの検索',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CHKCALL',
    documentation: '命令の検索',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CHKVAR',
    documentation: '変数の検索',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'DIALOG',
    documentation: 'ダイアログボックス表示',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RESULT',
    documentation: '各種命令の実行結果を返す',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CALLIDX',
    documentation: 'CALL SPRITE/TEXTの呼び出し番号',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CLIPBOARD',
    documentation: 'クリップボード操作',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'KEY',
    documentation: 'ファンクションキー文字列操作',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'FONTINFO',
    documentation: '文字の格納座標の取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'FREEMEM',
    documentation: 'メモリ空き容量の取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'MILLISEC',
    documentation: 'プログラム実行時間をミリセコンド単位で取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'MAINCNT',
    documentation: 'プログラム実行時間をフレーム単位で取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SYSPARAM',
    documentation: 'システム設定内容の取得・操作',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PERFBEGIN',
    documentation: '速度計測開始',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PERFEND',
    documentation: '速度計測終了と結果取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'METALOAD',
    documentation: 'メタデータロード',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'METAEDIT',
    documentation: 'メタデータ編集',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'METASAVE',
    documentation: 'メタデータセーブ',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ACLS',
    documentation: '画面リセット',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'XSCREEN',
    documentation: '画面解像度の設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ANIMDEF',
    documentation: 'アニメーション定義',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BACKCOLOR',
    documentation: '背景色の設定・取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'FADE',
    documentation: '画面フェードの設定・取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'FADECHK',
    documentation: '画面フェード状況の確認',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GTARGET',
    documentation: '描画先グラフィックページ設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GCOLOR',
    documentation: '描画色を設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RGB',
    documentation: 'RGB値と色コードの変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RGBF',
    documentation: '実数RGB値と色コードの変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'HSV',
    documentation: 'HSV値と色コードの変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'HSVF',
    documentation: '実数HSV値と色コードの変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GCLIP',
    documentation: '描画クリッピングの設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GCLS',
    documentation: 'グラフィックページのクリア',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GPSET',
    documentation: '点を描く',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GPGET',
    documentation: '指定座標の色コード取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GLINE',
    documentation: '線を描く',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GCIRCLE',
    documentation: '円・円弧を描く',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GBOX',
    documentation: '四角を描く',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GFILL',
    documentation: '四角を塗りつぶす',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GPAINT',
    documentation: '塗りつぶし',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GCOPY',
    documentation: '画像を違う座標にコピー',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GSAVE',
    documentation: '画像を配列に保存',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GLOAD',
    documentation: '画像を配列から読み出し',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GTRI',
    documentation: '三角形を描く',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GPUTCHR',
    documentation: '文字をグラフィックページに描く',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GPUTCHRP',
    documentation: 'プロポーショナル文字をグラフィックページに描く',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GARRAY',
    documentation: 'グラフィックページを配列として扱う',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GUPDATE',
    documentation: 'GARRAYの操作結果反映',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GSAMPLE',
    documentation: 'スプライト・テキストスクリーンでの参照方法設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPSET',
    documentation: 'スプライト作成',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPCLR',
    documentation: 'スプライト削除',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPSHOW',
    documentation: 'スプライト表示',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPHIDE',
    documentation: 'スプライトを隠す',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPHOME',
    documentation: '表示原点の設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPOFS',
    documentation: '平行移動',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPROT',
    documentation: '回転',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPSCALE',
    documentation: '拡大・縮小',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPCOLOR',
    documentation: '表示色の設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPCHR',
    documentation: '各種属性の操作',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPPAGE',
    documentation: '参照グラフィックページ設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPLAYER',
    documentation: '所属レイヤー設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPDEF',
    documentation: 'スプライト定義作成',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPLINK',
    documentation: '親子関係設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPUNLINK',
    documentation: '親子関係解除',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPANIM',
    documentation: 'アニメーション設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPSTOP',
    documentation: 'アニメーション停止',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPSTART',
    documentation: 'アニメーション開始',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPCHK',
    documentation: 'アニメーション状況の確認',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPVAR',
    documentation: 'スプライト変数操作',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPCOL',
    documentation: '当たり判定設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPCOLVEC',
    documentation: '当たり判定に使用する移動速度設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPHITSP',
    documentation: 'スプライト間の当たり判定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPHITRC',
    documentation: 'スプライトと矩形の当たり判定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPHITINFO',
    documentation: '当たり判定結果の詳細情報取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPFUNC',
    documentation: 'CALL SPRITEで呼び出されるルーチン設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SPUSED',
    documentation: 'スプライトが使われているか確認',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TPRINT',
    documentation: '文字表示',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ATTR',
    documentation: '文字属性の設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SCROLL',
    documentation: 'スクロール',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CHKCHR',
    documentation: '指定座標に書かれている文字を取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TSCREEN',
    documentation: 'テキストスクリーンサイズ・フォント設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TPAGE',
    documentation: 'ユーザー定義文字の参照先を設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TCOLOR',
    documentation: 'テキストスクリーン全体の描画色を設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TLAYER',
    documentation: 'テキストスクリーンの所属レイヤーを設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TPUT',
    documentation: '文字書き込み',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TFILL',
    documentation: '指定領域を文字で塗りつぶす',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'THOME',
    documentation: '表示原点設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TOFS',
    documentation: '平行移動',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TROT',
    documentation: '回転',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TSCALE',
    documentation: '拡大・縮小',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TSHOW',
    documentation: 'テキストスクリーン表示',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'THIDE',
    documentation: 'テキストスクリーンを隠す',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TBLEND',
    documentation: '半透明合成方法設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TANIM',
    documentation: 'アニメーション設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TSTOP',
    documentation: 'アニメーション停止',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TSTART',
    documentation: 'アニメーション開始',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TCHK',
    documentation: 'アニメーション状況取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TVAR',
    documentation: 'テキストスクリーン変数操作',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TCOPY',
    documentation: '内容を別のテキストスクリーンにコピー',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TSAVE',
    documentation: '内容を配列に保存',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TLOAD',
    documentation: '内容を配列から読み出し',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TARRAY',
    documentation: '内容を配列として扱う',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TUPDATE',
    documentation: 'TARRAY操作結果を反映',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TFUNC',
    documentation: 'CALL TEXTで呼び出されるルーチンを登録',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TCOORD',
    documentation: '画面座標とテキストスクリーン座標間の変換',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'LAYER',
    documentation: 'レイヤー合成方法設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'LFILTER',
    documentation: 'フィルター効果設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'LCLIP',
    documentation: '表示クリッピング設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'LMATRIX',
    documentation: '描画変換行列設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'XCTRLSTYLE',
    documentation: '操作スタイル・使用コントローラーの設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CONTROLLER',
    documentation: 'コントローラー状態取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BUTTON',
    documentation: 'ボタン操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BREPEAT',
    documentation: 'ボタンの連射設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'STICK',
    documentation: 'スティック操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ACCEL',
    documentation: '加速度センサー値取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GYROV',
    documentation: 'ジャイロセンサー角速度取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GYROA',
    documentation: 'ジャイロセンサー角度取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'GYROSYNC',
    documentation: 'ジャイロセンサーリセット',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'VIBRATE',
    documentation: '振動',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TOUCH',
    documentation: 'タッチ操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'MOUSE',
    documentation: 'マウス操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'MBUTTON',
    documentation: 'マウスボタン操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'IRSTART',
    documentation: 'IRカメラ初期化',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'IRSTOP',
    documentation: 'IRカメラ停止',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'IRSTATE',
    documentation: 'IRカメラ状態取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'IRREAD',
    documentation: 'IRカメラ値取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'IRSPRITE',
    documentation: 'IRカメラ画像用スプライト設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'KEYBOARD',
    documentation: 'キーボード操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TCPIANO',
    documentation: 'Toy-Conピアノ操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TCHOUSE',
    documentation: 'Toy-Conおうち操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TCFISHING',
    documentation: 'Toy-Conつり操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TCBIKE',
    documentation: 'Toy-Conバイク操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TCROBOT',
    documentation: 'Toy-Conロボット操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TCVISOR',
    documentation: 'Toy-Conバイザー操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TCCAR',
    documentation: 'Toy-Conクルマ操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TCPLANE',
    documentation: 'Toy-Conヒコウキ操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TCSUBM',
    documentation: 'Toy-Conセンスイカン操作取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TCVEHICLE',
    documentation: 'ドライブキットToy-Conカギ装着状況取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BEEP',
    documentation: '効果音再生',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BEEPPAN',
    documentation: '効果音パンポット設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BEEPPIT',
    documentation: '効果音ピッチ設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BEEPSTOP',
    documentation: '効果音停止',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BEEPVOL',
    documentation: '効果音音量',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BGMCLEAR',
    documentation: 'BGM削除',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BGMCONT',
    documentation: 'BGM再開',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BGMPITCH',
    documentation: 'BGMピッチ設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BGMPLAY',
    documentation: 'BGM再生',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BGMPAUSE',
    documentation: 'BGM停止',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BGMSET',
    documentation: 'BGM登録',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BGMSETD',
    documentation: 'BGM登録',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BGMSTOP',
    documentation: 'BGM停止',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BGMVAR',
    documentation: 'BGM変数操作',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BGMVOL',
    documentation: 'BGM音量',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BGMWET',
    documentation: 'BGMエフェクタ効果量設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BGMCHK',
    documentation: 'BGM再生状況確認',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'WAVSET',
    documentation: 'ユーザー波形登録',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'WAVSETA',
    documentation: 'ユーザー波形登録',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'EFCEN',
    documentation: 'エフェクタON/OFF',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'EFCSET',
    documentation: 'エフェクタ効果設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'EFCWET',
    documentation: 'エフェクタ効果量設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PCMCONT',
    documentation: 'ストリーミング再生再開',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PCMPOS',
    documentation: 'ストリーミング再生位置設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PCMSTOP',
    documentation: 'ストリーミング再生停止',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PCMSTREAM',
    documentation: 'ストリーミング再生',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PCMVOL',
    documentation: 'ストリーミング再生音量設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SNDMSBAL',
    documentation: 'メイン・サブ間音量バランス設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SNDMVOL',
    documentation: 'マスターボリューム設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'SNDSTOP',
    documentation: '全サウンド停止・リセット',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TALK',
    documentation: '音声合成',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TALKCHK',
    documentation: 'TALK再生状況確認',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'TALKSTOP',
    documentation: 'TALK停止',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'CHKMML',
    documentation: 'MML文法チェック',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RECCHK',
    documentation: 'RECSTARTによる録音の状態を取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RECDATA',
    documentation: 'RECSTARTで録音されたサンプル値を取り出す',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RECLEN',
    documentation: 'RECSTARTで確保されたバッファのサンプル数を返す',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RECPOS',
    documentation: 'RECSTARTで録音される現在のサンプル位置を返す',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RECSAVE',
    documentation: 'RECSTARTで録音したサンプル値を配列に取り出す',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RECSTART',
    documentation: 'BEEP/BGMPLAY/TALKで再生されている音を録音',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'RECSTOP',
    documentation: 'RECSTARTによる録音を停止',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BIQUAD',
    documentation: 'BiQuadフィルタの適用',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'BQPARAM',
    documentation: 'BiQuadパラメータの作成',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'FFT',
    documentation: 'FFT',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'IFFT',
    documentation: '逆FFT',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'FFTWFN',
    documentation: 'FFT窓関数の生成',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ARYOP',
    documentation: '配列の一括演算',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PRGEDIT',
    documentation: 'プログラム編集開始',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PRGGET$',
    documentation: '行取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PRGSEEK',
    documentation: '行移動',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PRGSET',
    documentation: '行入れ替え',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PRGINS',
    documentation: '行挿入',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PRGDEL',
    documentation: '行削除',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PRGSIZE',
    documentation: '指定スロットのファイルサイズ取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PRGNAME$',
    documentation: '指定スロットのファイル名取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'XSUBSCREEN',
    documentation: 'サブプログラム表示領域設定',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ENVSTAT',
    documentation: 'メインインタプリタ状態取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ENVLOAD',
    documentation: 'メインインタプリタリソース読み出し',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ENVSAVE',
    documentation: 'メインインタプリタにリソース書き込み',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ENVINPUT$',
    documentation: 'メインインタプリタのキー入力状況取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ENVTYPE',
    documentation: 'メイン・サブの識別',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ENVFOCUS',
    documentation: 'ユーザー操作の受け渡しと獲得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ENVPROJECT',
    documentation: '使用プロジェクトをメインに同期させる',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'ENVLOCATE',
    documentation: 'キャレットの画面座標を取得',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'PUSHKEY',
    documentation: 'キー入力の流し込み',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'HELPINFO',
    documentation: 'ヘルプデータ検索',
    kind: vscode.CompletionItemKind.Function
  },
  {
    label: 'HELPGET',
    documentation: 'ヘルプデータ取得',
    kind: vscode.CompletionItemKind.Function
  },

  {
    label: 'UISTATE',
    documentation: 'システムの状態を取得？\n※リファレンスに情報がない命令です',
    kind: vscode.CompletionItemKind.Issue
  },
  {
    label: 'UIRUN',
    documentation:
      'UIインタプリタでプログラム実行？\n※試験的に開放されている命令です',
    kind: vscode.CompletionItemKind.Issue
  },
  {
    label: 'UISTOP',
    documentation:
      'UIインタプリタで実行したプログラムの停止？\n※試験的に開放されている命令です',
    kind: vscode.CompletionItemKind.Issue
  },
  {
    label: 'UIPUSHCMPL',
    documentation: '入力補完関係の命令？\n※リファレンスに情報がない命令です',
    kind: vscode.CompletionItemKind.Issue
  },
  {
    label: 'UIGETCMPL',
    documentation: '入力補完関係の命令？\n※リファレンスに情報がない命令です',
    kind: vscode.CompletionItemKind.Issue
  },
  {
    label: 'UIMASK',
    documentation: '※リファレンスに情報がない命令です',
    kind: vscode.CompletionItemKind.Issue
  },
  {
    label: 'UIFOCUS',
    documentation: '※リファレンスに情報がない命令です',
    kind: vscode.CompletionItemKind.Issue
  },

  {
    label: '#ON',
    documentation: 'ON (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#OFF',
    documentation: 'OFF (=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#YES',
    documentation: 'YES (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#NO',
    documentation: 'NO (=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#TRUE',
    documentation: 'TRUE (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#FALSE',
    documentation: 'FALSE (=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#PI',
    documentation: '円周率 (=3.14159265358979323846)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EXP',
    documentation: 'ネイピア数 (=2.71828182845904523536)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#C_CLEAR',
    documentation: '透明 (=&H00000000)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_AQUA',
    documentation: '水色 (=&HFF00FFFF)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_BLACK',
    documentation: '黒 (=&HFF000000)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_BLUE',
    documentation: '青 (=&HFF0000FF)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_CYAN',
    documentation: '水色 (=&HFF00FFFF)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_FUCHSIA',
    documentation: '明るい紫 (=&HFFFF00FF)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_GRAY',
    documentation: '灰色 (=&HFF808080)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_GREEN',
    documentation: '緑 (=&HFF008000)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_LIME',
    documentation: '明るい緑 (=&HFF00FF00)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_MAGENTA',
    documentation: '明るい紫 (=&HFFFF00FF)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_MAROON',
    documentation: 'えび茶色 (=&HFF800000)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_NAVY',
    documentation: '紺 (=&HFF000080)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_OLIVE',
    documentation: 'オリーブ色 (=&HFF808000)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_PURPLE',
    documentation: '紫 (=&HFF800080)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_RED',
    documentation: '赤 (=&HFFFF0000)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_SILVER',
    documentation: '銀色 (=&HFFC0C0C0)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_TEAL',
    documentation: '青緑 (=&HFF008080)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_WHITE',
    documentation: '白 (=&HFFFFFFFF)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#C_YELLOW',
    documentation: '黄色 (=&HFFFFFF00)',
    kind: vscode.CompletionItemKind.Color
  },
  {
    label: '#B_RUP',
    documentation: 'フル、2本持ち\t: Xボタン\n縦、横持ち\t: 上ボタン\n(=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_RDOWN',
    documentation: 'フル、2本持ち\t: Bボタン\n縦、横持ち\t: 下ボタン\n(=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_RLEFT',
    documentation: 'フル、2本持ち\t: Yボタン\n縦、横持ち\t: 左ボタン\n(=2)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_RRIGHT',
    documentation: 'フル、2本持ち\t: Aボタン\n縦、横持ち\t: 右ボタン\n(=3)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_LUP',
    documentation: '上ボタン (=4)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_LDOWN',
    documentation: '下ボタン (=5)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_LLEFT',
    documentation: '左ボタン (=6)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_LRIGHT',
    documentation: '右ボタン (=7)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_L1',
    documentation: 'フル、2本持ち\t: Lボタン\n縦、横持ち\t: SLボタン\n(=8)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_R1',
    documentation: 'フル、2本持ち\t: Rボタン\n縦、横持ち\t: SRボタン\n(=9)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_L2',
    documentation: 'フル、2本持ち\t: ZLボタン\n縦、横持ち\t: L、Rボタン\n(=10)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_R2',
    documentation:
      'フル、2本持ち\t: ZRボタン\n縦、横持ち\t: ZL、ZRボタン\n(=11)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_SL',
    documentation: 'フル、2本持ち\t: Lボタン\n縦、横持ち\t: SLボタン\n(=8)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_SR',
    documentation: 'フル、2本持ち\t: Rボタン\n縦、横持ち\t: SRボタン\n(=9)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_S1',
    documentation: 'フル、2本持ち\t: ZLボタン\n縦、横持ち\t: L、Rボタン\n(=10)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_S2',
    documentation:
      'フル、2本持ち\t: ZRボタン\n縦、横持ち\t: ZL、ZRボタン\n(=11)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_LSTICK',
    documentation:
      'フル、2本持ち\t: Lスティック押し込み\n縦、横持ち\t: スティック押し込み\n(=12)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_RSTICK',
    documentation: 'Rスティック押し込み (=13)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_RANY',
    documentation: 'A、B、X、Yボタンのいずれか (=14)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_LANY',
    documentation: '上、下、左、右ボタンのいずれか (=15)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_ANY',
    documentation: 'スティック押し込み以外のいずれかのボタン (=16)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_A',
    documentation: 'Aボタン (=3)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_B',
    documentation: 'Bボタン (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_X',
    documentation: 'Xボタン (=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#B_Y',
    documentation: 'Yボタン (=2)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#A_ROT0',
    documentation: '回転 (=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#A_ROT90',
    documentation: '回転 (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#A_ROT180',
    documentation: '回転 (=2)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#A_ROT270',
    documentation: '回転 (=3)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#A_REVH',
    documentation: '横回転 (=4)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#A_REVV',
    documentation: '縦回転 (=8)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#A_ADD',
    documentation: '加算合成 (=16)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#CHKXY',
    documentation: 'XY座標 (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#CHKZ',
    documentation: 'Z座標 (=2)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#CHKR',
    documentation: '回転 (=4)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#CHKS',
    documentation: '倍率XY (=8)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#CHKC',
    documentation: '表示色 (=16)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#CHKV',
    documentation: '変数 (=32)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#CHKUV',
    documentation: 'UV座標 (=64)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#CHKI',
    documentation: '定義番号 (=128)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#T_DEFAULT',
    documentation: 'デフォルト型 (=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#T_INT',
    documentation: '整数型 (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#T_REAL',
    documentation: '実数型 (=2)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#T_STR',
    documentation: '文字列型 (=3)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#T_INTARRAY',
    documentation: '整数配列 (=5)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#T_REALARRAY',
    documentation: '実数配列 (=6)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#T_STRARRAY',
    documentation: '文字列配列 (=7)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#G_NORMAL',
    documentation: '単純描画 (=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#G_NORMAL2',
    documentation: '透明度が0以外の時、単純描画 (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#G_ALPHA',
    documentation: '半透明描画 (=2)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#G_ALPHA2',
    documentation: '描画先の透明度を考慮して半透明描画 (=3)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#G_ADD',
    documentation: '加算描画 (=4)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#BQAPF',
    documentation: 'オールパスフィルタ (=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#BQLPF',
    documentation: 'ローパスフィルタ (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#BQHPF',
    documentation: 'ハイパスフィルタ (=2)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#BQBPF',
    documentation: 'バンドパスフィルタ  (=3)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#BQBSF',
    documentation: 'バンドストップフィルタ  (=4)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#BQLSF',
    documentation: 'ローシェルフフィルタ  (=5)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#BQHSF',
    documentation: 'ハイシェルフフィルタ  (=6)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#BQPEQ',
    documentation: 'ピーキングイコライザ  (=7)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#WFRECT',
    documentation: '矩形意  (=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#WFHAMM',
    documentation: 'ハミング数  (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#WFHANN',
    documentation: 'ハニング数  (=2)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#WFBLKM',
    documentation: 'ブラックマン数  (=3)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#AOPADD',
    documentation: '加算（p1+p2） (=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#AOPSUB',
    documentation: '減算（p1-p2） (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#AOPMUL',
    documentation: '乗算（p1*p2） (=2)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#AOPDIV',
    documentation: '除算（p1/p2） (=3)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#AOPMAD',
    documentation: '積和（p1*p2+p3） (=4)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#AOPLIP',
    documentation: '線形補完（p1*p3+p2*(1-p3)） (=5)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#AOPCLP',
    documentation: 'クランプ（p1の値をp2<=x<=p3の範囲内に丸める）\n(=6)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCOFF',
    documentation: 'OFF (=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCON',
    documentation: 'ON (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCBATH',
    documentation: 'エフェクト：お風呂 (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCCAVE',
    documentation: 'エフェクト：洞窟 (=2)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCSPACE',
    documentation: 'エフェクト：宇宙 (=3)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCREFSROOM',
    documentation: '反射音：小さい部屋 (=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCREFLROOM',
    documentation: '反射音：大きい部屋 (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCREFHALL',
    documentation: '反射音：ホール (=2)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCREFCAVE',
    documentation: '反射音：洞窟 (=3)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCREFNONE',
    documentation: '反射音なし (=4)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCREVROOM',
    documentation: '残響音：部屋 (=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCREVHALL',
    documentation: '残響音：ホール (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCREVMETAL',
    documentation: '残響音：金属製の回廊 (=2)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCREVCAVE',
    documentation: '残響音：洞窟 (=3)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#EFCREVREV',
    documentation: '残響音：リバーブ (=4)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#PVLEFT',
    documentation: '左 (=0)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#PVRIGHT',
    documentation: '右 (=1)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#GRPWIDTH',
    documentation: 'グラフィックページの幅 (=2048)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#GRPHEIGHT',
    documentation: 'グラフィックページの高さ (=2048)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#GRPF',
    documentation: 'フォント用グラフィックページ (=5)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#GSPRITE',
    documentation: 'グラフィック表示用に使用するスプライトID (=4095)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#TCONSOLE',
    documentation: 'コンソール表示用に使用するテキストスクリーンID (=4)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#MAXT',
    documentation: '通常テキストスクリーンの最大ID (=3)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#MAXSP',
    documentation: '通常スプライトの最大ID (=4094)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#MAXGRP',
    documentation: '通常グラフィックページの最大ID (=4)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#HARDWARE',
    documentation: 'ハードウェア識別番号 (=10)',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#VERSION',
    documentation: 'バージョン番号',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#_LINE',
    documentation: 'この定数が書かれた行番号に置き換わる特殊な定数',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#_SLOT',
    documentation: 'この定数が書かれたスロット番号に置き換わる特殊な定数',
    kind: vscode.CompletionItemKind.Constant
  },
  {
    label: '#_FILENAME',
    documentation: 'この定数が書かれたファイル名文字列に置き換わる特殊な定数',
    kind: vscode.CompletionItemKind.Constant
  }
]
