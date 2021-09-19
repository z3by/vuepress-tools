---
author:
  avatar: https://avatars.githubusercontent.com/u/1846676?v=4
  email: info@greenimp.co.uk
  name: GreenImp
  url: http://greenimp.co.uk
  username: GreenImp
bugs: https://github.com/GreenImp/vuepress-plugin-dice-roller/issues
category: plugin
date: '2020-09-07T21:23:44.514Z'
deprecated: false
description: Plugin for VuePress that allows rolling dice
downloads: null
homepage: https://github.com/GreenImp/vuepress-plugin-dice-roller#readme
keywords:
- vuepress
- dice
- roll
license: MIT License
maintainers: null
name: vuepress-plugin-dice-roller
npm: https://www.npmjs.com/package/vuepress-plugin-dice-roller
publisher:
  avatar: null
  email: lee@greenimp.co.uk
  name: null
  url: null
  username: greenimp
repository: https://github.com/GreenImp/vuepress-plugin-dice-roller
score: 0.36917885324256694
stars: 0
unstable: true
version: 0.1.7
watchers: 0

---

# vuepress-plugin-dice-roller

Plugin for [VuePress](https://vuepress.vuejs.org/) that allows rolling dice.

It is built upon this [RPG dice roller](https://github.com/GreenImp/rpg-dice-roller), and is used in its [documentation](https://greenimp.github.io/rpg-dice-roller).


## Install

Install the plugin:

```bash
npm install -D vuepress-plugin-dice-roller
# Or
yarn add -D vuepress-plugin-dice-roller
```

Then add the plugin to your Vuepress config file:

```javascript
module.exports = {
  ...
  plugins: [
    ...
    'dice-roller',
  ],
};
```


## Usage

You can add a dice roller anywhere by using the following markdown syntax, where `{notation}` is the optional notation to pre-fill the input with:

```
::: roll {notation} :::
```

For example:

```
::: roll 4d6 ::
```

```
::: roll (2*6)d10 / (4 - d20) :::
```
