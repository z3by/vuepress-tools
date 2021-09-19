---
author:
  avatar: https://avatars.githubusercontent.com/u/17308208?v=4
  email: saltbo@foxmail.com
  name: saltbo
  url: null
  username: saltbo
bugs: https://github.com/saltbo/vuepress-plugin-disqusjs/issues
category: plugin
date: '2020-05-20T13:33:48.223Z'
deprecated: false
description: "# Vuepress Plugin Disqusjs \U0001F50C Register a global `<Disqusjs />`\
  \ component to add to your layouts."
downloads: null
homepage: https://github.com/saltbo/vuepress-plugin-disqusjs#readme
keywords: null
license: false
maintainers: null
name: vuepress-plugin-disqusjs
npm: https://www.npmjs.com/package/vuepress-plugin-disqusjs
publisher:
  avatar: null
  email: saltbo@foxmail.com
  name: null
  url: null
  username: saltbo
repository: https://github.com/saltbo/vuepress-plugin-disqusjs
score: 0.40689523139804795
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

# Vuepress Plugin Disqusjs
🔌 Register a global `<DisqusJS />` component to add to your layouts.

This plugins is a vuepress wrapper of [DisqusJS](https://github.com/SukkaW/DisqusJS).

## Installation

```bash
# npm
npm i vuepress-plugin-disqusjs -D

# yarn
yarn add vuepress-plugin-disqusjs
```

## Register the plugin

```js
plugins: {
    'disqusjs': { /* options */ }
},

```

Please check out [Config](#config) for options.

Note that Vuepress allows multiple syntaxes to register plugins. See [Vuepress documentation on how to use a plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html) for more information.

## Use the Disqusjs component

This plugin present a out-of-box SSR-friendly component  - `<Disqusjs/>`. Just put it wherever you like, and Disqus will be embedded in the right place. For example:

```html
<template>
  <div>
    <Content />
    <!-- ...... -->
    <DisqusJS />
  </div>
</template>
```
Or you can simply put it in your `.md` file.
```markdown
## Hello VuePress

This is a demo.

<Disqus/>
```

You can use all the props and events defined by [DisqusJS](https://github.com/SukkaW/DisqusJS).

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

See the table above. All the props are also configuration options for this plugin. They'll be passed to every `Disqusjs` component. You're still able to override it by passing down props. Note that if you don't set language, it'll use VuePress's $lang as default language.

There's still one option available - `name` which specifies the name of the disqus component. Defaults to: `DisqusJS`.
