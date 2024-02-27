---
author:
  avatar: https://avatars.githubusercontent.com/u/13448091?v=4
  email: null
  name: seepine
  url: null
  username: weiquanju
bugs: https://github.com/weiquanju/vuepress-plugin-demo-code-block/issues
category: plugins
date: '2022-05-04T14:37:27.670Z'
deprecated: false
description: Vuepress2 plugin for demo block support vue3.
downloads: null
homepage: https://github.com/weiquanju/vuepress-plugin-demo-code-block/issues
keywords:
- documentation
- plugin
- vue
- vue3
- vuepress
- vuepress2
- demo
- block
- code
- tsx
license: false
maintainers: null
name: vuepress-plugin-demo-code-block
npm: https://www.npmjs.com/package/vuepress-plugin-demo-code-block
publisher:
  avatar: null
  email: anbine@qq.com
  name: null
  url: null
  username: anbine
repository: https://github.com/weiquanju/vuepress-plugin-demo-code-block
score: 0.397413907578827
stars: 2
unstable: false
version: 1.0.7
watchers: 2

---

## vuepress plugin demo code block

支持：vuepress2，vue3，github在线编辑，tsx

support: vuepress2, vue3, github edit online, tsx

## 安装 Install

```shell
npm i -D vuepress-plugin-demo-code-block

yarn add -D vuepress-plugin-demo-code-block

pnpm add -D vuepress-plugin-demo-code-block
```

## 配置 Config

配置文件： `docs/.vuepress/config.ts`

Configuration file: `docs/.vuepress/config.ts`

```ts
import { defineUserConfig } from 'vuepress'
import path from 'path'
import demoBlock from 'vuepress-plugin-demo-code-block'

export default defineUserConfig({
  plugins: [
    [
      demoBlock({
        componentsDir: path.resolve(__dirname, './../examples'), // 组件目录路径, Component directory path
        githubEditLinkPath: 'https://github.com/weiquanju/v-el-table-doc/edit/main/docs/examples/', // github编辑地址路径, the path of github edit link 
      })
    ]
  ],
})
```


## 使用 Usage

路径: `docs/examples` 里创建`Hello.vue`

Create `Hello.vue` in  path of `docs/examples` 

```vue
<template>
    <h1>Hello world!</h1>
</template>
```

```md
:::demo
Hello
:::
```

### 截图 Screenshot

![Hello.vue example show](https://github.com/weiquanju/vuepress-plugin-demo-code-block/raw/main/.docs/hello.png?1)

![Hello.vue example show](https://github.com/weiquanju/vuepress-plugin-demo-code-block/raw/main/.docs/hello_open.png?1)

## VuePress with tsx

项目配置参考如下

The project configuration reference is as follows

`tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "strict": true,
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "isolatedModules": true,
    "jsx": "preserve",
    "typeRoots": [
      "node_modules/@types"
    ],
    "types": [
      "vite/client",
      "@vuepress/client/types"
    ],
    "lib": [
      "esnext",
      "scripthost"
    ],
  },
  "include": [
    "docs/examples/**/*"
  ]
}
```

`docs/.vuepress/vite.config.ts`

```ts

import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx({
      transformOn: true,
    }),
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
})

```

`docs/.vuepress/config.ts`

```ts
import { defineUserConfig, defaultTheme } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import path from 'path'
import demoBlock from './plugin/vuepress-plugin-demo-block/src'

export default defineUserConfig({
  ...
  bundler: viteBundler({
    viteOptions: {
      configFile: path.resolve(__dirname, './vite.config.ts'),
      // envFile?: false;F
    },
    vuePluginOptions: {},
  })
  ...
})
```