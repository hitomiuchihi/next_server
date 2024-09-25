# ベースイメージとしてNode.jsを指定
FROM node:18

# 作業ディレクトリを作成
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションの全ファイルをコピー
COPY . .

# Next.jsを開発モードで起動
CMD ["npm", "run", "dev"]
