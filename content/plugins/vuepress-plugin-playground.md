---
author:
  avatar: https://avatars.githubusercontent.com/u/8180186?v=4
  email: angusfu1126@qq.com
  name: wemlion
  url: null
  username: wemlion
bugs: https://github.com/AngusFu/vuepress-plugin-playground/issues
category: plugin
date: '2019-08-25T15:23:46.096Z'
deprecated: false
description: '--- sidebar: auto ---'
downloads: null
homepage: https://github.com/AngusFu/vuepress-plugin-playground#readme
keywords: null
license: false
maintainers: null
name: vuepress-plugin-playground
npm: https://www.npmjs.com/package/vuepress-plugin-playground
publisher:
  avatar: null
  email: angusfu1126@qq.com
  name: null
  url: null
  username: wemlion
repository: https://github.com/AngusFu/vuepress-plugin-playground
score: 0.32825774786583817
stars: 3
unstable: false
version: 2.0.0
watchers: 3

---

---
sidebar: auto
---

# Vuepress Playground Plugin

> No longer maintained. 本插件不再维护。 <br>
> SEE other: <br>
> - [vuepress-plugin-demo-code](https://github.com/BuptStEve/vuepress-plugin-demo-code)
> - [vuepress-plugin-demo-block](https://github.com/xiguaxigua/vuepress-plugin-demo-block)



[![npm status](https://img.shields.io/npm/v/vuepress-plugin-playground.svg)](https://www.npmjs.org/package/vuepress-plugin-playground)

::: warning
According to the [SFC Spec](https://vue-loader.vuejs.org/spec.html#script), "each \*.vue file can contain at most one \<script\> block at a time."

Please DO NOT use `<script>` tags in your markdown file for importing or declaring purposes.
:::

## Example

Take a look at [demo](https://github.com/AngusFu/webgl-guide-reading).

## Install

```bash
npm install -D vuepress-plugin-playground
```

```js
// in your .vuepress/config.js
module.exports = {
  plugins: [require('vuepress-plugin-playground')]
}
```

## Usage

You can write SFC-styled code in a [fenced code block](https://spec.commonmark.org/0.28/#fenced-code-blocks) with `lang` attr being `vue` or `html`.

Put a `@demo` annotation in your code block, and it would be treated as a real SFC file:

- <code>\`\`\`vue @demo</code>
- <code>\`\`\`html @demo</code>

<!-- prettier-ignore -->
~~~html {2}
```html @demo
<template>
  ...
</template>

<script>
  export default {}
</script>

<style>
  /* Your CSS code here */
</style>
```
~~~

Following is a counter example:

```html @demo {11}
<template>
  <button @click="count++" :class="$style.button">
    Clicked: {{ count + 1 }} times.
  </button>
</template>

<script>
  export default {
    data() {
      return { count: 1 }
    }
  }
</script>

<!-- Notice: styles are ALWAYS treated as scoped -->
<style>
  button {
    line-height: 2;
    padding: 0 1em;
  }
</style>

<style module scoped>
  .button {
    font-size: 14px;
    font-weight: bold;
  }
</style>
```

## Display Without Source Code

Use the `@effect-only` annotation ——

<!-- prettier-ignore -->
~~~html {1}
```html @effect-only
~~~

Here is the result ——

```html @effect-only
<template>
  <button @click="count++" :class="$style.button">
    Clicked: {{ count }} times.
  </button>
</template>

<script>
  export default {
    data() {
      return { count: 1 }
    }
  }
</script>

<!-- Notice: styles are ALWAYS treated as scoped -->
<style>
  button {
    line-height: 2;
    padding: 0 1em;
  }
</style>

<style module scoped>
  .button {
    font-size: 12px;
    font-weight: bold;
  }
</style>
```

## Import Code Snippets

You can import code snippets via following syntax:

```{1,2}
<<< @/.vuepress/snippets/test.vue @demo {1,2}
<<< @/.vuepress/snippets/test.vue @effect-only
```

(SEE [vuepress doc](https://vuepress.vuejs.org/guide/markdown.html#import-code-snippets))

Result:

<<< @/.vuepress/snippets/test.vue @demo {1,2}

<<< @/.vuepress/snippets/test.vue @effect-only

## Customize Styles

Define a gloabl component, `<CustomStage />` for example:

```xml
<template>
  <some-tag>
    <slot name="demo">
    <slot name="code">
  </some-tag>
</template>

<script>
  export default {
    props: ['source']
  }
</script>
```

::: tip props.source

- `source.vue`
- `source.template`
- `source.templateAttrs`
- `source.script`
- `source.scriptAttrs`
- `source.styleAttrs`
  :::

Then configure in your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      require('vuepress-plugin-playground'),
      {
        componentTag: 'CustomStage'
      }
    ]
  ]
}
```

## TODO

- [] Integration with codesandbox/codepen/jsbin
