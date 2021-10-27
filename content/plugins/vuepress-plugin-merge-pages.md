---
author:
  avatar: https://avatars.githubusercontent.com/u/1561347?v=4
  email: luiz.vinicius73@gmail.com
  name: Vinicius Reis
  url: null
  username: vinicius-reis
bugs: https://github.com/vinicius73/vuepress-plugin-merge-pages/issues
category: plugin
date: '2020-06-02T17:00:16.151Z'
deprecated: false
description: 'VuePress Plugin: Merge Markdown files in a single Markdown'
downloads: null
homepage: https://github.com/vinicius73/vuepress-plugin-merge-pages
keywords:
- vue
- vuepress
- vuepress-plugin
- markdown
license: MIT License
maintainers: null
name: vuepress-plugin-merge-pages
npm: https://www.npmjs.com/package/vuepress-plugin-merge-pages
publisher:
  avatar: null
  email: luiz.vinicius73@gmail.com
  name: null
  url: null
  username: vinicius-reis
repository: https://github.com/vinicius73/vuepress-plugin-merge-pages
score: 0.3616466307299935
stars: 4
unstable: false
version: 1.3.0
watchers: 4

---

# vuepress-plugin-merge-pages

> VuePress Plugin: Merge Markdown files in a single Markdown

![NPM](https://flat.badgen.net/npm/v/vuepress-plugin-merge-pages?icon=npm)
![NPM](https://flat.badgen.net/npm/dm/vuepress-plugin-merge-pages?icon=npm)
![Codeclimate](https://flat.badgen.net/codeclimate/maintainability/vinicius73/vuepress-plugin-merge-pages?icon=codeclimate)
![Codeclimate](https://flat.badgen.net/codeclimate/coverage/vinicius73/vuepress-plugin-merge-pages?icon=codeclimate)
![lgtm](https://flat.badgen.net/lgtm/grade/g/vinicius73/vuepress-plugin-merge-pages?icon=lgtm)
![github](https://flat.badgen.net/github/status/vinicius73/vuepress-plugin-merge-pages?icon=github)


## Install

```bash
yarn add vuepress-plugin-merge-pages -D
npm install vuepress-plugin-merge-pages --save-dev
```

## Usage

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-merge-pages',
      {
        bundles: [{
          path: '/printable',
          name: 'print-all-content-page', // optional
          filter: (pages) => { // optional
            return pages.filter(({ path }) => path.includes('/printable-page/'))
          },
          mergePages: pages => { // optional
            const pageBreak = '<hr class="page-break" />\n\n'
            const initialValue = `# My Printable Page\n\n[[TOC]]\n${pageBreak}`
            return pages
              .reduce((acc, current) => {
                return `${acc}${current.content}\n\n${pageBreak}`
              }, initialValue)
          }
        }]
      }
    ]
}
```

### Options

#### bundles

- Type: `Array`
- Required: `true`

List of target merge files.

#### bundles[].path

- Type: `String`
- Required: `false`

Page route path, url of target page.

#### bundles[].name

- Type: `String`
- Required: `false`

Name of generated file.

#### bundles[].filter

- Type: `Function => Page[]`
- Required: `false`

Filter pages of bundle. Receive `pages` and return new list of pages
See above example for mor details

##### Page object

```js
// page object
{
  content: String,
  path: String,
}
```

#### bundles[].mergePages

- Type: `Function => String`
- Required: `false`

Custom content merge. Allow interaction with pages to inject custom contents.
See above example for mor details