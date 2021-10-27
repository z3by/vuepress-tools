---
author:
  avatar: https://avatars.githubusercontent.com/u/4708070?v=4
  email: thomas@venturini.codes
  name: Thomas Venturini
  url: null
  username: tjventurini
bugs: https://github.com/tjventurini/vuepress-plugin-zengarden-publish/issues
category: plugin
date: '2020-05-05T16:30:07.794Z'
deprecated: false
description: Adds a publish flag to all pages.
downloads: null
homepage: https://github.com/tjventurini/vuepress-plugin-zengarden-publish#readme
keywords:
- vuepress
- vuepress-plugin
- zengarden
license: MIT License
maintainers: null
name: vuepress-plugin-zengarden-publish
npm: https://www.npmjs.com/package/vuepress-plugin-zengarden-publish
publisher:
  avatar: null
  email: thomas@venturini.codes
  name: null
  url: null
  username: tjventurini
repository: https://github.com/tjventurini/vuepress-plugin-zengarden-publish
score: 0.3579495622312181
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

# VuePress Plugin Zengarden Publish

Adds the `publish` attribute to the frontmatter of each page.

## Installation

```bash
npm install vuepress-plugin-zengarden-publish
# or
yarn add vuepress-plugin-zengarden-publish
```

## Usage

In your `config.js` or `index.js` files of your VuePress configuration, add the following.

```javascript
['zengarden-publish']
```

Now you should have the `publish` flag set in the `frontmatter` of all your pages. 

You can set the `publish` flag your self, the plugin will not overwrite the value if it is already set.

## Configuration

Per default we use the `date` attribute of a pages `frontmatter` to determine if a page should be published. If you need to change this behavior, then you can just overwrite the used function like so.

```javascript
['zengarden-publish', {
    publish: function(page) {
        // this is the default logic used
        return dayjs().format('YYYY-MM-DD') >= dayjs(page.frontmatter.date).format('YYYY-MM-DD')
    }
}]
```

You will get the full page object so the setup is very flexible. Also as you can see.


