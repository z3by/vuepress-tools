---
author:
  avatar: https://private-avatars.githubusercontent.com/u/19966190?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU5MjAsIm5iZiI6MTczNDY1NDcyMCwicGF0aCI6Ii91LzE5OTY2MTkwIn0.f9unMWSfl6RvGAngVPDL3FA9WfZZZcrqWCSHgCqUAiI&v=4
  email: contact@paulbarre.co
  name: "Paul Barr\xE9"
  url: null
  username: paulbarre
bugs: https://github.com/paulbarre/vuepress-plugin-firebase/issues
category: plugins
date: '2019-11-08T09:29:03.196Z'
deprecated: false
description: Vuepress plugin to easily setup Firebase API
downloads: null
homepage: https://github.com/paulbarre/vuepress-plugin-firebase#readme
keywords:
- vue
- vuepress
- firebase
- firestore
- api
- plugin
license: GNU General Public License v3.0
maintainers: null
name: '@paulbarre/vuepress-plugin-firebase'
npm: https://www.npmjs.com/package/%40paulbarre%2Fvuepress-plugin-firebase
publisher:
  avatar: null
  email: contact@paulbarre.co
  name: null
  url: null
  username: paulbarre
repository: https://github.com/paulbarre/vuepress-plugin-firebase
score: 0.4206473411518313
stars: 0
unstable: true
version: 0.1.0
watchers: 0

---

# Vuepress Plugin to setup Firebase

## Introduction

This plugin installs [@paulbarre/vue-firebase](https://github.com/paulbarre/vue-firebase) package into your Vuepress application.

Check out its documentation to see how to configure this plugin, the options are exactly the same.

## Installation

Install the package into your Vue application:

```
npm i @paulbarre/vuepress-plugin-firebase @paulbarre/vue-firebase firebase
```

Next step needs to configure the plugin into your application. Edit your `.vuepress\config.js` file:

```js
module.exports = {
    plugins: [
        ...
        [
            '@paulbarre/firebase',
            {
                config: {
                    ...
                },
                firestore: {
                    ...
                }
            }
        ]
    ]
}
```

Check out [Vuepress' official documentation](https://vuepress.vuejs.org/plugin/using-a-plugin.html) to see how to setup a plugin.