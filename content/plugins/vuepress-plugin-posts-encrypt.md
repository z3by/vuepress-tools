---
author:
  avatar: https://avatars.githubusercontent.com/u/20399793?v=4
  email: alphawq@foxmail.com
  name: Aphasia
  url: https://github.com/alphawq
  username: alphawq
bugs: https://github.com/alphawq/vuepress-plugin-posts-encrypt/issues
category: plugin
date: '2021-10-28T09:20:58.444Z'
deprecated: false
description: "English | [\u7B80\u4F53\u4E2D\u6587](./README.zh-cn.md)"
downloads: null
homepage: https://github.com/alphawq/vuepress-plugin-posts-encrypt#readme
keywords:
- vuepress-plugin
- posts-encrypt
- vuepress-plugin
- vuepress-plugin-posts-encrypt
license: MIT License
maintainers: null
name: vuepress-plugin-posts-encrypt
npm: https://www.npmjs.com/package/vuepress-plugin-posts-encrypt
publisher:
  avatar: null
  email: alphawq@foxmail.com
  name: null
  url: null
  username: alphawq
repository: https://github.com/alphawq/vuepress-plugin-posts-encrypt
score: 0.5740828426596418
stars: 9
unstable: true
version: 0.0.4
watchers: 9

---

English | [简体中文](./README.zh-cn.md)

# `vuepress-plugin-posts-encrypt`

![npm (tag)](https://img.shields.io/npm/v/vuepress-plugin-posts-encrypt/latest?style=flat-square&color=blue)
![License](https://img.shields.io/npm/l/vuepress-plugin-posts-encrypt?style=flat-square&color=red&label=License)
![npm downloads](https://img.shields.io/npm/dt/vuepress-plugin-posts-encrypt?style=flat-square&label=Downloads)
[![Blog](https://img.shields.io/badge/blog-@alphawq-blue.svg?style=social)](https://alphawq.github.io/_blog/)

> **A `vuepress plugin` to add `access verification` to your blog.**

## Install

```sh
yarn add vuepress-plugin-posts-encrypt
```

## Usage

### Step 1: Init configuration in vuepress config file

```js
// .vuepress/config.js
module.exports = {

  // other options...
  plugins: [
    [
      'posts-encrypt',
      {
        route: '/auth',
        passwd: '123456',
        encryptInDev: true,
        expires: 1000  * 60
      }
    ]
}
```

👇[All configuration items](#Configs) can be seen at `Configs` part👇

### Step 2: Configure the posts that need to be encrypted access in the blog

- Set `secret: true` in the article [Front Matter](https://vuepress.vuejs.org/zh/guide/frontmatter.html#%E5%85%B6%E4%BB%96%E6%A0%BC%E5%BC%8F%E7%9A%84-front-matter)

```yml
---
title: A Private Post
date: 2021-09-03
categories:
  - Profile
tags:
  - resume
secret: true
---
```

- At the same time, you can also set a different password by `passwd` field for each article

```yml
---
title: A Private Post
date: 2021-09-03
categories:
  - Profile
tags:
  - resume
secret: true
passwd: 1233211234567
---
```

`Thats it!` 🚀🚀🚀

### Step3: Run it & See the effect

_BTW_: **Under dev mode `encryptInDev: true` also needs to be configured**

Execute the following command to start the development service

```sh
vuepress dev docs
```

Click to enter a page that needs to verify the password, you can see the following effects:

<img src="./.github/img/demo.gif" width="300"></img>

## Configs

### Support custom templates

In the custom template scenario, the plugin needs to inject some logic into your template file, such as `the logic related to password verification`. So you need to provide a mark to inject this part of the code in the template.

The following marks except `<%crypto_inject_tag%>` & `<%validate_js_tag%>` are required, the others are optional. You are free to choose:

_BTW_: **The following marks are inserted into the template from top to bottom, so you need to pay attention to the writing position of the mark**

The position markers for content injection in the template include the following

#### `<%iview_css_tag%>` [`Optional`]

> [`iView`](https://www.iviewui.com/docs/introduce) Component library's CSS injection location mark.

- Need to set `iview: true` in the `injectConfig` configuration

#### `<%animate_css_tag%>` [`Optional`]

> [`Animate.css`](https://animate.style/) injection location mark.

- Need to set `animate: true` in the `injectConfig` configuration

#### `<%iview_js_tag%>` [`Optional`]

> [`iView`](https://www.iviewui.com/docs/introduce) Component library's JS injection location mark.

- Need to set `iview: true` in the `injectConfig` configuration

#### `<%minified_css_tag%>` [`Optional`]

> Injection location marker for compiled external 'less' files

- If you don't want to write `css` in the template, this configuration allows you to separate the style files that need to be used in the template into the `less` file. The plugin will help you `compile and insert` to the corresponding location. You only need Specify the absolute path of the style file in the `less` setting of `injectConfig`

#### `<%crypto_inject_tag%>` [`Required`]

- [`CryptoJS`](https://github.com/brix/crypto-js) Script file insertion position

#### `<%validate_js_tag%>` [`Required`]

> **Password verification** and **Verified routing storage** injection location mark of related logic

### Support setting password expiration time

By default, if the verified route is on the same device and the same browser and the user does not clear the local cache, there is no need to verify again next time you come in, because it is stored in `localstorage`

If you don't want this, you can set `expires` for the password, the unit is `milliseconds (ms)`. This expiration time is for each route, not all routes.

_BTW_: **Do not set the expiration time too short, otherwise it may cause an endless loop of routing**

### The following are all supported configuration options：

```ts
interface InjectConfig {
  // The address of the less file for custom template outreach
  less?: string
  // Whether to inject the IView component library, the default is false
  iview?: boolean
  // Whether to inject anmitecss animation library, the default is false
  animate?: boolean
}

interface Options {
  // The route of the authentication page, the default is `/auth`
  route?: string
  // Basic password
  passwd: string
  // Custom password verification template file address
  template?: string
  // Whether the development environment is encrypted, the default is false
  encryptInDev?: boolean
  // Password expiration time, which is permanently valid by default, unit: ms
  expires?: number
  // Determine whether to inject other resources during template customization
  injectConfig?: InjectConfig
}

// The default options
const options: Options = {
  route: '/auth',
  passwd: 'hello world',
  template: '',
  encryptInDev: false,
  expires: 0,
  injectConfig: {
    less: '',
    iview: false,
    animate: false
  }
}
```

👏👏 **One key triple connection** 👏👏

## Changelog

[CHANGELOG.md](./CHANGELOG.md)
## License

**[MIT](./LICENSE)**
