---
author:
  avatar: https://avatars.githubusercontent.com/u/33430560?v=4
  email: null
  name: null
  url: null
  username: Aphorica
bugs: https://github.com/Aphorica/vuepress-plugin-headertags/issues
category: plugin
date: '2020-04-10T19:56:58.912Z'
deprecated: false
description: add user defined header tags to vuepress page
downloads: null
homepage: https://github.com/Aphorica/vuepress-plugin-headertags#readme
keywords:
- vue
- vuepress
- generator
license: false
maintainers: null
name: '@aphorica/vuepress-plugin-headertags'
npm: https://www.npmjs.com/package/%40aphorica%2Fvuepress-plugin-headertags
publisher:
  avatar: null
  email: gbergeraph@gmail.com
  name: null
  url: null
  username: rickbsgu
repository: https://github.com/Aphorica/vuepress-plugin-headertags
score: 0.3575009441712181
stars: 1
unstable: false
version: 1.0.1
watchers: 1

---

# vuepress-plugin-headertags

> plugin for vuepress to add header tags

Adds specified header tags to rendered pages

## Rationale
Had a use case where I need to add headers to a page.  There is a somewhat easy way to add headers to all pages using the 'head' tag in the .vuepress/config.js file, but no easy way to tune it for specific pages.

You will need to fork or copy this repo and make modifications to your copy to add tuning code.  For an example of how this is done, look at this plugin: [](vuepress-plugin-netlifycms).  Look in the 'HeaderTags.vue' to see how the action is filtered to only the main ("/") page.

## Install

```
yarn add vuepress-plugin-headertags -D
```

(Note the __-D__ is _very_ important...)

## Usage
In .vuepress/config.js:
```
module.exports = {
  plugins: [
    [
      'vuepress-plugin-headerTags',
      {
        headerTags: ['<script src="somewhere.js"></script>',
                     '<link rel="somelink"></link>',
                      (etc)
                      ]
      }
    ]
  ]
}
```
