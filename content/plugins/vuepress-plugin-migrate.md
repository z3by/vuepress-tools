---
author:
  avatar: https://avatars.githubusercontent.com/u/48539483?v=4
  email: 1700011071@pku.edu.cn
  name: Shigma
  url: null
  username: shigma
bugs: https://github.com/vuepress-contrib/vuepress-plugin-migrate/issues
category: plugin
date: '2019-03-14T09:27:40.429Z'
deprecated: false
description: A VuePress plugin which migrates a website to VuePress.
downloads: null
homepage: https://github.com/vuepress-contrib/vuepress-plugin-migrate#readme
keywords:
- vuepress
- vuepress-plugin
- migrate
- migration
- website
license: MIT License
maintainers: null
name: vuepress-plugin-migrate
npm: https://www.npmjs.com/package/vuepress-plugin-migrate
publisher:
  avatar: null
  email: 1700011071@pku.edu.cn
  name: null
  url: null
  username: shigma
repository: https://github.com/vuepress-contrib/vuepress-plugin-migrate
score: 0.1779040048930717
stars: 5
unstable: false
version: 1.0.3
watchers: 5

---

# [vuepress-plugin-migrate](https://vuepress.github.io/plugins/migrate.html)

[![npm](https://img.shields.io/npm/v/vuepress-plugin-migrate.svg)](https://www.npmjs.com/package/vuepress-plugin-migrate)

A [VuePress](https://vuepress.vuejs.org/) plugin which migrates a website to VuePress.

## CLI Commands

- **download:** crawl pages from the source site and store them in a local folder.
- **convert:** convert local HTML files to a markdown files and output them.
- **migrate:** execute both _download_ and _convert_ command in sequence.

## Options

### targetDir

- **type:** `string`
- **default:** `'_posts'`

The directory for generated markdown files.

### downloadDir

- **type:** `string`
- **default:** `'.vuepress/downloads'`

The directory for downloaded HTMLs.

### maxConcurrentTasks

- **type:** `number`
- **default:** `10`

The maximum number of concurrent downloads allowed.

### forceDownload

- **type:** `boolean`
- **default:** `false`

Whether to force download a `.html` file when it already exists.

### forceConvert

- **type:** `boolean`
- **default:** `false`

Whether to force overwrite a `.md` when it already exists.

### sitemap

- **type:** `string`
- **default:** `undefined`

The sitemap URL for the source website.

### getFileName

- **type:** `(url: string) => string`
- **default:** `url => String(++index)`

The name of the file to save as. If a falsy value is returned, the corresponding file is not downloaded.

### parseHTML

- **type:** `($: CheerioElement, render: ($: CheerioElement) => string) => ParsedResult`
- **default:** `undefined`

Generates a function corresponding to the `ParsedResult` object from the crawled HTML. A `ParsedResult` is an object with the following properties:

```ts
interface ParsedResult {
  frontmatter?: any
  filename?: string
  content?: string
}
```

## Contribution

Contribution Welcome!
