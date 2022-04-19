---
author:
  avatar: https://avatars.githubusercontent.com/u/30072175?v=4
  email: null
  name: XLor
  url: null
  username: yjl9903
bugs: https://github.com/yjl9903/vuepress-plugin-imagemin/issues
category: plugins
date: '2022-04-18T08:49:03.715Z'
deprecated: false
description: A VuePress plugin for compressing image assets
downloads: null
homepage: https://github.com/yjl9903/vuepress-plugin-imagemin/tree/master/#readme
keywords:
- vite
- vuepress
- vuepress-plugin
- imagemin
- vben
license: MIT License
maintainers: null
name: vuepress-plugin-imagemin
npm: https://www.npmjs.com/package/vuepress-plugin-imagemin
publisher:
  avatar: null
  email: yjl9903@vip.qq.com
  name: null
  url: null
  username: yjl9903
repository: https://github.com/yjl9903/vuepress-plugin-imagemin
score: 0.4811066286476181
stars: 0
unstable: true
version: 0.0.4
watchers: 0

---

# vuepress-plugin-imagemin

> This repo is forked and modified from [vite-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin).

A VuePress plugin for compressing image assets

## Install

**node version:** >=12.0.0

**vite version:** >=2.0.0

```bash
npm i vuepress-plugin-imagemin -D
```

## Usage

- Configuration plugin in vite.config.ts

```ts
import Imagemin from 'vuepress-plugin-imagemin'

export default () => {
  return {
    plugins: [
      Imagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
    ],
  }
}
```

### Options

| params   | type                                  | default | default                                                      |
| -------- | ------------------------------------- | ------- | ------------------------------------------------------------ |
| verbose  | `boolean`                             | `true`  | Whether to output the compressed result in the console       |
| filter   | `RegExp or (file: string) => boolean` | -       | Specify which resources are not compressed                   |
| disable  | `boolean`                             | `false` | Whether to disable                                           |
| svgo     | `object` or `false`                   | -       | See [Options](https://github.com/svg/svgo/#what-it-can-do)   |
| gifsicle | `object` or `false`                   | -       | See [Options](https://github.com/imagemin/imagemin-gifsicle) |
| mozjpeg  | `object` or `false`                   | -       | See [Options](https://github.com/imagemin/imagemin-mozjpeg)  |
| optipng  | `object` or `false`                   | -       | See [Options](https://github.com/imagemin/imagemin-optipng)  |
| pngquant | `object` or `false`                   | -       | See [Options](https://github.com/imagemin/imagemin-pngquant) |
| webp     | `object` or `false`                   | -       | See [Options](https://github.com/imagemin/imagemin-webp)     |

## Example

**Run Example**

```bash

npm run dev:play
npm run dev:build

```

## License

MIT

## Inspiration

+ [vite-plugin-compress](https://github.com/alloc/vite-plugin-compress)

+ [vite-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin)
