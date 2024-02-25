---
author:
  avatar: https://avatars.githubusercontent.com/u/1549175?v=4
  email: null
  name: Shinichiro MORI
  url: null
  username: smori1983
bugs: https://github.com/smori1983/vuepress-plugin-git-info/issues
category: plugins
date: '2022-02-14T17:04:34.302Z'
deprecated: false
description: Integrate git information into vuepress site.
downloads: null
homepage: https://github.com/smori1983/vuepress-plugin-git-info#readme
keywords:
- vuepress
- vuepress-plugin
license: MIT License
maintainers: null
name: vuepress-plugin-git-info
npm: https://www.npmjs.com/package/vuepress-plugin-git-info
publisher:
  avatar: null
  email: shinichiro.mori.1983@gmail.com
  name: null
  url: null
  username: smori1983
repository: https://github.com/smori1983/vuepress-plugin-git-info
score: 0.4988847481163968
stars: 0
unstable: true
version: 0.1.0
watchers: 0

---

# vuepress-plugin-git-info

Provides UI components to display git information for each markdown page.


## Dependency

This plugin depends [`vuepress-plugin-git-log`](https://www.npmjs.com/package/vuepress-plugin-git-log) (defined as dependencies in `package.json`).


## Basic configuration

`.vuepress/config.js`

```
module.exports = {
  plugins: [
    ['git-log', {
      formatTime: (timestamp) => {
        return timestamp;
      },
      additionalArgs: '--no-merges',
      onlyFirstAndLastCommit: false,
    }],

    ['git-info', {
      useGlobalUi: <boolean>,
      usePageEmbed: <boolean>,
    }],
  ],
};
```


## Exclude options

### `excludePaths`

Used when exclude target pages by explicitly listing paths.

#### Example

```
module.exports = {
  ...
  plugins: [
    ['git-info', {
      useGlobalUi: true,
      excludePaths: [
        '/cat1/page2.html',
        '/cat2/page1.html',
      ],
    }],
  ],
};
```

### `excludeCallback`

Used when exclude target pages by arbitrary callback.

#### Example

```
module.exports = {
  ...
  plugins: [
    ['git-info', {
      usePageEmbed: true,
      excludeCallback: ($page) => {
        return $page.regularPath.indexOf('/cat3/') === 0;
      },
    }],
  ],
};
```


## Captures

### Global UI type

![](https://cdn.jsdelivr.net/gh/smori1983/vuepress-plugin-git-info@master/doc/capture.global_ui.png)

### Page embed type

![](https://cdn.jsdelivr.net/gh/smori1983/vuepress-plugin-git-info@master/doc/capture.page_embed.png)
