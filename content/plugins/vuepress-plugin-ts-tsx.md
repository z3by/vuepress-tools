---
author:
  avatar: https://avatars.githubusercontent.com/u/24647774?v=4
  email: null
  name: Tsz Lam
  url: null
  username: tlyau62
bugs: https://github.com/tlyau62/vuepress-plugin-ts-tsx/issues
category: plugins
date: '2021-10-18T09:00:24.909Z'
deprecated: false
description: A vuepress plugin that enable ts and tsx support.
downloads: null
homepage: https://github.com/tlyau62/vuepress-plugin-ts-tsx#readme
keywords: null
license: MIT License
maintainers: null
name: vuepress-plugin-ts-tsx
npm: https://www.npmjs.com/package/vuepress-plugin-ts-tsx
publisher:
  avatar: null
  email: yaurfu@gmail.com
  name: null
  url: null
  username: tlyau62
repository: https://github.com/tlyau62/vuepress-plugin-ts-tsx
score: 0.5303019217887961
stars: 0
unstable: true
version: 0.2.0
watchers: 0

---

# vuepress-plugin-ts-tsx

A vuepress plugin that enable ts and tsx support.

## Setup

### Install

```
npm i vuepress-plugin-ts-tsx
```

### Config

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    // ...
    [
      'vuepress-plugin-ts-tsx',
      {
        // Plugin options
        tsLoaderOptions(opts) {
          return {
            ...opts,
            transpileOnly: false,
          };
        },
      },
    ],

    // or simply ['vuepress-plugin-ts-tsx']
  ],
};
```

## Plugin options

### tsLoaderOptions

- **Type**: `(opts: Partial<TsLoader.Options>) => Partial<TsLoader.Options>`

- **Description**

  The argument `opts` is the default ts loader options. By default, the opts will be merged with `{transpileOnly: true}`. You may change it by returning a new option. Here is an example.

  ```ts
  const tsLoaderOptions = (opts) => ({
    ...opts,
    transpileOnly: false,
  });
  ```

### babelLoaderOptions

- **Type**: `(opts: Config.LoaderOptions): Config.LoaderOptions`

- **Description**

  The argument `opts` is the default babel loader options. By default, the opts will be merged with `{configFile: true}`. You may change it by returning a new option. Here is an example.

  ```ts
  const babelLoaderOptions = (opts) => ({
    ...opts,
    configFile: false,
  });
  ```

### chainWebpack

- **Type**: `(config: Config): void`

- **Description**

  The chain webpack function. You may add your customized chain webpack function.

## TODO

2. add support on enhanceApp.ts
3. add cache loader
