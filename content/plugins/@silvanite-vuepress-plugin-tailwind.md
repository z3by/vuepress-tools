---
author:
  avatar: https://avatars.githubusercontent.com/u/4539223?v=4
  email: m2de@outlook.com
  name: Marco Mark
  url: null
  username: m2de
bugs: https://github.com/silvanite/vuepress-plugin-tailwind/issues
category: plugin
date: '2020-05-17T19:30:41.203Z'
deprecated: false
description: Tailwind CSS plugin for VuePress
downloads: null
homepage: https://github.com/silvanite/vuepress-plugin-tailwind#readme
keywords:
- vuepress
- plugin
- tailwind
- css
license: false
maintainers: null
name: '@silvanite/vuepress-plugin-tailwind'
npm: https://www.npmjs.com/package/%40silvanite%2Fvuepress-plugin-tailwind
publisher:
  avatar: null
  email: m2de@outlook.com
  name: null
  url: null
  username: m2de
repository: https://github.com/silvanite/vuepress-plugin-tailwind
score: 0.3628243317609917
stars: 18
unstable: false
version: 1.3.0
watchers: 18

---

# VuePress Plugin to add Tailwind CSS

## Overview

This plugin will install Tailwind CSS ^1.1.2 ready for you to import into your VuePress theme or project. You will need to follow the [Tailwind CSS installation](https://tailwindcss.com/docs/installation/) instructions and add Tailwind to your CSS. E.g. add the tailwind directives to your styl or css files.

```styl
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Installation

```sh
npm i @silvanite/vuepress-plugin-tailwind
```

Load the plugin inside your `config.js` or in your theme's `index.js`

```js
module.exports = {
    ...
    "plugins": [
        "@silvanite/tailwind"
    ]
}
```

## Configuration options

Please follow the [Tailwind CSS configuration](https://tailwindcss.com/docs/configuration/) instructions. If you are using the default filename, you do not need to specify it here. If you would like to load a custom configuration file with a different filename to the default `tailwind.config.js` you can specify this in the plugin options.

```js
module.exports = {
    ...
    "plugins": [
        ["@silvanite/tailwind", {
            config: "./tailwind.js"
        }]
    ]
}
```

By default PurgeCSS will be applied when running VuePress build (production). You can optionally disable this if you do not want to use PurgeCSS.

```js
module.exports = {
    ...
    "plugins": [
        ["@silvanite/tailwind", {
            purgecss: { enabled: false }
        }]
    ]
}
```

## Support

If you experience any problems with this VuePress Plugin please open a new issue or get in touch on Twitter [@m2de_io](https://twitter.com/m2de_io). Or just look me up anyway, I'd love to hear from you.
