---
author:
  avatar: https://avatars.githubusercontent.com/u/39853279?v=4
  email: null
  name: Yves Wang
  url: null
  username: YvesCoding
bugs: https://github.com/YvesCoding/vuepress-theme-vuepress/issues
category: themes
date: '2020-08-01T16:02:57.262Z'
deprecated: false
description: Allow you to customize scrollbars in Vuepress
downloads: null
homepage: https://github.com/YvesCoding/vuepress-theme-vuepress#readme
keywords:
- vue
- vuepress
- vuescroll
license: false
maintainers: null
name: vuepress-theme-vuescroll
npm: https://www.npmjs.com/package/vuepress-theme-vuescroll
publisher:
  avatar: null
  email: 724003548@qq.com
  name: null
  url: null
  username: wangyi7099
repository: https://github.com/YvesCoding/vuepress-theme-vuepress
score: 0.4242935301304664
stars: 2
unstable: true
version: 0.0.44
watchers: 2

---

## Introduction

> vuepress-theme-vuescroll is a [`vuepress`](https://github.com/vuejs/vuepress) theme `plugin` that allow you customize scrollbars by [`vuescroll`](https://github.com/YvesCoding/vuescroll) in Vuepress.

## Who use this plugin ?

- [vuescroll offical website](http://vuescrolljs.yvescoding.org/)

- More... Welcome to tell me !

## Usage

1. Installation

```bash
  npm i vuepress-theme-vuescroll -S
```

2. Config.js

To use a theme from an npm dependency, provide a theme option in .vuepress/config.js:

```javascript
module.exports = {
  theme: 'vuescroll'
};
```

3. Create an `enhanceApp.js` in your `.vuepress` folder and write such code:

```javascript
// enhanceApp.js

import { registry } from 'vuepress-theme-vuescroll';

export default ({ Vue, router, store }) => {
  // Your  options of most outside vuescroll.
  let ops = {
    bar: {
      background: '#3eaf7c'
    },
    rail: {
      gutterOfEnds: '60px'
    },
    scrollPanel: {
      scrollingX: false
    }
  };
  // THe version you would like to use.
  // default: vuescroll(mix)
  // options: slide, native
  const mode = 'native';
  // Tell vuescroll your option.
  registry(ops, mode);
};
```

4. That's all, you can use vuescroll in your own App!

## Current Vuepress Version

### 0.14.2

## License

### MIT
