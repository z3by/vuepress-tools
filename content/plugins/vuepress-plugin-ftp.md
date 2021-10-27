---
author:
  avatar: https://avatars.githubusercontent.com/u/79316040?v=4
  email: zenghp2015@gmail.com
  name: Zero2015
  url: null
  username: zenghp
bugs: https://github.com/Zero2015/vuepress-plugin-ftp/issues
category: plugin
date: '2021-04-30T16:40:26.876Z'
deprecated: false
description: ftp plugin for vuepress
downloads: null
homepage: https://github.com/Zero2015/vuepress-plugin-ftp
keywords:
- vue
- vuepress
license: false
maintainers: null
name: vuepress-plugin-ftp
npm: https://www.npmjs.com/package/vuepress-plugin-ftp
publisher:
  avatar: null
  email: zenghp2015@gmail.com
  name: null
  url: null
  username: zenghp
repository: https://github.com/Zero2015/vuepress-plugin-ftp
score: 0.5039140810288432
stars: 0
unstable: false
version: 1.0.2
watchers: 0

---

# VuePress Ftp

VuePress Ftp 部署插件

## vuepress 配置

- 安装

```shell
yarn add -D vuepress-plugin-ftp # npm i --save-dev vuepress-plugin-ftp
```

- 在package.json 的 scripts添加 `vuepress deploy docs` 命令

```shell
"scripts": {
  "deploy": "vuepress deploy docs"
},
```

- 在根目录创建`.env`文件

```shell
SERVER_HOST=[ip]
SERVER_PORT=[port]
SERVER_USER=[user]
SERVER_PASS=[password]
SERVER_REMOTE_ROOT=[dir]
```

## 参数

- SERVER_HOST：Ftp ip 地址
- SERVER_PORT：Ftp 端口
- SERVER_USER：Ftp 用户名
- SERVER_PASS：Ftp 密码
- SERVER_REMOTE_ROOT： Ftp 远程目录地址
