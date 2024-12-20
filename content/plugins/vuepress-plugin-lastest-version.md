---
author:
  avatar: https://private-avatars.githubusercontent.com/u/5666807?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU3NDAsIm5iZiI6MTczNDY1NDU0MCwicGF0aCI6Ii91LzU2NjY4MDcifQ.18Cq0iulzzpF0rDrdacD959cTylPJhRe1ykbC8wGjYE&v=4
  email: null
  name: D.Yang
  url: null
  username: yangyang0507
bugs: https://github.com/yangyang0507/vuepress-plugin-lastest-version/issues
category: plugins
date: '2021-08-04T02:50:10.544Z'
deprecated: false
description: Get lastest version of artifact for your document
downloads: null
homepage: https://github.com/yangyang0507/vuepress-plugin-lastest-version#readme
keywords:
- vue
- vuepress
- plugin
- vuepress-plugin
- artifact
- version
- artifact-version
license: MIT License
maintainers: null
name: vuepress-plugin-lastest-version
npm: https://www.npmjs.com/package/vuepress-plugin-lastest-version
publisher:
  avatar: null
  email: koyangslash@gmail.com
  name: null
  url: null
  username: dyang
repository: https://github.com/yangyang0507/vuepress-plugin-lastest-version
score: 0.43246685008291114
stars: 0
unstable: true
version: 0.2.6
watchers: 0

---

# vuepress-plugin-lastest-version

[![npm](https://img.shields.io/npm/v/vuepress-plugin-lastest-version?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-lastest-version) [![npm](https://img.shields.io/npm/dm/vuepress-plugin-lastest-version?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-lastest-version) [![GitHub](https://img.shields.io/github/license/yangyang0507/vuepress-plugin-lastest-version?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-lastest-version)

Get lastest version of artifact for your vuepress doc

## Install

```shell
yarn add -D vuepress-plugin-lastest-version
# OR npm install -D vuepress-plugin-lastest-version
```

## Use

```javascript
module.exports = {
  plugins: [
    "lastest-version",
    {
      repos: [
        {
          keywords: "mybatis-plus-latest-version",
          type: "maven",
          repo: "com.baomidou/mybatis-plus",
        }
      ]
    }
  ]
};
```

### repos.keywords

- type: string
- requried: true
- value: your keywords

The keywords which will be replaced

### repos.type

- type: string
- requried: true
- value: maven | npm

Choose which artifact type need get lastest version

### repos.repo

- type: string
- requried: true
- value: your repo

When type is maven, your repo value is :groupId/:artifactId
When type is npm, your repo value is :packageName

e.g.

```javascript
module.exports = {
  plugins: [
    "lastest-version",
    {
      repos: [
        {
          keywords: "mybatis-plus-latest-version",
          type: "maven",
          repo: "com.baomidou/mybatis-plus",
        }
      ]
    }
  ]
};

module.exports = {
  plugins: [
    "lastest-version",
    {
      repos: [
        {
          keywords: "vuepress-plugin-latest-version",
          type: "npm",
          repo: "vuepress-plugin-lastest-version",
        }
      ]
    }
  ]
};
```

After configuration, the plugin will replace all keywords character to really lastest version.

So, don't forgot to add keywords placeholder to your document so that this plugin can change version normally.
