# sb4-extension

SmileBasic4向けのちょっとしたVSCode用拡張機能です

## 機能

### シンタックスハイライト
![syntax](https://user-images.githubusercontent.com/44780846/89967349-328f3680-dc8c-11ea-817b-2226a102f72f.png)

### コード補完
![completion](https://user-images.githubusercontent.com/44780846/89897597-3edaab80-dc1a-11ea-96d8-45ecc6f848db.gif)

### スニペット
![snippets](https://user-images.githubusercontent.com/44780846/89897643-4b5f0400-dc1a-11ea-88ee-cf85765a45fa.gif)

### コメントのホバー表示
![hover](https://user-images.githubusercontent.com/44780846/89897673-574ac600-dc1a-11ea-9c71-b6a7ddf83c17.gif)

## 仕様

- ホバー表示は関数・定数・変数宣言文の右、または上に記載されているコメントを表示します
- コード補完・ホバー表示機能を利用する場合、変数はDIM/VARで宣言されている必要があります
- 同じ名前で関数・変数が宣言されている場合、補完・ホバー表示が正しく機能しない場合があります

## 既知の問題

- 「\」（バックスラッシュ）を使い、複数行に渡って宣言されている定数・変数の分析ができない

## リリースノート
### [1.0.0] - 2020-08-12

- リリースしました！

## ライセンス

[SmileBASIC](https://www.petc4.smilebasic.com/)は[株式会社スマイルブーム](https://smileboom.com/)の登録商標です。
