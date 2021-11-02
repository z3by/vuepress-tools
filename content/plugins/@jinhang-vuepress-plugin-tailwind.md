---
author:
  avatar: https://avatars.githubusercontent.com/u/13505593?v=4
  email: jinhang87@163.com
  name: jinhang
  url: https://github.com/jinhang87
  username: jinhang
bugs: https://github.com/jinhang87/vuepress-plugin-tailwind/issues
category: plugin
date: '2021-10-31T03:15:33.241Z'
deprecated: false
description: A VuePress plugin to use tailwindcss easily
downloads: null
homepage: https://vuepress-plugin-tailwind.vercel.app/
keywords:
- vuepress
- plugin
- tailwind
- purgecss
- style
- css
license: MIT License
maintainers: null
name: '@jinhang/vuepress-plugin-tailwind'
npm: https://www.npmjs.com/package/%40jinhang%2Fvuepress-plugin-tailwind
publisher:
  avatar: null
  email: jinhang87@163.com
  name: null
  url: null
  username: jinhang
repository: https://github.com/jinhang87/vuepress-plugin-tailwind
score: 0.6448493592856182
stars: 0
unstable: false
version: 4.0.4
watchers: 0

---

# @jinhang/vuepress-plugin-tailwind

[![GitHub package.json version](https://img.shields.io/github/package-json/v/jinhang87/vuepress-plugin-tailwind?logo=github&style=for-the-badge)](https://github.com/jinhang87/vuepress-plugin-tailwind/blob/master/package.json)
[![npm downloads](https://img.shields.io/npm/dt/@jinhang/vuepress-plugin-tailwind?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jinhang/vuepress-plugin-tailwind)
![appveyor](https://img.shields.io/appveyor/build/jinhang87/vuepress-plugin-tailwind?label=appveyor&style=for-the-badge)
[![CI-CD](https://img.shields.io/github/workflow/status/jinhang87/vuepress-plugin-tailwind/CI-CD?label=ci-cd&logo=github&style=for-the-badge)](https://github.com/jinhang87/vuepress-plugin-tailwind/actions/workflows/ci-cd.yml)
[![Compatibility Score](https://img.shields.io/github/workflow/status/jinhang87/vuepress-plugin-tailwind/compatibility-score?label=compatibility-score&logo=github&style=for-the-badge)](https://github.com/jinhang87/vuepress-plugin-tailwind/actions/workflows/compatibility-score.yml)
[![Dependencies](https://img.shields.io/requires/github/jinhang87/vuepress-plugin-tailwind?color=blue&logo=dependabot&style=for-the-badge)](https://github.com/jinhang87/vuepress-plugin-tailwind/pulls?q=dependabot)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jinhang87/vuepress-plugin-tailwind?logo=javascript&style=for-the-badge)](https://github.com/jinhang87/vuepress-plugin-tailwind/blob/master/index.js)
[![Netlify](https://img.shields.io/netlify/c3151153-507a-4a8d-921e-890e9906fcdd?logo=netlify&style=for-the-badge)](https://vuepress-plugin-tailwind.vercel.app/)
[![Codacy grade](https://img.shields.io/codacy/grade/bcad32bd9cb441f49a47cdac66d7a232?logo=codacy&style=for-the-badge)](https://www.codacy.com/gh/jinhang87/vuepress-plugin-tailwind/dashboard?utm_source=github.com&utm_medium=referral&utm_content=jinhang87/vuepress-plugin-tailwind&utm_campaign=Badge_Grade)
[![LICENSE](https://img.shields.io/github/license/jinhang87/vuepress-plugin-tailwind?style=for-the-badge)](https://github.com/jinhang87/vuepress-plugin-tailwind/blob/master/LICENSE)

A VuePress(2.x) plugin to use [`tailwindcss`](https://github.com/tailwindcss/tailwindcss) easily.

With this plugin, you can use any classes defined by Tailwind CSS, and the unused classes are automatically purged (production only).

This plugin is based on [the official guide of Tailwind CSS](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css).

## Usage

1.  Install this plugin :

```sh
yarn add @jinhang/vuepress-plugin-tailwind
```

2.  Add `@tailwind` import statements to the beginning of `.vuepress/styles/index.sass` :

```styl
@tailwind base;
@tailwind components;
@tailwind utilities;

// Add your style definitions below...
```

3.  Load this plugin in `.vuepress/config.js` :

```js
module.exports = {
  plugins: ["@jinhang/tailwind"],
};
```

:warning:
_These configuration files are not created automatically. You have to create them if not exist._

## Options

See [docs](https://vuepress-plugin-tailwind.vercel.app/).

## Versioning policy

Since v1.0.0, the versioning of this plugin will follow that of Tailwind.

For example, when there is a major version upgrade of Tailwind, this plugin also gets a major upgrade.

## License

[MIT](https://github.com/jinhang87/vuepress-plugin-tailwind/blob/master/LICENSE)
