---
author:
  avatar: https://avatars.githubusercontent.com/u/36102904?v=4
  email: bougie.liu@qq.com
  name: Bougie
  url: https://www.bougieblog.cn
  username: bougieL
bugs: https://github.com/bougieL/vuepress-plugin-rss/issues
category: plugin
date: '2020-04-13T10:24:03.877Z'
deprecated: false
description: Generate `rss.xml` file with `content:encoded`
downloads: null
homepage: https://github.com/bougieL/vuepress-plugin-rss
keywords:
- vuepress
- plugin
- rss
- feed
license: MIT License
maintainers: null
name: vuepress-plugin-rss-feed
npm: https://www.npmjs.com/package/vuepress-plugin-rss-feed
publisher:
  avatar: null
  email: 1742070326@qq.com
  name: null
  url: null
  username: bougie
repository: https://github.com/bougieL/vuepress-plugin-rss
score: 0.2916764078611896
stars: 0
unstable: false
version: 1.0.0
watchers: 0

---

# vuepress-plugin-rss-feed

Generate `rss.xml` file with `content:encoded`

## Usage

```bash
npm i vuepress-plugin-rss-feed -D
```

Add plugin to your `.vuepress/config.js`

```js
module.exports = {
  plugins: [
    // other plugins
    [
      'rss-feed',
      {
        username: 'Bougie',
        hostname: 'https://www.bougieblog.cn',
        selector: '.content__post', // extract content to content:encoded
        count: 10,
        filter: (page) => /^blog/.test(page.relativePath),
      },
    ],
  ],
}
```

## License

[MIT](./LICENSE)
