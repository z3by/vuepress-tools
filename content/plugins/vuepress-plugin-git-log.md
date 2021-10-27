---
author:
  avatar: https://avatars.githubusercontent.com/u/48539483?v=4
  email: 1700011071@pku.edu.cn
  name: Shigma
  url: null
  username: shigma
bugs: https://github.com/vuepress/vuepress-plugin-git-log/issues
category: plugin
date: '2019-03-19T08:07:01.320Z'
deprecated: false
description: A VuePress plugin that integrates git logs into your page.
downloads: null
homepage: https://github.com/vuepress/vuepress-plugin-git-log#readme
keywords:
- vuepress
- plugin
- git
- git-log
license: MIT License
maintainers: null
name: vuepress-plugin-git-log
npm: https://www.npmjs.com/package/vuepress-plugin-git-log
publisher:
  avatar: null
  email: 1700011071@pku.edu.cn
  name: null
  url: null
  username: shigma
repository: https://github.com/vuepress/vuepress-plugin-git-log
score: 0.2546292186855672
stars: 2
unstable: false
version: 1.0.1
watchers: 2

---

# [vuepress-plugin-git-log](https://vuepress.github.io/plugins/git-log.html)

[![npm](https://img.shields.io/npm/v/vuepress-plugin-git-log.svg)](https://www.npmjs.com/package/vuepress-plugin-git-log)

A [VuePress](https://vuepress.vuejs.org/) plugin that integrates git logs into your page.

## Usage

### Global Installation

```bash
npm install -g vuepress-plugin-git-log
# OR
yarn global add vuepress-plugin-git-log
```

### Local Installation

```bash
npm install vuepress-plugin-git-log
# OR
yarn add vuepress-plugin-git-log
```

### Add to `config.js`

```js
module.exports = {
  plugins: [
    ['git-log', {
      additionalArgs: '--no-merge',
      onlyFirstAndLastCommit: true,
    }],
  ]
}
```
or
```js
module.exports = {
  plugins: {
    'git-log': {
      additionalProps: {
        subject: '%s',
        authorEmail: '%ae',
      },
    },
  }
}
```

## API

This plugin will add a `git` property to `$page`, with the following properties:

### git.author

The author of the article, i.e. the author of the first commit.

### git.created

The time the article was created, i.e. the authoring time of the first commit.

### git.updated

The time the article was updated, i.e. the committing time of the last commit.

### git.commits

A list of all the commits in chronological order.

### git.contributors

A list of contributors to all users who have modified the article.

## Configurations

### formatTime

- **type:** `(timestamp: number, lang: string) => string`
- **default:** `(timestamp, lang) => new Date(timestamp).toLocaleString(lang)`

A function used to format Unix time.

### additionalProps

- **type:** `{ [prop: string]: string }`
- **default:** `{}`

An object that represents additional properties. Every key is a property name and value is the corresponding [placeholder](https://git-scm.com/docs/git-log#_pretty_formats).

### additionalArgs

- **type:** `string | string[]`
- **default:** `[]`

A list of additional parameters to pass in.

### extendGitLog

- **type:** `(git: object) => void`
- **default:** `undefined`

A function used to extend or modify the [`$page.git`](#api) object. 

### onlyFirstAndLastCommit

- **type:** `boolean`
- **default:** `false`

Whether to search for only the first and last commit. Set this option to `true` for large-scale projects may optimize the initial startup performance. However, you will not be able to use `$page.git.commits` and `$page.git.contributors` as a cost.
