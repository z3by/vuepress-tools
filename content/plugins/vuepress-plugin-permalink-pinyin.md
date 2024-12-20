---
author:
  avatar: https://private-avatars.githubusercontent.com/u/5064777?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU0NDAsIm5iZiI6MTczNDY1NDI0MCwicGF0aCI6Ii91LzUwNjQ3NzcifQ.CvlJz52mwgNvPWaKpjwcj5OYpSeAH8ZgzpVJce2rDQI&v=4
  email: 16viko@gmail.com
  name: viko16
  url: null
  username: viko16
bugs: https://github.com/viko16/vuepress-plugin-permalink-pinyin/issues
category: plugins
date: '2022-05-03T07:03:15.682Z'
deprecated: false
description: A VuePress plugin which convert Chinese title to transliterate permalink.
downloads: null
homepage: https://github.com/viko16/vuepress-plugin-permalink-pinyin#readme
keywords:
- vuepress
- vuepress-plugin
- permalink
license: MIT License
maintainers: null
name: vuepress-plugin-permalink-pinyin
npm: https://www.npmjs.com/package/vuepress-plugin-permalink-pinyin
publisher:
  avatar: null
  email: 16viko@gmail.com
  name: null
  url: null
  username: viko16
repository: https://github.com/viko16/vuepress-plugin-permalink-pinyin
score: 0.6514166651618805
stars: 10
unstable: false
version: 1.1.0
watchers: 10

---

# vuepress-plugin-permalink-pinyin

[![npm](https://img.shields.io/npm/v/vuepress-plugin-permalink-pinyin.svg)](https://www.npmjs.com/package/vuepress-plugin-permalink-pinyin)
[![LICENSE](https://img.shields.io/npm/l/vuepress-plugin-permalink-pinyin.svg)](https://github.com/viko16/vuepress-plugin-permalink-pinyin/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/viko16/vuepress-plugin-permalink-pinyin.svg?theme=shields.io)](https://david-dm.org/viko16/vuepress-plugin-permalink-pinyin)


A VuePress plugin which convert Chinese title to transliterate permalink.

> `/你今日饮咗未.md` => `/ni-jin-ri-yin-zuo-wei.html`

## Installation

> Note: Work For VuePress 1.x.x

```bash
npm i vuepress-plugin-permalink-pinyin --save-dev
# or
yarn add vuepress-plugin-permalink-pinyin --dev
```

## Usage

Modify your `.vuepress/config.js` and add into the `plugins` option.

```js
plugins: ['permalink-pinyin']
```

## Options

Pass any options of [transliteration#slugify](https://github.com/dzcpy/transliteration#slugifystr-options)

```js
plugins: {
  'permalink-pinyin': {
    lowercase: true, // Converted into lowercase, default: true
    separator: '-' // Separator of the slug, default: '-'
  }
}
```

## Test

```bash
npm test
```

## Related Projects

- Hexo version: https://github.com/viko16/hexo-permalink-pinyin

## License

[MIT License](https://opensource.org/licenses/MIT) © [viko16](https://github.com/viko16)
