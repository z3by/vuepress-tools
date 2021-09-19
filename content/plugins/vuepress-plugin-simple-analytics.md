---
author:
  avatar: https://avatars.githubusercontent.com/u/42113132?v=4
  email: null
  name: Simple Analytics
  url: null
  username: simpleanalytics
bugs: https://github.com/simpleanalytics/vuepress-plugin/issues
category: plugin
date: '2020-04-11T15:06:40.432Z'
deprecated: false
description: Script to collect analytics for Simple Analytics
downloads: null
homepage: https://simpleanalytics.com/
keywords:
- vue
- vuepress
- vuepress-plugin
- plugin
- simple analytics
- simple-analytics
- simpleanalytics
- analytics
license: false
maintainers: null
name: vuepress-plugin-simple-analytics
npm: https://www.npmjs.com/package/vuepress-plugin-simple-analytics
publisher:
  avatar: null
  email: npm.19301@simpleanalytics.io
  name: null
  url: null
  username: simpleanalytics
repository: https://github.com/simpleanalytics/vuepress-plugin
score: 0.27351577900515534
stars: 1
unstable: false
version: 1.0.3
watchers: 1

---

<a href="https://simpleanalytics.com/?ref=github.com/simpleanalytics/vuepress-plugin">
  <img src="https://assets.simpleanalytics.com/images/logos/logo-github-readme.png" alt="Simple Analytics logo" align="right" height="62" />
</a>

# VuePress plugin

[Simple Analytics](https://simpleanalytics.com) is a clean, simple, and privacy friendly analytics tool. Actionable data in a beautiful dashboard. It does [not use cookies](https://docs.simpleanalytics.com/what-we-collect) and you can [bypass ad blockers](https://docs.simpleanalytics.com/bypass-ad-blockers). Make sure [to signup](https://simpleanalytics.com) to get most value out of this plugin.

## Install

Just run this command to install Simple Analytics for [VuePress](https://vuepress.vuejs.org/):

```bash
npm install vuepress-plugin-simple-analytics --save-dev
```

## Add the plugin

Add the plugin to your plugins in `.vuepress/config.js`.

```js
module.exports = {
  plugins: ["vuepress-plugin-simple-analytics"]
};
```

### More features

We have more features like a [custom domain](https://docs.simpleanalytics.com/bypass-ad-blockers) to bypass ad-blockers, [events](https://docs.simpleanalytics.com/events), and [allow the collect from DNT users](https://docs.simpleanalytics.com/dnt). Events are enabled by default.

```js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-simple-analytics",
      {
        customDomain: "data.example.com", // You custom domain
        eventsGlobal: "sa_event", // The global events object for sa_event("click_button")
        skipDnt: true // When set to true you track the DNT users
      }
    ]
  ]
};
```
