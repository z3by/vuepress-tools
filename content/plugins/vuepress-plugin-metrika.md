---
author:
  avatar: https://avatars.githubusercontent.com/u/4928316?v=4
  email: hi@teners.me
  name: Sergey Sokolov
  url: null
  username: teners
bugs: https://github.com/teners/vuepress-plugin-metrika
category: plugin
date: '2021-07-20T15:09:02.964Z'
deprecated: false
description: Yandex Metrika plugin for VuePress
downloads: null
homepage: https://github.com/teners/vuepress-plugin-metrika#readme
keywords:
- vuepress
- plugin
- yandex
- metrika
- "\u044F\u043D\u0434\u0435\u043A\u0441"
- "\u043C\u0435\u0442\u0440\u0438\u043A\u0430"
license: MIT License
maintainers: null
name: vuepress-plugin-metrika
npm: https://www.npmjs.com/package/vuepress-plugin-metrika
publisher:
  avatar: null
  email: dmemory7@ya.ru
  name: null
  url: null
  username: teners
repository: https://github.com/teners/vuepress-plugin-metrika
score: 0.40301077156091764
stars: 2
unstable: false
version: 1.0.3
watchers: 2

---

# Yandex Metrika VuePress plugin

![Version](https://img.shields.io/npm/v/vuepress-plugin-metrika)
![License](https://img.shields.io/npm/l/vuepress-plugin-metrika)

Integrate [Yandex.Metrika](https://metrika.yandex.ru/) into your
[VuePress](http://vuepress.vuejs.org) app with a few configuration lines 🔧

## Install

From your VuePress project directory run

```shell
yarn add --dev --exact vuepress-plugin-metrika
```

## Usage

Add the following lines to the `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    ...
    [
      'metrika',
      {
        counter: 'XXXXXXX',
        config: {...},
      },
    ],
  ]
}
```

where `XXXXXXX` is your Metrika counter, and `config` is an optional parameter
with the following defaults:

```js
{
  accurateTrackBounce: true,
  clickmap: true,
  trackLinks: true,
  webvisor: false
}
```

[See more](https://yandex.ru/support/metrica/code/counter-initialize.html)
about Yandex.Metrika configuration options.

And you're good to go! 🚀 Build your VuePress site as usual
and enjoy your analytics 📈
