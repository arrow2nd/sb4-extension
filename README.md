# sb4-extension

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/arrow2nd.sb4-extension)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/arrow2nd.sb4-extension)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

SmileBasic 4（プチコン４）のコードをいい感じに書くためのちょっとした拡張機能です

## 主な機能

### シンタックスハイライト

![sb4-syntax-highlight](https://user-images.githubusercontent.com/44780846/113377004-11f82600-93ae-11eb-8738-05890273115d.png)

### 入力補完

![sb4-completion](https://user-images.githubusercontent.com/44780846/113377006-1290bc80-93ae-11eb-8668-ed15509c372e.gif)

### スニペット

![sb4-snipet](https://user-images.githubusercontent.com/44780846/113377009-13295300-93ae-11eb-9c0d-1c9585dcf8bb.gif)

### 宣言のホバー表示

![sb4-hover](https://user-images.githubusercontent.com/44780846/113377007-13295300-93ae-11eb-87be-a39ba0406488.gif)

## 仕様

- ホバー表示には **宣言文の右、または上に記載されているコメント** が表示されます
- 宣言文のない変数（関数の仮引数を含む）は、入力補完・ホバー表示の対象外です
- 同じスコープ内に同名の関数と変数が宣言されている場合、入力補完・ホバー表示は正しく機能しない場合があります

## リリースノート

## [2.0.0] - 2021-04-02

### Added

- スニペットを追加

### Fixed

- STEP 命令がハイライトされない

### Changed

- 全体の実装を見直し
- 使用可能な変数のみを補完候補に出すよう変更

## スクリーンショットについて

| 要素     | リンク                                                                                          |
| -------- | ----------------------------------------------------------------------------------------------- |
| テーマ   | [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme) |
| フォント | [SmileBasic Font](http://smilebasic.com/supplements/)                                           |

## 商標について

SmileBASIC および プチコン は[株式会社スマイルブーム](https://smileboom.com/)の登録商標です。

> [プチコン 4 公式サイト](https://www.petc4.smilebasic.com/)
