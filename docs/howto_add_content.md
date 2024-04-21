# 内容を追加する方法

about, works, membersはそれぞれ、`/src/components/organism/[xxx]Section`で管理しています

## about

`/src/components/organism/aboutSection`の`content`変数に文章を入れてください

## works

制作物を足す際は、`/src/components/organism/workSection`に`<Work>`コンポーネントを増やし、

- title: 制作物のタイトル
- description: 制作物の説明
- src: 制作物のアイコン <- 命名が良くないので変えます
- iconMaxH: アイコンの最大高さ
- descriptionImage: 説明に使用する画像
- descriptionImageMaxH: 説明に使用する画像の高さ
- githubRepo: 制作物のリポジトリのURL
- youtubeSrc: 制作物の動画のURL
- eventSrc: 発表したイベントのURL
- skills: つけるスキルバッジの配列

以上の属性を与えてください。型, requiredはコードを確認してください。

## members

`/src/components/organism/membersContainer`に、`<Member>`コンポーネントを増やし、

- name: 名前
- description: ちょっとした紹介
- githubSrc: GitHubのユーザーページ
- twitterSrc: Twitterのユーザーページ
- skills: つけるスキルバッジの配列
- avatarSrc: アイコン画像のURL/パス

以上の属性を与えてください。型、requiredはコードを確認してください。
