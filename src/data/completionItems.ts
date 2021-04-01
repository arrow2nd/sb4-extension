export const defaultCompletionItems = [
  {
    label: 'DIV',
    documentation: '整数除算（整数演算子）',
    kind: 23
  },
  {
    label: 'MOD',
    documentation: '剰余（整数演算子）',
    kind: 23
  },
  {
    label: 'AND',
    documentation: '論理積（整数演算子）',
    kind: 23
  },
  {
    label: 'OR',
    documentation: '論理和（整数演算子）',
    kind: 23
  },
  {
    label: 'XOR',
    documentation: '排他的論理和（整数演算子）',
    kind: 23
  },
  {
    label: 'NOT',
    documentation: 'ビット反転（整数演算子）',
    kind: 23
  },
  {
    label: 'DIM',
    documentation: '変数、配列の定義',
    kind: 2
  },
  {
    label: 'VAR',
    documentation: '変数、配列の定義',
    kind: 2
  },
  {
    label: 'SWAP',
    documentation: '変数の値を交換',
    kind: 2
  },
  {
    label: 'INC',
    documentation: '変数の値を増やす',
    kind: 2
  },
  {
    label: 'DEC',
    documentation: '変数の値を減らす',
    kind: 2
  },
  {
    label: 'COPY',
    documentation: '値をコピー',
    kind: 2
  },
  {
    label: 'RINGCOPY',
    documentation: 'リングバッファとしてコピー',
    kind: 2
  },
  {
    label: 'SORT',
    documentation: '配列の昇順ソート',
    kind: 2
  },
  {
    label: 'RSORT',
    documentation: '配列の降順ソート',
    kind: 2
  },
  {
    label: 'PUSH',
    documentation: '配列末尾に値を挿入',
    kind: 2
  },
  {
    label: 'POP',
    documentation: '配列末尾から値を取り出し',
    kind: 2
  },
  {
    label: 'UNSHIFT',
    documentation: '配列先頭に値を挿入',
    kind: 2
  },
  {
    label: 'SHIFT',
    documentation: '配列先頭から値を取り出し',
    kind: 2
  },
  {
    label: 'FILL',
    documentation: '配列全体を同じ値で埋める',
    kind: 2
  },
  {
    label: 'TYPEOF',
    documentation: '値の型を調べる',
    kind: 2
  },
  {
    label: 'ARRAY%',
    documentation: '整数配列の作成',
    kind: 2
  },
  {
    label: 'ARRAY#',
    documentation: '実数配列の作成',
    kind: 2
  },
  {
    label: 'ARRAY$',
    documentation: '文字列配列の作成',
    kind: 2
  },
  {
    label: 'RESIZE',
    documentation: '配列要素数変更',
    kind: 2
  },
  {
    label: 'INSERT',
    documentation: '配列に要素を挿入',
    kind: 2
  },
  {
    label: 'REMOVE',
    documentation: '配列から要素を削除',
    kind: 2
  },
  {
    label: 'FIND',
    documentation: '配列から要素を検索',
    kind: 2
  },
  {
    label: 'INSPECT',
    documentation: 'デバッグ用に変数内容表示',
    kind: 2
  },
  {
    label: '@LABEL',
    documentation: 'GOTO,GOSUBの飛び先定義',
    kind: 2
  },
  {
    label: 'GOTO',
    documentation: '無条件ジャンプ',
    kind: 2
  },
  {
    label: 'GOSUB',
    documentation: 'サブルーチンジャンプ',
    kind: 2
  },
  {
    label: 'RETURN',
    documentation: 'ジャンプ元に戻る',
    kind: 2
  },
  {
    label: 'ON',
    documentation: '',
    kind: 2
  },
  {
    label: 'IF',
    documentation: '条件式の結果により違う処理を行う',
    kind: 2
  },
  {
    label: 'THEN',
    documentation: '',
    kind: 2
  },
  {
    label: 'ELSE',
    documentation: '',
    kind: 2
  },
  {
    label: 'ELSEIF',
    documentation: '',
    kind: 2
  },
  {
    label: 'CASE',
    documentation: '値毎に違う処理を行う',
    kind: 2
  },
  {
    label: 'WHEN',
    documentation: '',
    kind: 2
  },
  {
    label: 'OTHERWISE',
    documentation: '',
    kind: 2
  },
  {
    label: 'ENDCASE',
    documentation: '',
    kind: 2
  },
  {
    label: 'LOOP',
    documentation: '',
    kind: 2
  },
  {
    label: 'ENDLOOP',
    documentation: '',
    kind: 2
  },
  {
    label: 'FOR',
    documentation: '変数の値を変えながらループ',
    kind: 2
  },
  {
    label: 'TO',
    documentation: '',
    kind: 2
  },
  {
    label: 'NEXT',
    documentation: '',
    kind: 2
  },
  {
    label: 'WHILE',
    documentation: '条件式が真の間ループ',
    kind: 2
  },
  {
    label: 'WEND',
    documentation: '',
    kind: 2
  },
  {
    label: 'REPEAT',
    documentation: '',
    kind: 2
  },
  {
    label: 'UNTIL',
    documentation: '条件式が偽の間ループ',
    kind: 2
  },
  {
    label: 'CONTINUE',
    documentation: '次のループにジャンプ',
    kind: 2
  },
  {
    label: 'BREAK',
    documentation: 'ループを脱出する',
    kind: 2
  },
  {
    label: 'END',
    documentation: '',
    kind: 2
  },
  {
    label: 'STOP',
    documentation: 'プログラム中断',
    kind: 2
  },
  {
    label: 'DEF',
    documentation: 'ユーザー定義命令',
    kind: 2
  },
  {
    label: 'COMMON',
    documentation: '',
    kind: 2
  },
  {
    label: 'OUT',
    documentation: '',
    kind: 2
  },
  {
    label: 'DEFARGC',
    documentation: 'DEFの引数の数を取得',
    kind: 2
  },
  {
    label: 'DEFARG',
    documentation: 'DEFの引数の値を取得',
    kind: 2
  },
  {
    label: 'DEFOUTC',
    documentation: 'DEFの返値の数を取得',
    kind: 2
  },
  {
    label: 'DEFOUT',
    documentation: 'DEFの返値を設定',
    kind: 2
  },
  {
    label: 'CALL',
    documentation: '命令を文字列で指定し呼び出し',
    kind: 2
  },
  {
    label: 'CLS',
    documentation: 'テキストスクリーンのクリア',
    kind: 2
  },
  {
    label: 'COLOR',
    documentation: '文字表示色の設定',
    kind: 2
  },
  {
    label: 'LOCATE',
    documentation: '文字表示座標の設定',
    kind: 2
  },
  {
    label: 'PRINT',
    documentation: '文字表示',
    kind: 2
  },
  {
    label: 'INPUT',
    documentation: '変数に値を入力',
    kind: 2
  },
  {
    label: 'LINPUT',
    documentation: '変数に値を入力',
    kind: 2
  },
  {
    label: 'INKEY$',
    documentation: '入力文字の取得',
    kind: 2
  },
  {
    label: 'INT',
    documentation: '実数を整数に変換',
    kind: 2
  },
  {
    label: 'FLOAT',
    documentation: '整数を実数に変換',
    kind: 2
  },
  {
    label: 'FLOOR',
    documentation: '数値の切り下げ',
    kind: 2
  },
  {
    label: 'ROUND',
    documentation: '四捨五入',
    kind: 2
  },
  {
    label: 'CEIL',
    documentation: '数値の切り上げ',
    kind: 2
  },
  {
    label: 'ABS',
    documentation: '絶対値',
    kind: 2
  },
  {
    label: 'SGN',
    documentation: '数値の符号',
    kind: 2
  },
  {
    label: 'MIN',
    documentation: '最小値',
    kind: 2
  },
  {
    label: 'MAX',
    documentation: '最大値',
    kind: 2
  },
  {
    label: 'RND',
    documentation: '整数乱数',
    kind: 2
  },
  {
    label: 'RNDF',
    documentation: '実数乱数',
    kind: 2
  },
  {
    label: 'RANDOMIZE',
    documentation: '乱数初期化',
    kind: 2
  },
  {
    label: 'SQR',
    documentation: '平方根',
    kind: 2
  },
  {
    label: 'EXP',
    documentation: '指数',
    kind: 2
  },
  {
    label: 'LOG',
    documentation: '対数',
    kind: 2
  },
  {
    label: 'POW',
    documentation: 'べき乗',
    kind: 2
  },
  {
    label: 'RAD',
    documentation: '度をラジアンに変換',
    kind: 2
  },
  {
    label: 'DEG',
    documentation: 'ラジアンを度に変換',
    kind: 2
  },
  {
    label: 'SIN',
    documentation: '三角関数 sin',
    kind: 2
  },
  {
    label: 'COS',
    documentation: '三角関数 cos',
    kind: 2
  },
  {
    label: 'TAN',
    documentation: '三角関数 tan',
    kind: 2
  },
  {
    label: 'ASIN',
    documentation: 'sinの逆関数',
    kind: 2
  },
  {
    label: 'ACOS',
    documentation: 'cosの逆関数',
    kind: 2
  },
  {
    label: 'ATAN',
    documentation: 'tanの逆関数',
    kind: 2
  },
  {
    label: 'SINH',
    documentation: '双曲線関数 sinh',
    kind: 2
  },
  {
    label: 'COSH',
    documentation: '双曲線関数 cosh',
    kind: 2
  },
  {
    label: 'TANH',
    documentation: '双曲線関数 tanh',
    kind: 2
  },
  {
    label: 'CLASSIFY',
    documentation: '実数の状態を調べる',
    kind: 2
  },
  {
    label: 'ASC',
    documentation: '文字を文字コードに変換',
    kind: 2
  },
  {
    label: 'CHR$',
    documentation: '文字コードを文字に変換',
    kind: 2
  },
  {
    label: 'VAL',
    documentation: '文字列を数値に変換',
    kind: 2
  },
  {
    label: 'STR$',
    documentation: '数値を文字列に変換',
    kind: 2
  },
  {
    label: 'HEX$',
    documentation: '整数を１６進文字列に変換',
    kind: 2
  },
  {
    label: 'BIN$',
    documentation: '整数を２進数文字列に変換',
    kind: 2
  },
  {
    label: 'FORMAT$',
    documentation: '値を整形した文字列を作る',
    kind: 2
  },
  {
    label: 'LEN',
    documentation: '文字列や配列の長さを取得',
    kind: 2
  },
  {
    label: 'LAST',
    documentation: '文字列や配列の末尾位置を取得',
    kind: 2
  },
  {
    label: 'MID$',
    documentation: '部分文字列を取得',
    kind: 2
  },
  {
    label: 'LEFT$',
    documentation: '文字列の左側を切り出し',
    kind: 2
  },
  {
    label: 'RIGHT$',
    documentation: '文字列の右側を切り出し',
    kind: 2
  },
  {
    label: 'INSTR',
    documentation: '部分文字列を検索',
    kind: 2
  },
  {
    label: 'SUBST$',
    documentation: '文字列の一部分を置換',
    kind: 2
  },
  {
    label: 'DATE$',
    documentation: '現在の日付文字列を取得',
    kind: 2
  },
  {
    label: 'TIME$',
    documentation: '現在の時間文字列を取得',
    kind: 2
  },
  {
    label: 'FILES',
    documentation: 'ファイル一覧表示・取得',
    kind: 2
  },
  {
    label: 'LOAD',
    documentation: 'プログラムのロード',
    kind: 2
  },
  {
    label: 'LOADG',
    documentation: 'グラフィックページのロード',
    kind: 2
  },
  {
    label: 'LOADV',
    documentation: '配列・文字列のロード',
    kind: 2
  },
  {
    label: 'SAVE',
    documentation: 'プログラムのセーブ',
    kind: 2
  },
  {
    label: 'SAVEG',
    documentation: 'グラフィックページのセーブ',
    kind: 2
  },
  {
    label: 'SAVEV',
    documentation: '配列・文字列のセーブ',
    kind: 2
  },
  {
    label: 'PROJECT',
    documentation: '使用するプロジェクトの設定',
    kind: 2
  },
  {
    label: 'EXEC',
    documentation: 'プログラムの実行',
    kind: 2
  },
  {
    label: 'CHKFILE',
    documentation: 'ファイルがあるかどうか確認',
    kind: 2
  },
  {
    label: 'DELETE',
    documentation: 'ファイルの削除',
    kind: 2
  },
  {
    label: 'RENAME',
    documentation: 'ファイルの名前変更',
    kind: 2
  },
  {
    label: 'CONST',
    documentation: '定数定義',
    kind: 2
  },
  {
    label: 'ENUM',
    documentation: '定数を連番で定義',
    kind: 2
  },
  {
    label: 'DATA',
    documentation: 'データ定義',
    kind: 2
  },
  {
    label: 'READ',
    documentation: 'データ読み出し',
    kind: 2
  },
  {
    label: 'RESTORE',
    documentation: 'READの読み出し位置設定',
    kind: 2
  },
  {
    label: 'OPTION',
    documentation: '実行オプション設定',
    kind: 2
  },
  {
    label: 'WAIT',
    documentation: '描画完了まで待つ',
    kind: 2
  },
  {
    label: 'VSYNC',
    documentation: '描画完了まで待つ',
    kind: 2
  },
  {
    label: 'REM',
    documentation: 'コメント',
    kind: 2
  },
  {
    label: 'TMREAD',
    documentation: '時間の読み出し',
    kind: 2
  },
  {
    label: 'DTREAD',
    documentation: '日付の読み出し',
    kind: 2
  },
  {
    label: 'CHKLABEL',
    documentation: 'ラベルの検索',
    kind: 2
  },
  {
    label: 'CHKCALL',
    documentation: '命令の検索',
    kind: 2
  },
  {
    label: 'CHKVAR',
    documentation: '変数の検索',
    kind: 2
  },
  {
    label: 'DIALOG',
    documentation: 'ダイアログボックス表示',
    kind: 2
  },
  {
    label: 'RESULT',
    documentation: '各種命令の実行結果を返す',
    kind: 2
  },
  {
    label: 'CALLIDX',
    documentation: 'CALL SPRITE/TEXTの呼び出し番号',
    kind: 2
  },
  {
    label: 'CLIPBOARD',
    documentation: 'クリップボード操作',
    kind: 2
  },
  {
    label: 'KEY',
    documentation: 'ファンクションキー文字列操作',
    kind: 2
  },
  {
    label: 'FONTINFO',
    documentation: '文字の格納座標の取得',
    kind: 2
  },
  {
    label: 'FREEMEM',
    documentation: 'メモリ空き容量の取得',
    kind: 2
  },
  {
    label: 'MILLISEC',
    documentation: 'プログラム実行時間をミリセコンド単位で取得',
    kind: 2
  },
  {
    label: 'MAINCNT',
    documentation: 'プログラム実行時間をフレーム単位で取得',
    kind: 2
  },
  {
    label: 'SYSPARAM',
    documentation: 'システム設定内容の取得・操作',
    kind: 2
  },
  {
    label: 'PERFBEGIN',
    documentation: '速度計測開始',
    kind: 2
  },
  {
    label: 'PERFEND',
    documentation: '速度計測終了と結果取得',
    kind: 2
  },
  {
    label: 'METALOAD',
    documentation: 'メタデータロード',
    kind: 2
  },
  {
    label: 'METAEDIT',
    documentation: 'メタデータ編集',
    kind: 2
  },
  {
    label: 'METASAVE',
    documentation: 'メタデータセーブ',
    kind: 2
  },
  {
    label: 'ACLS',
    documentation: '画面リセット',
    kind: 2
  },
  {
    label: 'XSCREEN',
    documentation: '画面解像度の設定',
    kind: 2
  },
  {
    label: 'ANIMDEF',
    documentation: 'アニメーション定義',
    kind: 2
  },
  {
    label: 'BACKCOLOR',
    documentation: '背景色の設定・取得',
    kind: 2
  },
  {
    label: 'FADE',
    documentation: '画面フェードの設定・取得',
    kind: 2
  },
  {
    label: 'FADECHK',
    documentation: '画面フェード状況の確認',
    kind: 2
  },
  {
    label: 'GTARGET',
    documentation: '描画先グラフィックページ設定',
    kind: 2
  },
  {
    label: 'GCOLOR',
    documentation: '描画色を設定',
    kind: 2
  },
  {
    label: 'RGB',
    documentation: 'RGB値と色コードの変換',
    kind: 2
  },
  {
    label: 'RGBF',
    documentation: '実数RGB値と色コードの変換',
    kind: 2
  },
  {
    label: 'HSV',
    documentation: 'HSV値と色コードの変換',
    kind: 2
  },
  {
    label: 'HSVF',
    documentation: '実数HSV値と色コードの変換',
    kind: 2
  },
  {
    label: 'GCLIP',
    documentation: '描画クリッピングの設定',
    kind: 2
  },
  {
    label: 'GCLS',
    documentation: 'グラフィックページのクリア',
    kind: 2
  },
  {
    label: 'GPSET',
    documentation: '点を描く',
    kind: 2
  },
  {
    label: 'GPGET',
    documentation: '指定座標の色コード取得',
    kind: 2
  },
  {
    label: 'GLINE',
    documentation: '線を描く',
    kind: 2
  },
  {
    label: 'GCIRCLE',
    documentation: '円・円弧を描く',
    kind: 2
  },
  {
    label: 'GBOX',
    documentation: '四角を描く',
    kind: 2
  },
  {
    label: 'GFILL',
    documentation: '四角を塗りつぶす',
    kind: 2
  },
  {
    label: 'GPAINT',
    documentation: '塗りつぶし',
    kind: 2
  },
  {
    label: 'GCOPY',
    documentation: '画像を違う座標にコピー',
    kind: 2
  },
  {
    label: 'GSAVE',
    documentation: '画像を配列に保存',
    kind: 2
  },
  {
    label: 'GLOAD',
    documentation: '画像を配列から読み出し',
    kind: 2
  },
  {
    label: 'GTRI',
    documentation: '三角形を描く',
    kind: 2
  },
  {
    label: 'GPUTCHR',
    documentation: '文字をグラフィックページに描く',
    kind: 2
  },
  {
    label: 'GPUTCHRP',
    documentation: 'プロポーショナル文字をグラフィックページに描く',
    kind: 2
  },
  {
    label: 'GARRAY',
    documentation: 'グラフィックページを配列として扱う',
    kind: 2
  },
  {
    label: 'GUPDATE',
    documentation: 'GARRAYの操作結果反映',
    kind: 2
  },
  {
    label: 'GSAMPLE',
    documentation: 'スプライト・テキストスクリーンでの参照方法設定',
    kind: 2
  },
  {
    label: 'SPSET',
    documentation: 'スプライト作成',
    kind: 2
  },
  {
    label: 'SPCLR',
    documentation: 'スプライト削除',
    kind: 2
  },
  {
    label: 'SPSHOW',
    documentation: 'スプライト表示',
    kind: 2
  },
  {
    label: 'SPHIDE',
    documentation: 'スプライトを隠す',
    kind: 2
  },
  {
    label: 'SPHOME',
    documentation: '表示原点の設定',
    kind: 2
  },
  {
    label: 'SPOFS',
    documentation: '平行移動',
    kind: 2
  },
  {
    label: 'SPROT',
    documentation: '回転',
    kind: 2
  },
  {
    label: 'SPSCALE',
    documentation: '拡大・縮小',
    kind: 2
  },
  {
    label: 'SPCOLOR',
    documentation: '表示色の設定',
    kind: 2
  },
  {
    label: 'SPCHR',
    documentation: '各種属性の操作',
    kind: 2
  },
  {
    label: 'SPPAGE',
    documentation: '参照グラフィックページ設定',
    kind: 2
  },
  {
    label: 'SPLAYER',
    documentation: '所属レイヤー設定',
    kind: 2
  },
  {
    label: 'SPDEF',
    documentation: 'スプライト定義作成',
    kind: 2
  },
  {
    label: 'SPLINK',
    documentation: '親子関係設定',
    kind: 2
  },
  {
    label: 'SPUNLINK',
    documentation: '親子関係解除',
    kind: 2
  },
  {
    label: 'SPANIM',
    documentation: 'アニメーション設定',
    kind: 2
  },
  {
    label: 'SPSTOP',
    documentation: 'アニメーション停止',
    kind: 2
  },
  {
    label: 'SPSTART',
    documentation: 'アニメーション開始',
    kind: 2
  },
  {
    label: 'SPCHK',
    documentation: 'アニメーション状況の確認',
    kind: 2
  },
  {
    label: 'SPVAR',
    documentation: 'スプライト変数操作',
    kind: 2
  },
  {
    label: 'SPCOL',
    documentation: '当たり判定設定',
    kind: 2
  },
  {
    label: 'SPCOLVEC',
    documentation: '当たり判定に使用する移動速度設定',
    kind: 2
  },
  {
    label: 'SPHITSP',
    documentation: 'スプライト間の当たり判定',
    kind: 2
  },
  {
    label: 'SPHITRC',
    documentation: 'スプライトと矩形の当たり判定',
    kind: 2
  },
  {
    label: 'SPHITINFO',
    documentation: '当たり判定結果の詳細情報取得',
    kind: 2
  },
  {
    label: 'SPFUNC',
    documentation: 'CALL SPRITEで呼び出されるルーチン設定',
    kind: 2
  },
  {
    label: 'SPUSED',
    documentation: 'スプライトが使われているか確認',
    kind: 2
  },
  {
    label: 'TPRINT',
    documentation: '文字表示',
    kind: 2
  },
  {
    label: 'ATTR',
    documentation: '文字属性の設定',
    kind: 2
  },
  {
    label: 'SCROLL',
    documentation: 'スクロール',
    kind: 2
  },
  {
    label: 'CHKCHR',
    documentation: '指定座標に書かれている文字を取得',
    kind: 2
  },
  {
    label: 'TSCREEN',
    documentation: 'テキストスクリーンサイズ・フォント設定',
    kind: 2
  },
  {
    label: 'TPAGE',
    documentation: 'ユーザー定義文字の参照先を設定',
    kind: 2
  },
  {
    label: 'TCOLOR',
    documentation: 'テキストスクリーン全体の描画色を設定',
    kind: 2
  },
  {
    label: 'TLAYER',
    documentation: 'テキストスクリーンの所属レイヤーを設定',
    kind: 2
  },
  {
    label: 'TPUT',
    documentation: '文字書き込み',
    kind: 2
  },
  {
    label: 'TFILL',
    documentation: '指定領域を文字で塗りつぶす',
    kind: 2
  },
  {
    label: 'THOME',
    documentation: '表示原点設定',
    kind: 2
  },
  {
    label: 'TOFS',
    documentation: '平行移動',
    kind: 2
  },
  {
    label: 'TROT',
    documentation: '回転',
    kind: 2
  },
  {
    label: 'TSCALE',
    documentation: '拡大・縮小',
    kind: 2
  },
  {
    label: 'TSHOW',
    documentation: 'テキストスクリーン表示',
    kind: 2
  },
  {
    label: 'THIDE',
    documentation: 'テキストスクリーンを隠す',
    kind: 2
  },
  {
    label: 'TBLEND',
    documentation: '半透明合成方法設定',
    kind: 2
  },
  {
    label: 'TANIM',
    documentation: 'アニメーション設定',
    kind: 2
  },
  {
    label: 'TSTOP',
    documentation: 'アニメーション停止',
    kind: 2
  },
  {
    label: 'TSTART',
    documentation: 'アニメーション開始',
    kind: 2
  },
  {
    label: 'TCHK',
    documentation: 'アニメーション状況取得',
    kind: 2
  },
  {
    label: 'TVAR',
    documentation: 'テキストスクリーン変数操作',
    kind: 2
  },
  {
    label: 'TCOPY',
    documentation: '内容を別のテキストスクリーンにコピー',
    kind: 2
  },
  {
    label: 'TSAVE',
    documentation: '内容を配列に保存',
    kind: 2
  },
  {
    label: 'TLOAD',
    documentation: '内容を配列から読み出し',
    kind: 2
  },
  {
    label: 'TARRAY',
    documentation: '内容を配列として扱う',
    kind: 2
  },
  {
    label: 'TUPDATE',
    documentation: 'TARRAY操作結果を反映',
    kind: 2
  },
  {
    label: 'TFUNC',
    documentation: 'CALL TEXTで呼び出されるルーチンを登録',
    kind: 2
  },
  {
    label: 'TCOORD',
    documentation: '画面座標とテキストスクリーン座標間の変換',
    kind: 2
  },
  {
    label: 'LAYER',
    documentation: 'レイヤー合成方法設定',
    kind: 2
  },
  {
    label: 'LFILTER',
    documentation: 'フィルター効果設定',
    kind: 2
  },
  {
    label: 'LCLIP',
    documentation: '表示クリッピング設定',
    kind: 2
  },
  {
    label: 'LMATRIX',
    documentation: '描画変換行列設定',
    kind: 2
  },
  {
    label: 'XCTRLSTYLE',
    documentation: '操作スタイル・使用コントローラーの設定',
    kind: 2
  },
  {
    label: 'CONTROLLER',
    documentation: 'コントローラー状態取得',
    kind: 2
  },
  {
    label: 'BUTTON',
    documentation: 'ボタン操作取得',
    kind: 2
  },
  {
    label: 'BREPEAT',
    documentation: 'ボタンの連射設定',
    kind: 2
  },
  {
    label: 'STICK',
    documentation: 'スティック操作取得',
    kind: 2
  },
  {
    label: 'ACCEL',
    documentation: '加速度センサー値取得',
    kind: 2
  },
  {
    label: 'GYROV',
    documentation: 'ジャイロセンサー角速度取得',
    kind: 2
  },
  {
    label: 'GYROA',
    documentation: 'ジャイロセンサー角度取得',
    kind: 2
  },
  {
    label: 'GYROSYNC',
    documentation: 'ジャイロセンサーリセット',
    kind: 2
  },
  {
    label: 'VIBRATE',
    documentation: '振動',
    kind: 2
  },
  {
    label: 'TOUCH',
    documentation: 'タッチ操作取得',
    kind: 2
  },
  {
    label: 'MOUSE',
    documentation: 'マウス操作取得',
    kind: 2
  },
  {
    label: 'MBUTTON',
    documentation: 'マウスボタン操作取得',
    kind: 2
  },
  {
    label: 'IRSTART',
    documentation: 'IRカメラ初期化',
    kind: 2
  },
  {
    label: 'IRSTOP',
    documentation: 'IRカメラ停止',
    kind: 2
  },
  {
    label: 'IRSTATE',
    documentation: 'IRカメラ状態取得',
    kind: 2
  },
  {
    label: 'IRREAD',
    documentation: 'IRカメラ値取得',
    kind: 2
  },
  {
    label: 'IRSPRITE',
    documentation: 'IRカメラ画像用スプライト設定',
    kind: 2
  },
  {
    label: 'KEYBOARD',
    documentation: 'キーボード操作取得',
    kind: 2
  },
  {
    label: 'TCPIANO',
    documentation: 'Toy-Conピアノ操作取得',
    kind: 2
  },
  {
    label: 'TCHOUSE',
    documentation: 'Toy-Conおうち操作取得',
    kind: 2
  },
  {
    label: 'TCFISHING',
    documentation: 'Toy-Conつり操作取得',
    kind: 2
  },
  {
    label: 'TCBIKE',
    documentation: 'Toy-Conバイク操作取得',
    kind: 2
  },
  {
    label: 'TCROBOT',
    documentation: 'Toy-Conロボット操作取得',
    kind: 2
  },
  {
    label: 'TCVISOR',
    documentation: 'Toy-Conバイザー操作取得',
    kind: 2
  },
  {
    label: 'TCCAR',
    documentation: 'Toy-Conクルマ操作取得',
    kind: 2
  },
  {
    label: 'TCPLANE',
    documentation: 'Toy-Conヒコウキ操作取得',
    kind: 2
  },
  {
    label: 'TCSUBM',
    documentation: 'Toy-Conセンスイカン操作取得',
    kind: 2
  },
  {
    label: 'TCVEHICLE',
    documentation: 'ドライブキットToy-Conカギ装着状況取得',
    kind: 2
  },
  {
    label: 'BEEP',
    documentation: '効果音再生',
    kind: 2
  },
  {
    label: 'BEEPPAN',
    documentation: '効果音パンポット設定',
    kind: 2
  },
  {
    label: 'BEEPPIT',
    documentation: '効果音ピッチ設定',
    kind: 2
  },
  {
    label: 'BEEPSTOP',
    documentation: '効果音停止',
    kind: 2
  },
  {
    label: 'BEEPVOL',
    documentation: '効果音音量',
    kind: 2
  },
  {
    label: 'BGMCLEAR',
    documentation: 'BGM削除',
    kind: 2
  },
  {
    label: 'BGMCONT',
    documentation: 'BGM再開',
    kind: 2
  },
  {
    label: 'BGMPITCH',
    documentation: 'BGMピッチ設定',
    kind: 2
  },
  {
    label: 'BGMPLAY',
    documentation: 'BGM再生',
    kind: 2
  },
  {
    label: 'BGMPAUSE',
    documentation: 'BGM停止',
    kind: 2
  },
  {
    label: 'BGMSET',
    documentation: 'BGM登録',
    kind: 2
  },
  {
    label: 'BGMSETD',
    documentation: 'BGM登録',
    kind: 2
  },
  {
    label: 'BGMSTOP',
    documentation: 'BGM停止',
    kind: 2
  },
  {
    label: 'BGMVAR',
    documentation: 'BGM変数操作',
    kind: 2
  },
  {
    label: 'BGMVOL',
    documentation: 'BGM音量',
    kind: 2
  },
  {
    label: 'BGMWET',
    documentation: 'BGMエフェクタ効果量設定',
    kind: 2
  },
  {
    label: 'BGMCHK',
    documentation: 'BGM再生状況確認',
    kind: 2
  },
  {
    label: 'WAVSET',
    documentation: 'ユーザー波形登録',
    kind: 2
  },
  {
    label: 'WAVSETA',
    documentation: 'ユーザー波形登録',
    kind: 2
  },
  {
    label: 'EFCEN',
    documentation: 'エフェクタON/OFF',
    kind: 2
  },
  {
    label: 'EFCSET',
    documentation: 'エフェクタ効果設定',
    kind: 2
  },
  {
    label: 'EFCWET',
    documentation: 'エフェクタ効果量設定',
    kind: 2
  },
  {
    label: 'PCMCONT',
    documentation: 'ストリーミング再生再開',
    kind: 2
  },
  {
    label: 'PCMPOS',
    documentation: 'ストリーミング再生位置設定',
    kind: 2
  },
  {
    label: 'PCMSTOP',
    documentation: 'ストリーミング再生停止',
    kind: 2
  },
  {
    label: 'PCMSTREAM',
    documentation: 'ストリーミング再生',
    kind: 2
  },
  {
    label: 'PCMVOL',
    documentation: 'ストリーミング再生音量設定',
    kind: 2
  },
  {
    label: 'SNDMSBAL',
    documentation: 'メイン・サブ間音量バランス設定',
    kind: 2
  },
  {
    label: 'SNDMVOL',
    documentation: 'マスターボリューム設定',
    kind: 2
  },
  {
    label: 'SNDSTOP',
    documentation: '全サウンド停止・リセット',
    kind: 2
  },
  {
    label: 'TALK',
    documentation: '音声合成',
    kind: 2
  },
  {
    label: 'TALKCHK',
    documentation: 'TALK再生状況確認',
    kind: 2
  },
  {
    label: 'TALKSTOP',
    documentation: 'TALK停止',
    kind: 2
  },
  {
    label: 'CHKMML',
    documentation: 'MML文法チェック',
    kind: 2
  },
  {
    label: 'RECCHK',
    documentation: 'RECSTARTによる録音の状態を取得',
    kind: 2
  },
  {
    label: 'RECDATA',
    documentation: 'RECSTARTで録音されたサンプル値を取り出す',
    kind: 2
  },
  {
    label: 'RECLEN',
    documentation: 'RECSTARTで確保されたバッファのサンプル数を返す',
    kind: 2
  },
  {
    label: 'RECPOS',
    documentation: 'RECSTARTで録音される現在のサンプル位置を返す',
    kind: 2
  },
  {
    label: 'RECSAVE',
    documentation: 'RECSTARTで録音したサンプル値を配列に取り出す',
    kind: 2
  },
  {
    label: 'RECSTART',
    documentation: 'BEEP/BGMPLAY/TALKで再生されている音を録音',
    kind: 2
  },
  {
    label: 'RECSTOP',
    documentation: 'RECSTARTによる録音を停止',
    kind: 2
  },
  {
    label: 'BIQUAD',
    documentation: 'BiQuadフィルタの適用',
    kind: 2
  },
  {
    label: 'BQPARAM',
    documentation: 'BiQuadパラメータの作成',
    kind: 2
  },
  {
    label: 'FFT',
    documentation: 'FFT',
    kind: 2
  },
  {
    label: 'IFFT',
    documentation: '逆FFT',
    kind: 2
  },
  {
    label: 'FFTWFN',
    documentation: 'FFT窓関数の生成',
    kind: 2
  },
  {
    label: 'ARYOP',
    documentation: '配列の一括演算',
    kind: 2
  },
  {
    label: 'PRGEDIT',
    documentation: 'プログラム編集開始',
    kind: 2
  },
  {
    label: 'PRGGET$',
    documentation: '行取得',
    kind: 2
  },
  {
    label: 'PRGSEEK',
    documentation: '行移動',
    kind: 2
  },
  {
    label: 'PRGSET',
    documentation: '行入れ替え',
    kind: 2
  },
  {
    label: 'PRGINS',
    documentation: '行挿入',
    kind: 2
  },
  {
    label: 'PRGDEL',
    documentation: '行削除',
    kind: 2
  },
  {
    label: 'PRGSIZE',
    documentation: '指定スロットのファイルサイズ取得',
    kind: 2
  },
  {
    label: 'PRGNAME$',
    documentation: '指定スロットのファイル名取得',
    kind: 2
  },
  {
    label: 'XSUBSCREEN',
    documentation: 'サブプログラム表示領域設定',
    kind: 2
  },
  {
    label: 'ENVSTAT',
    documentation: 'メインインタプリタ状態取得',
    kind: 2
  },
  {
    label: 'ENVLOAD',
    documentation: 'メインインタプリタリソース読み出し',
    kind: 2
  },
  {
    label: 'ENVSAVE',
    documentation: 'メインインタプリタにリソース書き込み',
    kind: 2
  },
  {
    label: 'ENVINPUT$',
    documentation: 'メインインタプリタのキー入力状況取得',
    kind: 2
  },
  {
    label: 'ENVTYPE',
    documentation: 'メイン・サブの識別',
    kind: 2
  },
  {
    label: 'ENVFOCUS',
    documentation: 'ユーザー操作の受け渡しと獲得',
    kind: 2
  },
  {
    label: 'ENVPROJECT',
    documentation: '使用プロジェクトをメインに同期させる',
    kind: 2
  },
  {
    label: 'ENVLOCATE',
    documentation: 'キャレットの画面座標を取得',
    kind: 2
  },
  {
    label: 'PUSHKEY',
    documentation: 'キー入力の流し込み',
    kind: 2
  },
  {
    label: 'HELPINFO',
    documentation: 'ヘルプデータ検索',
    kind: 2
  },
  {
    label: 'HELPGET',
    documentation: 'ヘルプデータ取得',
    kind: 2
  },

  {
    label: 'UISTATE',
    documentation: 'システムの状態を取得？\n※リファレンスに情報がない命令です',
    kind: 26
  },
  {
    label: 'UIRUN',
    documentation:
      'UIインタプリタでプログラム実行？\n※試験的に開放されている命令です',
    kind: 26
  },
  {
    label: 'UISTOP',
    documentation:
      'UIインタプリタで実行したプログラムの停止？\n※試験的に開放されている命令です',
    kind: 26
  },
  {
    label: 'UIPUSHCMPL',
    documentation: '入力補完関係の命令？\n※リファレンスに情報がない命令です',
    kind: 26
  },
  {
    label: 'UIGETCMPL',
    documentation: '入力補完関係の命令？\n※リファレンスに情報がない命令です',
    kind: 26
  },
  {
    label: 'UIMASK',
    documentation: '※リファレンスに情報がない命令です',
    kind: 26
  },
  {
    label: 'UIFOCUS',
    documentation: '※リファレンスに情報がない命令です',
    kind: 26
  },

  {
    label: '#ON',
    documentation: 'ON (=1)',
    kind: 20
  },
  {
    label: '#OFF',
    documentation: 'OFF (=0)',
    kind: 20
  },
  {
    label: '#YES',
    documentation: 'YES (=1)',
    kind: 20
  },
  {
    label: '#NO',
    documentation: 'NO (=0)',
    kind: 20
  },
  {
    label: '#TRUE',
    documentation: 'TRUE (=1)',
    kind: 20
  },
  {
    label: '#FALSE',
    documentation: 'FALSE (=0)',
    kind: 20
  },
  {
    label: '#PI',
    documentation: '円周率 (=3.14159265358979323846)',
    kind: 20
  },
  {
    label: '#EXP',
    documentation: 'ネイピア数 (=2.71828182845904523536)',
    kind: 20
  },
  {
    label: '#C_CLEAR',
    documentation: '透明 (=&H00000000)',
    kind: 15
  },
  {
    label: '#C_AQUA',
    documentation: '水色 (=&HFF00FFFF)',
    kind: 15
  },
  {
    label: '#C_BLACK',
    documentation: '黒 (=&HFF000000)',
    kind: 15
  },
  {
    label: '#C_BLUE',
    documentation: '青 (=&HFF0000FF)',
    kind: 15
  },
  {
    label: '#C_CYAN',
    documentation: '水色 (=&HFF00FFFF)',
    kind: 15
  },
  {
    label: '#C_FUCHSIA',
    documentation: '明るい紫 (=&HFFFF00FF)',
    kind: 15
  },
  {
    label: '#C_GRAY',
    documentation: '灰色 (=&HFF808080)',
    kind: 15
  },
  {
    label: '#C_GREEN',
    documentation: '緑 (=&HFF008000)',
    kind: 15
  },
  {
    label: '#C_LIME',
    documentation: '明るい緑 (=&HFF00FF00)',
    kind: 15
  },
  {
    label: '#C_MAGENTA',
    documentation: '明るい紫 (=&HFFFF00FF)',
    kind: 15
  },
  {
    label: '#C_MAROON',
    documentation: 'えび茶色 (=&HFF800000)',
    kind: 15
  },
  {
    label: '#C_NAVY',
    documentation: '紺 (=&HFF000080)',
    kind: 15
  },
  {
    label: '#C_OLIVE',
    documentation: 'オリーブ色 (=&HFF808000)',
    kind: 15
  },
  {
    label: '#C_PURPLE',
    documentation: '紫 (=&HFF800080)',
    kind: 15
  },
  {
    label: '#C_RED',
    documentation: '赤 (=&HFFFF0000)',
    kind: 15
  },
  {
    label: '#C_SILVER',
    documentation: '銀色 (=&HFFC0C0C0)',
    kind: 15
  },
  {
    label: '#C_TEAL',
    documentation: '青緑 (=&HFF008080)',
    kind: 15
  },
  {
    label: '#C_WHITE',
    documentation: '白 (=&HFFFFFFFF)',
    kind: 15
  },
  {
    label: '#C_YELLOW',
    documentation: '黄色 (=&HFFFFFF00)',
    kind: 15
  },
  {
    label: '#B_RUP',
    documentation: 'フル、2本持ち\t: Xボタン\n縦、横持ち\t: 上ボタン\n(=0)',
    kind: 20
  },
  {
    label: '#B_RDOWN',
    documentation: 'フル、2本持ち\t: Bボタン\n縦、横持ち\t: 下ボタン\n(=1)',
    kind: 20
  },
  {
    label: '#B_RLEFT',
    documentation: 'フル、2本持ち\t: Yボタン\n縦、横持ち\t: 左ボタン\n(=2)',
    kind: 20
  },
  {
    label: '#B_RRIGHT',
    documentation: 'フル、2本持ち\t: Aボタン\n縦、横持ち\t: 右ボタン\n(=3)',
    kind: 20
  },
  {
    label: '#B_LUP',
    documentation: '上ボタン (=4)',
    kind: 20
  },
  {
    label: '#B_LDOWN',
    documentation: '下ボタン (=5)',
    kind: 20
  },
  {
    label: '#B_LLEFT',
    documentation: '左ボタン (=6)',
    kind: 20
  },
  {
    label: '#B_LRIGHT',
    documentation: '右ボタン (=7)',
    kind: 20
  },
  {
    label: '#B_L1',
    documentation: 'フル、2本持ち\t: Lボタン\n縦、横持ち\t: SLボタン\n(=8)',
    kind: 20
  },
  {
    label: '#B_R1',
    documentation: 'フル、2本持ち\t: Rボタン\n縦、横持ち\t: SRボタン\n(=9)',
    kind: 20
  },
  {
    label: '#B_L2',
    documentation: 'フル、2本持ち\t: ZLボタン\n縦、横持ち\t: L、Rボタン\n(=10)',
    kind: 20
  },
  {
    label: '#B_R2',
    documentation:
      'フル、2本持ち\t: ZRボタン\n縦、横持ち\t: ZL、ZRボタン\n(=11)',
    kind: 20
  },
  {
    label: '#B_SL',
    documentation: 'フル、2本持ち\t: Lボタン\n縦、横持ち\t: SLボタン\n(=8)',
    kind: 20
  },
  {
    label: '#B_SR',
    documentation: 'フル、2本持ち\t: Rボタン\n縦、横持ち\t: SRボタン\n(=9)',
    kind: 20
  },
  {
    label: '#B_S1',
    documentation: 'フル、2本持ち\t: ZLボタン\n縦、横持ち\t: L、Rボタン\n(=10)',
    kind: 20
  },
  {
    label: '#B_S2',
    documentation:
      'フル、2本持ち\t: ZRボタン\n縦、横持ち\t: ZL、ZRボタン\n(=11)',
    kind: 20
  },
  {
    label: '#B_LSTICK',
    documentation:
      'フル、2本持ち\t: Lスティック押し込み\n縦、横持ち\t: スティック押し込み\n(=12)',
    kind: 20
  },
  {
    label: '#B_RSTICK',
    documentation: 'Rスティック押し込み (=13)',
    kind: 20
  },
  {
    label: '#B_RANY',
    documentation: 'A、B、X、Yボタンのいずれか (=14)',
    kind: 20
  },
  {
    label: '#B_LANY',
    documentation: '上、下、左、右ボタンのいずれか (=15)',
    kind: 20
  },
  {
    label: '#B_ANY',
    documentation: 'スティック押し込み以外のいずれかのボタン (=16)',
    kind: 20
  },
  {
    label: '#B_A',
    documentation: 'Aボタン (=3)',
    kind: 20
  },
  {
    label: '#B_B',
    documentation: 'Bボタン (=1)',
    kind: 20
  },
  {
    label: '#B_X',
    documentation: 'Xボタン (=0)',
    kind: 20
  },
  {
    label: '#B_Y',
    documentation: 'Yボタン (=2)',
    kind: 20
  },
  {
    label: '#A_ROT0',
    documentation: '回転 (=0)',
    kind: 20
  },
  {
    label: '#A_ROT90',
    documentation: '回転 (=1)',
    kind: 20
  },
  {
    label: '#A_ROT180',
    documentation: '回転 (=2)',
    kind: 20
  },
  {
    label: '#A_ROT270',
    documentation: '回転 (=3)',
    kind: 20
  },
  {
    label: '#A_REVH',
    documentation: '横回転 (=4)',
    kind: 20
  },
  {
    label: '#A_REVV',
    documentation: '縦回転 (=8)',
    kind: 20
  },
  {
    label: '#A_ADD',
    documentation: '加算合成 (=16)',
    kind: 20
  },
  {
    label: '#CHKXY',
    documentation: 'XY座標 (=1)',
    kind: 20
  },
  {
    label: '#CHKZ',
    documentation: 'Z座標 (=2)',
    kind: 20
  },
  {
    label: '#CHKR',
    documentation: '回転 (=4)',
    kind: 20
  },
  {
    label: '#CHKS',
    documentation: '倍率XY (=8)',
    kind: 20
  },
  {
    label: '#CHKC',
    documentation: '表示色 (=16)',
    kind: 20
  },
  {
    label: '#CHKV',
    documentation: '変数 (=32)',
    kind: 20
  },
  {
    label: '#CHKUV',
    documentation: 'UV座標 (=64)',
    kind: 20
  },
  {
    label: '#CHKI',
    documentation: '定義番号 (=128)',
    kind: 20
  },
  {
    label: '#T_DEFAULT',
    documentation: 'デフォルト型 (=0)',
    kind: 20
  },
  {
    label: '#T_INT',
    documentation: '整数型 (=1)',
    kind: 20
  },
  {
    label: '#T_REAL',
    documentation: '実数型 (=2)',
    kind: 20
  },
  {
    label: '#T_STR',
    documentation: '文字列型 (=3)',
    kind: 20
  },
  {
    label: '#T_INTARRAY',
    documentation: '整数配列 (=5)',
    kind: 20
  },
  {
    label: '#T_REALARRAY',
    documentation: '実数配列 (=6)',
    kind: 20
  },
  {
    label: '#T_STRARRAY',
    documentation: '文字列配列 (=7)',
    kind: 20
  },
  {
    label: '#G_NORMAL',
    documentation: '単純描画 (=0)',
    kind: 20
  },
  {
    label: '#G_NORMAL2',
    documentation: '透明度が0以外の時、単純描画 (=1)',
    kind: 20
  },
  {
    label: '#G_ALPHA',
    documentation: '半透明描画 (=2)',
    kind: 20
  },
  {
    label: '#G_ALPHA2',
    documentation: '描画先の透明度を考慮して半透明描画 (=3)',
    kind: 20
  },
  {
    label: '#G_ADD',
    documentation: '加算描画 (=4)',
    kind: 20
  },
  {
    label: '#BQAPF',
    documentation: 'オールパスフィルタ (=0)',
    kind: 20
  },
  {
    label: '#BQLPF',
    documentation: 'ローパスフィルタ (=1)',
    kind: 20
  },
  {
    label: '#BQHPF',
    documentation: 'ハイパスフィルタ (=2)',
    kind: 20
  },
  {
    label: '#BQBPF',
    documentation: 'バンドパスフィルタ  (=3)',
    kind: 20
  },
  {
    label: '#BQBSF',
    documentation: 'バンドストップフィルタ  (=4)',
    kind: 20
  },
  {
    label: '#BQLSF',
    documentation: 'ローシェルフフィルタ  (=5)',
    kind: 20
  },
  {
    label: '#BQHSF',
    documentation: 'ハイシェルフフィルタ  (=6)',
    kind: 20
  },
  {
    label: '#BQPEQ',
    documentation: 'ピーキングイコライザ  (=7)',
    kind: 20
  },
  {
    label: '#WFRECT',
    documentation: '矩形意  (=0)',
    kind: 20
  },
  {
    label: '#WFHAMM',
    documentation: 'ハミング数  (=1)',
    kind: 20
  },
  {
    label: '#WFHANN',
    documentation: 'ハニング数  (=2)',
    kind: 20
  },
  {
    label: '#WFBLKM',
    documentation: 'ブラックマン数  (=3)',
    kind: 20
  },
  {
    label: '#AOPADD',
    documentation: '加算（p1+p2） (=0)',
    kind: 20
  },
  {
    label: '#AOPSUB',
    documentation: '減算（p1-p2） (=1)',
    kind: 20
  },
  {
    label: '#AOPMUL',
    documentation: '乗算（p1*p2） (=2)',
    kind: 20
  },
  {
    label: '#AOPDIV',
    documentation: '除算（p1/p2） (=3)',
    kind: 20
  },
  {
    label: '#AOPMAD',
    documentation: '積和（p1*p2+p3） (=4)',
    kind: 20
  },
  {
    label: '#AOPLIP',
    documentation: '線形補完（p1*p3+p2*(1-p3)） (=5)',
    kind: 20
  },
  {
    label: '#AOPCLP',
    documentation: 'クランプ（p1の値をp2<=x<=p3の範囲内に丸める）\n(=6)',
    kind: 20
  },
  {
    label: '#EFCOFF',
    documentation: 'OFF (=0)',
    kind: 20
  },
  {
    label: '#EFCON',
    documentation: 'ON (=1)',
    kind: 20
  },
  {
    label: '#EFCBATH',
    documentation: 'エフェクト：お風呂 (=1)',
    kind: 20
  },
  {
    label: '#EFCCAVE',
    documentation: 'エフェクト：洞窟 (=2)',
    kind: 20
  },
  {
    label: '#EFCSPACE',
    documentation: 'エフェクト：宇宙 (=3)',
    kind: 20
  },
  {
    label: '#EFCREFSROOM',
    documentation: '反射音：小さい部屋 (=0)',
    kind: 20
  },
  {
    label: '#EFCREFLROOM',
    documentation: '反射音：大きい部屋 (=1)',
    kind: 20
  },
  {
    label: '#EFCREFHALL',
    documentation: '反射音：ホール (=2)',
    kind: 20
  },
  {
    label: '#EFCREFCAVE',
    documentation: '反射音：洞窟 (=3)',
    kind: 20
  },
  {
    label: '#EFCREFNONE',
    documentation: '反射音なし (=4)',
    kind: 20
  },
  {
    label: '#EFCREVROOM',
    documentation: '残響音：部屋 (=0)',
    kind: 20
  },
  {
    label: '#EFCREVHALL',
    documentation: '残響音：ホール (=1)',
    kind: 20
  },
  {
    label: '#EFCREVMETAL',
    documentation: '残響音：金属製の回廊 (=2)',
    kind: 20
  },
  {
    label: '#EFCREVCAVE',
    documentation: '残響音：洞窟 (=3)',
    kind: 20
  },
  {
    label: '#EFCREVREV',
    documentation: '残響音：リバーブ (=4)',
    kind: 20
  },
  {
    label: '#PVLEFT',
    documentation: '左 (=0)',
    kind: 20
  },
  {
    label: '#PVRIGHT',
    documentation: '右 (=1)',
    kind: 20
  },
  {
    label: '#GRPWIDTH',
    documentation: 'グラフィックページの幅 (=2048)',
    kind: 20
  },
  {
    label: '#GRPHEIGHT',
    documentation: 'グラフィックページの高さ (=2048)',
    kind: 20
  },
  {
    label: '#GRPF',
    documentation: 'フォント用グラフィックページ (=5)',
    kind: 20
  },
  {
    label: '#GSPRITE',
    documentation: 'グラフィック表示用に使用するスプライトID (=4095)',
    kind: 20
  },
  {
    label: '#TCONSOLE',
    documentation: 'コンソール表示用に使用するテキストスクリーンID (=4)',
    kind: 20
  },
  {
    label: '#MAXT',
    documentation: '通常テキストスクリーンの最大ID (=3)',
    kind: 20
  },
  {
    label: '#MAXSP',
    documentation: '通常スプライトの最大ID (=4094)',
    kind: 20
  },
  {
    label: '#MAXGRP',
    documentation: '通常グラフィックページの最大ID (=4)',
    kind: 20
  },
  {
    label: '#HARDWARE',
    documentation: 'ハードウェア識別番号 (=10)',
    kind: 20
  },
  {
    label: '#VERSION',
    documentation: 'バージョン番号',
    kind: 20
  },
  {
    label: '#_LINE',
    documentation: 'この定数が書かれた行番号に置き換わる特殊な定数',
    kind: 20
  },
  {
    label: '#_SLOT',
    documentation: 'この定数が書かれたスロット番号に置き換わる特殊な定数',
    kind: 20
  },
  {
    label: '#_FILENAME',
    documentation: 'この定数が書かれたファイル名文字列に置き換わる特殊な定数',
    kind: 20
  }
]