---
author:
  avatar: https://avatars.githubusercontent.com/u/25154432?v=4
  email: me@yunyoujun.cn
  name: YunYouJun
  url: null
  username: yunyoujun
bugs: https://github.com/YunYouJun/vuepress-plugin-google-adsense/issues
category: plugin
date: '2021-02-15T08:24:01.073Z'
deprecated: false
description: google-adsense plugin for vuepress
downloads: null
homepage: https://github.com/YunYouJun/vuepress-plugin-google-adsense#readme
keywords:
- vuepress
- plugin
- google
- adsense
license: MIT License
maintainers: null
name: vuepress-plugin-google-adsense
npm: https://www.npmjs.com/package/vuepress-plugin-google-adsense
publisher:
  avatar: null
  email: me@yunyoujun.cn
  name: null
  url: null
  username: yunyoujun
repository: https://github.com/YunYouJun/vuepress-plugin-google-adsense
score: 0.5118921520339805
stars: 8
unstable: true
version: 0.2.1
watchers: 8

---

# vuepress-plugin-google-adsense

> [Google adsense](https://www.google.cn/adsense/) plugin for vuepress

Use google [automatic advertisement](https://support.google.com/adsense/answer/9261306) for your vuepress site.
(Follow Google Ad [Code Implementation Guide](https://support.google.com/adsense/answer/9274634))

[![npm](https://img.shields.io/npm/v/vuepress-plugin-google-adsense.svg)](https://www.npmjs.com/package/vuepress-plugin-google-adsense)
[![download](https://img.shields.io/npm/dt/vuepress-plugin-google-adsense.svg)](https://npmcharts.com/compare/vuepress-plugin-google-adsense?minimal=true)
[![GitHub license](https://img.shields.io/github/license/YunYouJun/vuepress-plugin-google-adsense.svg)](https://github.com/YunYouJun/vuepress-plugin-google-adsense/blob/master/LICENSE)

## Install

```sh
yarn add -D vuepress-plugin-google-adsense
# OR
# npm install -D vuepress-plugin-google-adsense
```

## Usage

```js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-google-adsense",
      {
        adClient: "ca-pub-2245427233262012", // replace it with your adClient
      },
    ],
  ],
};
```

More Info: [Using a Plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html)

If you don't have a google adsense account, you need register one [here](https://www.google.com/adsense/).

If you pass, google adsense will give you a script like this.

```html
<script
  data-ad-client="ca-pub-2245427233262012"
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
></script>
```

### Other method

In fact, when this plugin was developed, Google's automatic adsense code was not as simple as it is now.

And now, you can just insert the following code in `config.js` instead of this plugin.

```js
module.exports = {
  head: [
    [
      "script",
      {
        "data-ad-client": "ca-pub-2245427233262012",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],
  ],
};
```

> [Config Reference | Vupress](https://vuepress.vuejs.org/config/#head)

One advantage of plugin is that it can decide whether to show by [ctx.isProd](https://vuepress.vuejs.org/plugin/context-api.html#ctx-isprod).

## Options

| Name     | Type    | Required | Default   | Description                                          |
| -------- | ------- | -------- | --------- | ---------------------------------------------------- |
| adClient | string  | true     | undefined | Provide the Google Adsense ID to enable integration. |
| adsTxt   | boolean | false    | false     | Whether to generate ads.txt                          |

### adsTxt

If you enable it, the following content will be generated in `ads.txt`.

> [ads.txt Guide | Google AdSense](https://support.google.com/adsense/answer/7532444)

```txt
google.com, pub-2245427233262012, DIRECT, f08c47fec0942fa0
```
