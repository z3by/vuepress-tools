---
author:
  avatar: https://private-avatars.githubusercontent.com/u/23009039?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUyNjAsIm5iZiI6MTczNDY1NDA2MCwicGF0aCI6Ii91LzIzMDA5MDM5In0.1PGE2R7_axg3sU1LpTR9n8deYhMYQVhJ2YYotFGl-OI&v=4
  email: null
  name: AnHyun
  url: null
  username: AnHyun
bugs: https://github.com/AnHyun/vuepress-plugin-env-define/issues
category: plugins
date: '2022-03-08T06:25:38.151Z'
deprecated: false
description: "vuepress\u73AF\u5883\u53D8\u91CF\u6CE8\u5165\u63D2\u4EF6"
downloads: null
homepage: https://github.com/AnHyun/vuepress-plugin-env-define#readme
keywords:
- vuepress
- vuepress-plugin
license: false
maintainers: null
name: vuepress-plugin-env-define
npm: https://www.npmjs.com/package/vuepress-plugin-env-define
publisher:
  avatar: null
  email: 909833009@qq.com
  name: null
  url: null
  username: anhyun
repository: https://github.com/AnHyun/vuepress-plugin-env-define
score: 0.17980525752956913
stars: 0
unstable: false
version: 1.0.2
watchers: 0

---

# vuepress-plugin-env-define

### 使用方法

1. 安装
   npm install vuepress-plugin-env-define

2. package.json 文件中配置

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "build:dev": "vuepress build docs",
    "build:test": "vuepress build docs",
    "build:prod": "vuepress build docs"
  }
}
```

3. 在 docs 目录下新增.env 文件
   例如： .env.dev、.env.test、.env.prod 并在文件中配置环境变量

```sh
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

4. 在 config.js 文件中配置插件

```js
module.exports = {
  plugins: ["env-define"],
};
```
