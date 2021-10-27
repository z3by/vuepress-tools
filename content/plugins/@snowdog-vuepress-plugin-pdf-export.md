---
author:
  avatar: https://avatars.githubusercontent.com/u/1844298?v=4
  email: null
  name: null
  url: null
  username: SnowdogApps
bugs: https://github.com/SnowdogApps/vuepress-plugin-pdf-export/issues
category: plugin
date: '2020-07-03T09:26:02.207Z'
deprecated: false
description: Vuepress plugin for exporting site as PDF
downloads: null
homepage: https://github.com/SnowdogApps/vuepress-plugin-pdf-export#readme
keywords: null
license: MIT License
maintainers: null
name: '@snowdog/vuepress-plugin-pdf-export'
npm: https://www.npmjs.com/package/%40snowdog%2Fvuepress-plugin-pdf-export
publisher:
  avatar: null
  email: igloczek@gmail.com
  name: null
  url: null
  username: igloczek
repository: https://github.com/SnowdogApps/vuepress-plugin-pdf-export
score: 0.33800844062323404
stars: 19
unstable: false
version: 1.1.0
watchers: 19

---

# @snowdog/vuepress-plugin-pdf-export
Vuepress plugin for exporting site as PDF

## Features
- Exports whole Vuepress based page as a single PDF file
- Applies styles to hide UI elements like navigation or sidebar
- Doesn't require other runtimes like Java to operate
- Designed to work well in headless environments like CI runners

## Config options
- `theme` - theme name (default `@vuepress/default`)
- `sorter` - function for changing pages order (default `false`)
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
