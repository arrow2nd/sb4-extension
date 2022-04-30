# Change Log

## [Unreleased]

## [3.0.1] - 2022-04-30

### Security

- 依存関係を更新

### Fixed

- コメントアウトされた定義文が無視されない
- DEF 定義内にグローバル変数と同一名の変数が存在する場合、ホバー時にグローバル変数の内容が表示される

## [3.0.0] - 2022-03-30

### Added

- VSCode for the Web に対応

### Fixed

- DEF 定義の末端行でローカル変数が入力補完に表示されない

## [2.1.1] - 2021-11-26

### Fixed

- @ラベルの補完候補表示を修正

## [2.1.0] - 2021-11-26

### Added

- @ラベルのホバー・入力補完を実装

### Fixed

- ショートカットでコメントを入力しようとすると`REM|'`と入力される
- 宣言命令と代入する値の間にスペースが入っていると認識されない

### Changed

- DEF 定義のホバー時に引数まで表示するように変更

### Removed

- 不要な入力補完候補を削除

## [2.0.0] - 2021-04-02

### Added

- スニペットを追加

### Fixed

- STEP 命令がハイライトされない

### Changed

- 全体の実装を見直し
- 使用可能な変数のみを補完候補に出すよう変更

## [1.0.3] - 2021-03-26

### Fixed

- 軽微なバグを修正

## [1.0.2] - 2020-11-03

### Fixed

- 一部命令がハイライトされない
- デフォルトの命令名を含む変数名を正しくハイライトできない
- 閉じ括弧の無い文字列が複数行と解釈される

## [1.0.1] - 2020-10-10

### Fixed

- デフォルトの定数名を含むユーザー定数が正しくハイライトできない
- 「\」（バックスラッシュ）を使い、複数行に渡って宣言されている定数・変数の分析ができない

## 1.0.0 - 2020-08-12

- リリースしました！

[unreleased]: https://github.com/arrow2nd/sb4-extension/compare/v3.0.0...HEAD
[3.0.0]: https://github.com/arrow2nd/sb4-extension/compare/v2.1.1...v3.0.0
[2.1.1]: https://github.com/arrow2nd/sb4-extension/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/arrow2nd/sb4-extension/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/arrow2nd/sb4-extension/compare/v1.0.3...v2.0.0
[1.0.3]: https://github.com/arrow2nd/sb4-extension/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/arrow2nd/sb4-extension/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/arrow2nd/sb4-extension/compare/v1.0.0...v1.0.1
