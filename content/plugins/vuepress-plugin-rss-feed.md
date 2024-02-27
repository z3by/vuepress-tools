---
author:
  avatar: https://avatars.githubusercontent.com/u/36102904?v=4
  email: bougie.liu@qq.com
  name: Bougie
  url: https://www.bougieblog.cn
  username: bougieL
bugs: https://github.com/bougieL/vuepress-plugin-rss/issues
category: plugins
date: '2022-01-10T07:43:24.178Z'
deprecated: false
description: Generate `rss.xml` file with `content:encoded` for rss client pretty
  preview. Reference https://www.bougieblog.cn/rss.xml for example.
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
score: 0.38531069169429566
stars: 3
unstable: false
version: 1.0.1
watchers: 3

---

# vuepress-plugin-rss-feed

Generate `rss.xml` file with `content:encoded` for rss client pretty preview. Reference [rss.xml](./rss.xml) for example.

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
