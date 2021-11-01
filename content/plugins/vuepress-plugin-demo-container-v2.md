---
author:
  avatar: https://avatars.githubusercontent.com/u/8675871?v=4
  email: null
  name: JianhuiChen, WaycoWei
  url: null
  username: waycowei
bugs: https://github.com/waycowei/vuepress-plugin-demo-container-v2/issues
category: plugin
date: '2021-06-07T02:03:02.143Z'
deprecated: false
description: Vuepress plugin for demo block.
downloads: null
homepage: https://github.com/waycowei/vuepress-plugin-demo-container-v2#readme
keywords:
- documentation
- plugin
- vue
- vuepress
- demo
- block
- componsition
- componsition-api
license: MIT License
maintainers: null
name: vuepress-plugin-demo-container-v2
npm: https://www.npmjs.com/package/vuepress-plugin-demo-container-v2
publisher:
  avatar: null
  email: weikai@hrvc.vip
  name: null
  url: null
  username: waycowei
repository: https://github.com/waycowei/vuepress-plugin-demo-container-v2
score: 0.50913543348943
stars: 3
unstable: false
version: 2.3.4
watchers: 3

---

# Introduction

[中文 README](https://github.com/waycowei/vuepress-plugin-demo-container-v2/blob/master/README.zh-CN.md)

`Demo Container V2` is a `Vuepress-based` plug-in, which can help you add `Vue` examples when writing documents.

It can help you:
1. Write an example to automatically generate component examples and code examples by the custom `::: demo` syntax;
2. Support the `import` syntax in code example;

# Install
Use `yarn`:
```bash
yarn add vuepress-plugin-demo-container-v2 -D
```
Or `npm`:
```bash
npm i vuepress-plugin-demo-container-v2 -D
```

# Usage
Open the `.vuepress/config.js` file, and then reference the plugin in the appropriate location:

```js
module.exports = {
  plugins: ['demo-container-v2']
}
```

Write the following code in the Markdown file:

```html
::: demo
```vue
<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message" placeholder="Input something..."/>
  </div>
</template>
<script>
  import { ref } from 'vue-demi'
  export default {
    setup () {
      const message = ref('Hello Here')

      return {
        message
      }
    }
  }
</script>
` ``
<!-- ignore space in the previous line -->
:::
```

[View full documentation](https://waycowei.github.io/vuepress-plugin-demo-container-v2/zh/)

# Thanks
This project is heavily inspired by the [md-loader](https://github.com/element-plus/element-plus/tree/dev/website/md-loader) of ElemeFE team.

# Contributors
<p>
  <a href="https://github.com/calebman" target="_blank">
    <img src="https://avatars0.githubusercontent.com/u/27751088" width="54px" height="54px" style="border-radius: 50%;" title="JianhuiChen" class="avatar-user avatar">
  </a>
  <a href="https://github.com/waycowei" target="_blank">
    <img src="https://avatars0.githubusercontent.com/u/8675871" width="54px" height="54px" style="border-radius: 50%;" title="WaycoWei" class="avatar-user avatar">
  </a>
</p>

# License

[MIT License](https://github.com/waycowei/vuepress-plugin-demo-container-v2/blob/master/LICENSE) @2020-PRESENT [Wayco Wei](https://github.com/waycowei)
