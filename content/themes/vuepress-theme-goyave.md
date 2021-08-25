---
author:
  avatar: https://avatars.githubusercontent.com/u/77988340?v=4
  email: null
  name: "J\xE9r\xE9my LAMBERT"
  url: System-Glitch
  username: go-goyave
bugs: https://github.com/go-goyave/vuepress-theme-goyave/issues
category: theme
date: '2021-04-28T14:23:34.062Z'
deprecated: false
description: Vuepresse theme for the Goyave documentation
downloads: null
homepage: https://github.com/go-goyave/vuepress-theme-goyave#readme
keywords:
- vuepress
- theme
- goyave
- dark
- vue
license: MIT License
maintainers: null
name: vuepress-theme-goyave
npm: https://www.npmjs.com/package/vuepress-theme-goyave
publisher:
  avatar: null
  email: jeremy.la@outlook.fr
  name: null
  url: null
  username: systemglitch
repository: https://github.com/go-goyave/vuepress-theme-goyave
score: 0.5114409900051409
stars: 0
unstable: false
version: 1.1.1
watchers: 0

---

# Vuepress Goyave

The Vuepress theme for the [Goyave documentation](https://system-glitch.github.io/goyave/).

Features:
- Dark theme
- Color blindness friendly
- New containers
    - Images in text (left or right)
    - Monospace box (compatible with formatting)
    - Wrapping grid
- Back to top

## Installation

```
npm install --save-dev vuepress-theme-goyave
```

Set the theme in your vuepress config (`.vuepress/config.js`):
```js
module.exports = {
    theme: "goyave"
}
```

## Sponsor support

You can provide a list of sponsors to `themeConfig` in `config.js`:
```js
becomeSponsorLink: "https://github.com/sponsors/System-Glitch/",
sponsors: [
    {
        name: "Goyave",
        img: "/goyave_banner.png",
        url: "https://goyave.dev"
    }
]
```

The sponsors will appear at the top of the sidebar if this list is not empty. If the `becomeSponsorLink` is empty, the "Become a Sponsor" button will not appear.

## New containers

### Image in text (left)

```md
::: img-row <img :src="$withBase('/image.svg')" height="150" alt="Image description"/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
:::
```

### Image in text (right)

```md
::: img-row-right <img :src="$withBase('/image.svg')" height="150" alt="Image description"/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
:::
```

### Monospace box

```md
:::vue
Monospace text **compatible** with *formatting*.
:::
```

### Wrapping grid

```md
::: table
[Link 1](#link-1)
[Link 2](#link-2)
[Link 3](#link-3)
[Link 4](#link-4)
[Link 5](#link-5)
[Link 6](#link-6)
:::
```
