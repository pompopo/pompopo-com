# 開発環境用のDockerfile
FROM node:20-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとyarn.lockをコピー
COPY package.json yarn.lock ./

# 依存関係をインストール
RUN yarn install --frozen-lockfile

# アプリケーションのソースコードをコピー
COPY . .

# 開発サーバーのポートを公開
EXPOSE 3000

# 開発サーバーを起動
CMD ["yarn", "start", "--host", "0.0.0.0"]
