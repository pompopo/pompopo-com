---
title: pompopo.com リニューアル
tags: [docusaurus]
authors: [pompopo]
---



# pompopo.com リニューアル

## 概要

[pompopo.com](https://pompopo.com) を [Docusaurus](https://docusaurus.io/) で作りなおした。

同僚が古き良き個人サイトを運営しているのを見て、自分も雑にコンテンツを置ける場所が欲しくなったのだ。
欲しくなったというか、すでに無駄に [Next.js](https://nextjs.org/) で作ったものがあったのだが、長らく放置されていたリポジトリを見てアップデートする気力が湧かなかったのでイチから作り直すことにした。

<!-- truncate -->

色々比較した結果、[Docusaurus](https://docusaurus.io/) を選んだ。

### 良さそうな点

- 運用するにあたって覚えることが少なそう。
- GitHub Pagesで使える。
- Next.jsみたいに、ファイルを置いた場所がそのままURLに反映されてわかりやすい。
- Markdownで書けるし、TypeScriptで書いたReactコンポーネントも簡単に設置できる。
- GitHub Actionsを使うことでGitHubのWeb UI上からでもページ更新、デプロイできる。
  - なのでブログもこちらにまとめることにした。
- デザインがまあまあ好み。
- 無料で広告も表示されない。

### 悪そうな点

- 画像を埋め込むのは面倒かも。
- Slackなどのように、URLを貼り付けたらOGP画像などをサッと表示してほしいが、デフォルトでは無理そう。
- [テーマ](https://docusaurus.io/docs/api/themes) をシュッと変えたいがまだ準備中らしい。
- `/docs` は使う予定がないが削除できない。
  - ブログだけのモードにはできる。
