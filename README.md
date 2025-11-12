# pompopo.com

pompopo.comの公式ウェブサイトです。Docusaurus 3.9.2で構築されています。

🌐 **URL**: https://pompopo.com

## 必要な環境

- Node.js 20.x以降
- Yarn

## 開発環境のセットアップ

### 方法1: Docker環境での開発（推奨）

Windowsを含むすべてのプラットフォームで動作する開発環境です。

#### 前提条件

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)がインストールされていること

#### 起動方法

1. リポジトリをクローン:
```bash
git clone https://github.com/pompopo/pompopo-com.git
cd pompopo-com
```

2. Docker Composeで開発サーバーを起動:
```bash
docker-compose up
```

3. ブラウザで http://localhost:3000 にアクセス

#### 開発時のコマンド

```bash
# 開発サーバーの起動
docker-compose up

# バックグラウンドで起動
docker-compose up -d

# 停止
docker-compose down

# コンテナを再ビルド
docker-compose up --build

# コンテナ内でコマンドを実行
docker-compose exec docusaurus yarn build
docker-compose exec docusaurus yarn typecheck
```

### 方法2: ローカル環境での開発

Node.jsが既にインストールされている場合は、ローカルで直接開発できます。

#### 前提条件

- Node.js 20.x以降
- Yarn

#### セットアップ手順

1. リポジトリをクローン:
```bash
git clone https://github.com/pompopo/pompopo-com.git
cd pompopo-com
```

2. 依存関係をインストール:
```bash
yarn install
```

3. 開発サーバーを起動:
```bash
yarn start
```

4. ブラウザで http://localhost:3000 にアクセス

#### 開発時のコマンド

```bash
# 開発サーバーの起動
yarn start

# 本番環境用にビルド
yarn build

# ビルドしたサイトをローカルで確認
yarn serve

# 型チェック
yarn typecheck

# キャッシュをクリア
yarn clear
```

## デプロイ

mainブランチにプッシュすると、GitHub Actionsが自動的にGitHub Pagesにデプロイします。

## ライセンス

Copyright © 2024 @pompopo