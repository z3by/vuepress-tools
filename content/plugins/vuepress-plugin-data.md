---
author:
  avatar: https://avatars.githubusercontent.com/u/123952?v=4
  email: null
  name: Paul Salaets
  url: null
  username: psalaets
bugs: https://github.com/psalaets/vuepress-plugin-data/issues
category: plugin
date: '2020-04-30T22:39:02.186Z'
deprecated: false
description: Inject external data into a VuePress site
downloads: null
homepage: https://github.com/psalaets/vuepress-plugin-data
keywords:
- vuepress
- plugin
- data
license: MIT License
maintainers: null
name: vuepress-plugin-data
npm: https://www.npmjs.com/package/vuepress-plugin-data
publisher:
  avatar: null
  email: psalaets@gmail.com
  name: null
  url: null
  username: psalaets
repository: https://github.com/psalaets/vuepress-plugin-data
score: 0.6011611100876222
stars: 0
unstable: false
version: 2.0.0
watchers: 0

---

# vuepress-plugin-data

Inject external data into a VuePress site.

## Install

```bash
npm install -D vuepress-plugin-data

# or

yarn add -D vuepress-plugin-data
```

## Usage

### 1. Add plugin to your VuePress config

There are [multiple ways](https://vuepress.vuejs.org/plugin/using-a-plugin.html) to do this. Here is one way:

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    ['vuepress-plugin-data', {
      // plugin options go here, see next step
    }]
  ]
}
```

### 2. Specify the data

Specify the data in the plugin options as an array of key/value pairs.

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    ['vuepress-plugin-data', {
      data: [
        {
          key: 'count',
          // can be static value
          value: 5
        },
        {
          key: 'rando',
          // can be function
          value() {
            return Math.random();
          }
        },
        {
          key: 'speakers',
          // can be function that returns Promise
          value() {
            return axios.get('https://example.org/api/speakers')
              .then(response => response.data);
          }
        },
        {
          key: 'cities',
          // can be async function
          async value() {
            return await axios.get('https://example.org/api/cities')
              .then(response => response.data);
          }
        }
      ]
    }]
  ]
}
```

### 3. Access the data

Your data is accessible in the `vppData` object.

<details>

Data is injected using a [global mixin](https://vuejs.org/v2/guide/mixins.html#Global-Mixin):

```js
Vue.mixin({
  data() {
    return {
      vppData: {
        // Your data will be in here by the keys you specified
      }
    };
  }
});
```

This means all pages and components can access the data directly.
</details>

#### 3a. Access data in a page

```text
---
title: My Site
---

- {{vppData.count}}
- {{vppData.rando}}

<ul>
  <li v-for="city in vppData.cities" :key="city.id">
    {{city.name}}
  </li>
</ul>
```

#### 3b. Access data in a Vue component

```js
export default {
  computed: {
    speakerCount() {
      return this.vppData.speakers.length;
    }
  }
};
```

## API

### PluginOptions

```ts
interface PluginOptions {
  /**
   * Array of data specs.
   *
   * Each data spec is one piece of data to inject.
   */
  data: Array<DataSpec>;
}
```

### DataSpec

```ts
interface DataSpec {
  /**
   * The property name for this injected data.
   *
   * Must be unique across all other data specs.
   */
  key: string;
  /**
   * The value for this injected data.
   *
   * Any of
   *   - json serializable value
   *   - function that returns a json serializable value
   *   - function that returns a Promise that resolves to a json serializable value
   *   - async function that returns a json serializable value
   *   - Promise that resolves to a json serializable value
   */
  value: any;
}
```

## Caveats

- Because the data is in the initial js bundle, all data is eagerly loaded by your site.

## License

MIT
