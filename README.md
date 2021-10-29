# プロダクト名：TypeORM リレーション

## **概要**

TypeORM のリレーション勉強です。

資料：https://docs.google.com/spreadsheets/d/1Z4DzSw4GC4m4kTbpGtPyMNMAcxfznTFmpqzWHjocho0/edit#gid=417906448

---

## **前提条件**

お使いの環境が利用可能でない場合は[こちら](https://code.visualstudio.com/docs/remote/containers)を参考に事前作業を行ってください。

1. VSCode Remote Containers が利用可能である事

---

## **環境構築手順**

クローン後に Docker コンテナを生成してください。

---

## **ブランチ別の内容**

| 内容                                         | 切り替えコマンド                       | 備考 |
| -------------------------------------------- | -------------------------------------- | ---- |
| OneToOne(1 対 1)                             | **$ git checkout onetoone**            | -    |
| ManyToOne(多対 1):単方向                     | **$ git checkout menytoone**           | -    |
| ManyToOne(多対 1) - OneToMany(1 対多):双方向 | **$ git checkout manytoone_onetomany** | -    |
| ManyToMany(多対多):単方向                    | **$ git checkout manytomany1**         | -    |
| ManyToMany(多対多):双方向                    | **$ git checkout manytomany2**         | -    |

## **サービス起動手順**

| システム     | 起動コマンド      | アクセス URL          |
| ------------ | ----------------- | --------------------- |
| すべて起動   | **$ npm start**   | -                     |
| バックエンド | **$ npm run api** | http://localhost:3333 |
