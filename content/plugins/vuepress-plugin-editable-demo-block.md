---
author:
  avatar: https://avatars.githubusercontent.com/u/20736207?v=4
  email: null
  name: Clfeng
  url: null
  username: clfeng
bugs: https://github.com/clfeng/vuepress-editable-demo-block/issues
category: plugin
date: '2021-07-04T14:44:49.981Z'
deprecated: false
description: Editable demo and code plugin for vuepress
downloads: null
homepage: https://github.com/clfeng/vuepress-editable-demo-block#readme
keywords:
- vue
- code
- demo
- vuepress
- editable-demo-code
- documentation
license: MIT License
maintainers: null
name: vuepress-plugin-editable-demo-block
npm: https://www.npmjs.com/package/vuepress-plugin-editable-demo-block
publisher:
  avatar: null
  email: 18813292005@163.com
  name: null
  url: null
  username: clfeng
repository: https://github.com/clfeng/vuepress-editable-demo-block
score: 0.4903162916447129
stars: 3
unstable: true
version: 0.1.1
watchers: 3

---

# vuepress-plugin-editable-demo-block
The plugin is used to help you add vue examples when writing a document. 
Using this plugin, your users can easily modify your examples.
With the editable functions your user can understand your example better.

## Feature
- display code and examples
- real-time rendering
- only support vue

![examples](./examples.gif)


### Install
```
// npm 
npm i vuepress-plugin-editable-demo-block

// yarn 
yarn add vuepress-plugin-editable-demo-block
```

### Usage 
```
// docs/.vuepress/config.js
module.exports = {
  plugins: [
    require('vuepress-plugin-editable-demo-block'),
  ],
}
```

### custome editable-demo-block component's behavior
```
// docs/.vuepress/enhanceApp.js
export default ({
  Vue, 
}) => {
  Vue.prototype.$editableDemoBlockCfg = {
    runSuccessTip: function () { // render suncess tip function
      console.log('run success');
    },
    runFailTip: function () { // // render fail tip function
      this.$message.error('run fail');
    },
    hideText: 'hide code', // tip text when code is hide
    showText: 'show code', // tip text when code is show
  }
}
```

### Start
Write the following code in the Markdown file:

```
::: demo 
\``` <= delete start backslash
<template>
  <div class="examples-button">
    <p>{{ explain }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      explain: 'display button component'
    }
  }
}
</script>
\``` <= delete start backslash
:::

```

### run examples
`yarn install`

`cd examples && yarn install && yarn dev`

