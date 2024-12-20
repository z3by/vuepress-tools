---
author:
  avatar: https://private-avatars.githubusercontent.com/u/17541209?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU1MDAsIm5iZiI6MTczNDY1NDMwMCwicGF0aCI6Ii91LzE3NTQxMjA5In0.JY8n2W7lysVHkAt5ccHQYoA4htE7bJmiPEh-jAvcHIk&v=4
  email: aster@vers.site
  name: Aster
  url: null
  username: oovm
bugs: https://github.com/GalAster/vuepress-plugin-shiki/issues
category: plugins
date: '2020-08-09T10:26:39.354Z'
deprecated: false
description: shiki highlighter
downloads: null
homepage: https://github.com/GalAster/vuepress-plugin-shiki
keywords:
- shiki
- syntax-highlighter
- highlighter
license: Mozilla Public License 2.0
maintainers: null
name: '@vutex/vuepress-plugin-shiki'
npm: https://www.npmjs.com/package/%40vutex%2Fvuepress-plugin-shiki
publisher:
  avatar: null
  email: galaster@foxmail.com
  name: null
  url: null
  username: galaster
repository: https://github.com/GalAster/vuepress-plugin-shiki
score: 0.4486211989933508
stars: 0
unstable: true
version: 0.3.1
watchers: 0

---

# Git Time Travel

将 git 的提交平均分布到一段时间内

## PowerShell Version

```sh
git-utils reset Head~20 -i # 开启交互式变基
# 然后把 pick 全部替换成 edit 并关闭 editor
# 直接执行 time-travel.ps1 即可
```

## git

```sh
git-root "🎂 Project initialized!"
git-time 2a990148 2019-01-01
```


## Development

```sh
cargo install --path .
```