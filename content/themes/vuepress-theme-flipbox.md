---
author:
  avatar: https://private-avatars.githubusercontent.com/u/32937274?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU1MDAsIm5iZiI6MTczNDY1NDMwMCwicGF0aCI6Ii91LzMyOTM3Mjc0In0.KN3tSf77wTukfVzIrEoC_UJzmLV9WsQkFPwUOPhqIdY&v=4
  email: null
  name: Flipbox Digital
  url: null
  username: flipboxlabs
bugs: https://github.com/flipboxlabs/vuepress-theme-flipbox/issues
category: themes
date: '2018-11-16T22:54:42.725Z'
deprecated: false
description: vuepress-theme
downloads: null
homepage: https://github.com/flipboxlabs/vuepress-theme-flipbox#readme
keywords: null
license: MIT License
maintainers: null
name: vuepress-theme-flipbox
npm: https://www.npmjs.com/package/vuepress-theme-flipbox
publisher:
  avatar: null
  email: doug@flipboxdigital.com
  name: null
  url: null
  username: flipbox
repository: https://github.com/flipboxlabs/vuepress-theme-flipbox
score: 0.46114447366663447
stars: 6
unstable: false
version: 1.0.31
watchers: 6

---

# Flipbox Documentation Theme for VuePress

This is the [VuePress](https://v0.vuepress.vuejs.org/) theme used for [Flipbox](https://flipboxdigital.com/).

## Setup

1. Require VuePress and the Flipbox theme in your project
    ```bash
    npm install -D vuepress
    npm install -D vuepress-theme-flipbox
    ```
    
2. Set config values in `.vuepress/config.js`:
    ```js
    module.exports = {
        // ...
        theme: 'flipbox',
        themeConfig: {
            // ...
            codeLanguages: {
                php: 'PHP',
                twig: 'Twig',
                json: 'JSON',
                // any other languages for the code toggles...
            }
        },
        markdown: {
            anchor: { level: [2, 3, 4] },
            toc: { includeLevel: [3] },
            config(md) {
                md.use(require('vuepress-theme-flipbox/markup'))
            }
        }
    }
    ```

## Code Toggles

You can create code toggles by wrapping multiple fenced code blocks with a `code` container:

    ::: code
    
    ``` php
    echo "Hey, $name";
    ```
    
    ``` twig
    Hey, {{ name }}
    ```
    
    :::

(Use the same language handles defined by `themeConfig.codeLanguages` in `.vuepress/config.js`.)

## Theme

After ejecting VuePress, the customizations are:

- Add ButtonLink.vue
- Add CodeToggle.vue
- Add markup.js
- Add /styles/override.styl - Custom code
- Update /styles/config.styl
  - Change colors (7 colors, add sidebar and codeBg)
  - Add `php` and `twig` to $codeLang
  - Add `@import '~@temp/override.styl'` at end
- Update /styles/code.styl - Custom styling
  - Comment out `color #fff` for `.content pre code`
- Update enhanceApp.js - Custom code
- Run `npm login`
- Run `npm version <1.0.X>`
- Run `npm publish`

To dev locally, set the local theme dir as a dev dependency in the project's package.json

    "devDependencies": {
      ...
      "vuepress-theme-flipbox": "file:../path/to/theme/vuepress-theme-flipbox"
    }