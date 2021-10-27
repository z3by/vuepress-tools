---
author:
  avatar: https://avatars.githubusercontent.com/u/8652596?v=4
  email: null
  name: veaba
  url: null
  username: veaba
bugs: https://github.com/veaba/vuepress-plugin-editable/issues
category: plugin
date: '2021-08-22T07:51:40.952Z'
deprecated: false
description: <p align="center">
downloads: null
homepage: https://github.com/veaba/vuepress-plugin-editable
keywords: null
license: false
maintainers: null
name: vuepress-plugin-editable
npm: https://www.npmjs.com/package/vuepress-plugin-editable
publisher:
  avatar: null
  email: 908662421@qq.com
  name: null
  url: null
  username: veaba
repository: https://github.com/veaba/vuepress-plugin-editable
score: 0.4815977980018178
stars: 1
unstable: false
version: 1.0.11
watchers: 1

---

# vuepress-plugin-editable

<p align="center">

<a href="https://npmcharts.com/compare/vuepress-plugin-editable?minimal=true"><img src="https://img.shields.io/npm/dm/vuepress-plugin-editable.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/vuepress-plugin-editable"><img src="https://img.shields.io/npm/v/vuepress-plugin-editable.svg" alt="Version"></a>
[![release docs CI](https://github.com/veaba/vuepress-plugin-editable/actions/workflows/release-docs.yml/badge.svg)](https://github.com/veaba/vuepress-plugin-editable/actions/workflows/release-docs.yml)

</p>

Let's editing vuepress generate docs so easy!

> Safety Warning: Currently, to facilitate functionality, veaba-bot explicitly redirects the Github AccessToken to the url of your launch oAuth page. For the security of your Github account, please always avoid revealing the AccessToken to third parties, including [veaba-bot](), veaba ](https://github.com/veaba/veaba-bot), `veaba-bot` will not keep storing your `AccessToken` information. Your `AccessToken` is passed to `veaba-bot` via the Request header `access-token` set in fetch.

> 安全警告：目前为了方便实现功能，`veaba-bot` 会显式地将 Github `AccessToken` 重定向到你的发起 oAuth 页面的 url，为了你的 Github 账号安全，请始终避免泄露 `AccessToken` 给第三方，包括 [veaba-bot](https://github.com/veaba/veaba-bot)，`veaba-bot` 不会保留存储你的 `AccessToken`信息。你的 `AccessToken` 是通过 fetch 里设置的 Request header `access-token` 传递给 `veaba-bot`。

## Why vuepress-plugin-editable

Based on vuepress + markdown ecosystem simplifies the intermediate process and can be quickly applied to the article
creation and revision process.

You don't even need to open vscode, you just find a mistake while reading the documentation and correct it as you go.

This will lower the threshold for developers to participate in open source documentation maintenance.

## Install

```sh
npm install -D vuepress-plugin-editable
# OR yarn add -D vuepress-plugin-editable
```

## Usage

1. Double-click on the vuepress generated content.

2. OAuth github account and PR to repo's source file.

## Features

- [x] vuepress ecosystem

- [x] plain text mode: HTML setting `contenteditable:true` redirect pull request.

- [x] complex text mode: diff origin source file content.

- [x] success/error alert ui

## Bug

Listed not supported yet!

1. custom container

```txt
::: warning
*here be dragons*
:::

```

2. definition code

```txt
:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

```

3. img

4. table

5. code

6. Emphasis

```txt

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~StrikeThrough~~

```

7. Positioning is not accurate

8. H1-H6 auth block position has been mask.

9. BUG: 再次发起请求时，应该关闭 dialog
## API

### options

| name          | description          | default                |
| ------------- | -------------------- | ---------------------- |
| appDomain     |                      | `https://bot.veaba.me` |
| getContentAPI |                      | `/api/content/get`     |
| updateAPI     |                      | `/api/content/update`  |
| redirectAPI   |                      | `/api/redirect/github` |
| clientId      | Github APP client id | {clientId}             |
|               |                      |                        |

## Reference

- [First draft](https://github.com/vuejs/docs-next-zh-cn/discussions/377#discussioncomment-298623)
