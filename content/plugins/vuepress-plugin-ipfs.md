---
author:
  avatar: https://avatars.githubusercontent.com/u/106938?v=4
  email: null
  name: '@cwaring'
  url: null
  username: cwaring
bugs: https://github.com/cwaring/vuepress-plugin-ipfs/issues
category: plugin
date: '2020-05-21T15:52:08.531Z'
deprecated: false
description: Host a VuePress project on IPFS
downloads: null
homepage: https://github.com/cwaring/vuepress-plugin-ipfs#readme
keywords:
- ipfs
- vuepress
- plugin
license: MIT License
maintainers: null
name: vuepress-plugin-ipfs
npm: https://www.npmjs.com/package/vuepress-plugin-ipfs
publisher:
  avatar: null
  email: chris@wwaves.co
  name: null
  url: null
  username: cwaring
repository: https://github.com/cwaring/vuepress-plugin-ipfs
score: 0.2497385142857657
stars: 11
unstable: false
version: 1.0.2
watchers: 11

---

# VuePress Plugin IPFS

![](https://user-images.githubusercontent.com/106938/70317123-0b3abc80-1815-11ea-859a-eb91c0ab4a81.png)

> Convert a [VuePress](https://vuepress.vuejs.org/) 1.x bundle into relative paths making it suitable for hosting on IPFS.

## Usage

```
npm i -D vuepress-plugin-ipfs
```

### Setup

Add to `config.js` or `theme/index.js`

```
module.exports = {
  plugins: [
    ['vuepress-plugin-ipfs'],
  ]
}
```

Once included this this plugin will post process all generated pages and CSS files to use relative asset paths during a production build.

## \$withBase - Base URL helper

Sites hosted on IPFS will be accessed via a variable depth so it is important to use relative paths for assets wherever possible, however there are certain scenarios where this is not viable due to components being included on multiple pages (such as headers/footers) or when asset paths are programmatically included.

If your site is accessed via an IPFS gateway the `base` path will be computed to include the current IPFS gateway and CID. For example, `https://gateway.ipfs.io/ipfs/<CID>/`, then `base` will be configured to `"/ipfs/<CID>/"`. The same goes for any IPNS gateway paths.

Therefore it is best to use this built in helper method to wrap asset paths. `$withBase` (injected onto Vue’s prototype) to generate the correct path when accessed via the root domain or IPFS gateway:

```vue
<img :src="$withBase('/foo.png')" alt="foo">
```

> Tip: You can use the above syntax in theme components and Markdown files.

**💡If you have a `base` key set in `.vuepress/config.js` or `theme/index.js` you will need to remove it in order for this plugin to work correctly.**
