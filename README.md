## 準備

```bash
# docker起動
docker-compose up
# 普通にbashへ入る
docker-compose exec web bash
```

## アプリの作り方

```bash
# つくる
create-nuxt-app hogehoge
# ディレクトリ移動 & npm install
cd hogehoge && npm install
```

## ローカルでの起動方法

```bash
# 起動
npm run dev
```

## ビルド時

```bash
npm run build
```

## デプロイ時

```bash
# firebaseへログイン
firebase login --no-localhost
# ※もし初期化してなかったら
firebase init
# ? What do you want to use as your public directory? dist
# ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
# ? File dist/index.html already exists. Overwrite? No

# firebaseへデプロイ
firebase deploy
```
