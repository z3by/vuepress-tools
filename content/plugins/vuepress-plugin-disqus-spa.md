---
author:
  avatar: https://avatars.githubusercontent.com/u/4111136?v=4
  email: null
  name: Azamat Sarsenbayev
  url: null
  username: azasar
bugs: https://github.com/azasar/vuepress-plugin-disqus/issues
category: plugin
date: '2020-06-09T07:27:26.133Z'
deprecated: false
description: Register a global Disqus component to add to your layouts for SPA apps
downloads: null
homepage: https://github.com/azasar/vuepress-plugin-disqus#readme
keywords:
- vuepress
- plugin
- disqus
license: MIT License
maintainers: null
name: vuepress-plugin-disqus-spa
npm: https://www.npmjs.com/package/vuepress-plugin-disqus-spa
publisher:
  avatar: null
  email: sarsenbayev.a.s@gmail.com
  name: null
  url: null
  username: azasar
repository: https://github.com/azasar/vuepress-plugin-disqus
score: 0.323738734443649
stars: 0
unstable: true
version: 0.1.1
watchers: 0

---

# Vuepress Plugin Disqus
🔌 Register a global `<Disqus />` component to add to your layouts.

This plugins is a vuepress wrapper of [vue-disqus](https://github.com/ktquez/vue-disqus).

## Installation

```bash
npm i vuepress-plugin-disqus -D
```

## Register the plugin

```js
plugins: {
    'disqus': { /* options */ }
},
```

Please check out [Config](#config) for options.

Note that Vuepress allows multiple syntaxes to register plugins. See [Vuepress documentation on how to use a plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html) for more information.

## Use the Disqus component

This plugin present a out-of-box SSR-friendly component  - `<Disqus/>`. Just put it wherever you like, and Disqus will be embedded in the right place. For example:

```html
<template>
  <div>
    <Content />
    <!-- ...... -->
    <Disqus />
  </div>
</template>
```
Or you can simply put it in your `.md` file.
```markdown
## Hello VuePress

This is a demo.

<Disqus/>
```

You can use all the props and events defined by [vue-disqus](https://github.com/ktquez/vue-disqus).

Prop            | Data Type  | required  | Description
--------------- | ---------- | --------- | -----------
`shortname`     | String     | true      | Your disqus shortname.
`url`           | String     | false     | Your URL where Disqus is present
`title`         | String     | false     | Title that identifies the current page.
`identifier`    | String     | false     | The page's unique identifier
`sso_config`    | Object     | false     | Single sign-on (SSO)
`api_key`       | String     | false     | Your API key disqus
`remote_auth_s3`| String     | false     | implementation with Laravel/PHP
`language`      | String     | false     | Language overrides

## Config 

See the table above. All the props are also configuration options for this plugin. They'll be passed to every `Disqus` component. You're still able to override it by passing down props. Note that if you don't set language, it'll use VuePress's $lang as default language.

There's still one option available - `name` which specifies the name of the disqus component. Defaults to: `Disqus`.

