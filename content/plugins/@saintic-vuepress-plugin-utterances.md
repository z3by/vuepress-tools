---
author:
  avatar: https://avatars.githubusercontent.com/u/10270930?v=4
  email: me@tcw.im
  name: staugur
  url: null
  username: staugur
bugs: https://github.com/staugur/vuepress-plugin-utterances/issues
category: plugin
date: '2020-11-04T09:04:19.224Z'
deprecated: false
description: A simple comments plugin for vuepress
downloads: null
homepage: https://github.com/staugur/vuepress-plugin-utterances
keywords:
- comments
- vuepress
license: BSD 3-Clause "New" or "Revised" License
maintainers: null
name: '@saintic/vuepress-plugin-utterances'
npm: https://www.npmjs.com/package/%40saintic%2Fvuepress-plugin-utterances
publisher:
  avatar: null
  email: me@tcw.im
  name: null
  url: null
  username: staugur
repository: https://github.com/staugur/vuepress-plugin-utterances
score: 0.43909479248328653
stars: 4
unstable: true
version: 0.2.0
watchers: 4

---

# vuepress-plugin-utterances

A simple comments plugin for vuepress

> English | [中文](README-cn.md)

---

> Refer to [utterances](https://utteranc.es/) implemented by [@Timi-design/vuepress-plugin-comments](https://github.com/Timi-design/vuepress-plugin-timi/tree/master/vuepress-plugin-comments), also supports [Beaudar](https://beaudar.lipk.org/)
>
> ps: The level is limited, there may be some bugs that cannot be solved, use it with caution~~
>
> ps: Beaudar can be regarded as the Chinese version of Utterances

## Install

With `npm`:

```bash
npm install --save @saintic/vuepress-plugin-utterances
```

With `yarn`:

```bash
yarn add @saintic/vuepress-plugin-utterances -D
```

With `cnpm`:

```bash
cnpm i --save @saintic/vuepress-plugin-utterances
```

## Usage

### Name

- **As plugin**: `@saintic/vuepress-plugin-utterances`

- **As component**: `Comments` (theme development using <- I did not test)

### Options

> Please learn about [Utterances](https://utteranc.es), a GitHub issue based review system.

|  Option name | Required|  Utterances configuration|  Default value |
| ------------ | -------|---------------------------| ---------------|
|  repo        |   yes  |  GitHub Repository        | \            |
|  theme       |   no   |  Theme value              | github-light |
|  issueTerm   |   no   |  Blog Post ↔️ Issue Mapping| pathname     |
| defaultShowComment| no|  Show comments by default | true         |
| service |no|Service provider: utterances/[beaudar](https://beaudar.lipk.org)|utterances|

### Page `frontmatter`

> **showComment** {Boolean}: A single post page display comments

- If the `defaultShowComment` is true (i.e. the default),
  all article details pages will display comments by default.

  Set this `showComment` to false to turn off comments on an article.

- If the `defaultShowComment` is false, all article details pages will
  not be displayed by default.

  Set this `showComment` to true, you can open comments on an article separately.

PS: by the way, comments are not allowed on the index page(/).

### Examples

> Please refer to [how vuexpress uses plugins first](https://vuepress.vuejs.org/plugin/using-a-plugin.html)

- Babel Style

  ```javascript
  module.exports = {
    plugins: [
      [
       '@saintic/utterances',
        {
          repo: 'staugur/staugur.github.io',
          theme: 'github-light',
          issueTerm: 'pathname'
        }
      ]
    ]
  }
  ```

- Object Style

  ```javascript
  module.exports = {
    plugins: {
      '@saintic/utterances': {
        repo: 'staugur/staugur.github.io',
        defaultShowComment: false
      }
    }
  }
  ```

## Demo site

- [My blog](https://tcw.im)
