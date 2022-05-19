---
author:
  avatar: https://avatars.githubusercontent.com/u/1732851?v=4
  email: null
  name: null
  url: null
  username: e8johan
bugs: https://github.com/e8johan/vuepress-plugin-pdf-export/issues
category: plugins
date: '2022-05-13T08:12:04.180Z'
deprecated: false
description: Vuepress plugin for exporting site as PDF
downloads: null
homepage: https://github.com/e8johan/vuepress-plugin-pdf-export#readme
keywords: null
license: MIT License
maintainers: null
name: '@e8johan/vuepress-plugin-pdf-export'
npm: https://www.npmjs.com/package/%40e8johan%2Fvuepress-plugin-pdf-export
publisher:
  avatar: null
  email: e8johan@gmail.com
  name: null
  url: null
  username: e8johan
repository: https://github.com/e8johan/vuepress-plugin-pdf-export
score: 0.4523140732258486
stars: 0
unstable: false
version: 1.2.0
watchers: 0

---

# @e8johan/vuepress-plugin-pdf-export

Vuepress plugin for exporting site as PDF

This is a fork of @snowdog/vuepress-plugin-pdf-export. All changes are available in a PR to the upstream repository. Use this package at your own peril.

## Features
- Exports whole Vuepress based page as a single PDF file
- Applies styles to hide UI elements like navigation or sidebar
- Doesn't require other runtimes like Java to operate
- Designed to work well in headless environments like CI runners

## Config options
- `theme` - theme name (default `@vuepress/default`)
- `sorter` - function for changing pages order (default `false`)
- `filter` - function for filtering the pages (default `false`)
- `outputFileName` - name of output file (default `site.pdf`)
- `puppeteerLaunchOptions` - [Puppeteer launch options object](https://github.com/puppeteer/puppeteer/blob/v2.1.1/docs/api.md#puppeteerlaunchoptions) (default `{}`)
- `pageOptions` - [Puppeteer page formatting options object](https://github.com/puppeteer/puppeteer/blob/v2.1.1/docs/api.md#pagepdfoptions) (default `{format: 'A4'}`)

### Usage

Using this plugin:

``` js
// in .vuepress/config.js
module.exports = {
  plugins: ['@snowdog/vuepress-plugin-pdf-export']
}
```

Then run:

``` bash
vuepress export [path/to/your/docs]
```

### Tips
To run this plugin on Gitlab CI you may want to run Chrome with `no-sandbox` flag. [Details](https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md#setting-up-chrome-linux-sandbox)

```js
module.exports = {
  plugins: [
    ['@snowdog/vuepress-plugin-pdf-export', {
      puppeteerLaunchOptions: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    }]
  ]
}
```
