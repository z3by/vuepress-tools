---
author:
  avatar: https://avatars.githubusercontent.com/u/83055655?v=4
  email: null
  name: null
  url: null
  username: cool-fe
bugs: https://github.com/cool-fe/winex-cli/issues
category: plugin
date: '2021-08-26T09:50:08.048Z'
deprecated: false
description: Create a  App in seconds.
downloads: null
homepage: https://github.com/cool-fe/winex-cli#readme
keywords:
- winfe
- vuepress
- material
- plugin
license: false
maintainers: null
name: '@winfe/plugin-demo-container'
npm: https://www.npmjs.com/package/%40winfe%2Fplugin-demo-container
publisher:
  avatar: null
  email: 18570148691@163.com
  name: null
  url: null
  username: dsx_gao
repository: https://github.com/cool-fe/winex-cli
score: 0.19699845453027665
stars: 3
unstable: false
version: 1.0.2
watchers: 3

---

# WINEX CLI ![NPM Status](https://img.shields.io/npm/v/@winfe/winex-cli.svg?style=flat)![CI Status](https://circleci.com/gh/cool-fe/winex-cli/tree/main.svg?style=shield) ![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)

a tool is the Standard Tooling. Get started with the [documentation](https://cool-fe.github.io/docs-winex-cli/).

## Quickstart

- [关于](#关于)
- [起步](#起步)
- Commands
  - [`winex init`](https://github.com/cool-fe/winex-cli/tree/doc/packages/cli-plugin-lint)
  - [`winex add`](https://github.com/cool-fe/winex-cli/tree/doc/packages/cli-plugin-lint)
  - [`winex lint`](https://github.com/cool-fe/winex-cli/tree/doc/packages/cli-plugin-lint)

## 关于

`WINEX CLI`是专注于前端开发的自动化工具，目标是贯穿前端研发全链路，提高开发效率，降低维护成本。磨平前端开发者的能力差异，让开发聚焦于业务逻辑。

- 通过`winex init`快速初始化项目，基于模版物料，帮助开发者零成本初始化项目。
- 通过`winex add`使用页面、区块、业务组件等物料，万千物料一键触达，选择物料更加便捷。
- 通过`winex lint`一键解决项目的各种配置，eslint、prettier、editorconfig、.vscode 配置、husky、lint-staged 等，消除一切配置烦恼。

## 起步

- 安装：

```bash
$ npm install -g @winfe/winex-cli
# OR
$ yarn global add @winfe/winex-cli
```

- 升级

如需升级全局的 Winex CLI 包，请运行：

```bash
npm update -g @winfe/winex-cli
# OR
yarn global upgrade --latest @winfe/winex-cli
```

- 使用

```bash
# 初始化一个项目
$ winex init --name my-project

# 添加一个物料
$ winex add --plugin my-plugin

# 初始化/升级：eslint、prettier、.vscode/setting.json、.editorconfig、husky、lint-staged...
$ winex lint
```
