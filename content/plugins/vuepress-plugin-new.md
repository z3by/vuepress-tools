---
author:
  avatar: https://avatars.githubusercontent.com/u/34507012?v=4
  email: sanbaofeng@baijiahulian.com
  name: sanbaofeng
  url: null
  username: x-bao
bugs: https://github.com/x-bao/vuepress-plugin-new/issues
category: plugin
date: '2019-07-03T12:22:10.584Z'
deprecated: false
description: A vuepress command-line plugin to create markdown file just like `hexo
  new 'hello world'`
downloads: null
homepage: https://github.com/x-bao/vuepress-plugin-new#readme
keywords:
- vuepress
- vuepress-plugin
- command-line
license: MIT License
maintainers: null
name: vuepress-plugin-new
npm: https://www.npmjs.com/package/vuepress-plugin-new
publisher:
  avatar: null
  email: sanbaofeng@foxmail.com
  name: null
  url: null
  username: baof
repository: https://github.com/x-bao/vuepress-plugin-new
score: 0.23068742405115528
stars: 1
unstable: true
version: 0.1.6
watchers: 1

---

# vuepress-plugin-new

> This plugin requires VuePress >= **1.0.0**.

A vuepress command-line plugin to create markdown file just like `hexo new 'hello world'`

[中文说明](./zh/README.md)

## Features

- Auto create post markdown file in current directory
- Auto inject basic frontmatter config in post file
- Create post by default, use options `-d/--draft` to create a draft
- Auto fix file conflict

## Install

```bash
npm i vuepress-plugin-new
```

## Usage

### Using this plugin:

```js
// .vuepress/config.js
module.exports = {
    plugins: [
        'vuepress-plugin-export',
        {
            base: '_post'
        }
    ]
}
```

### Then run:

New post named *hello vuepress*

```bash
vuepress new . 'hello vuepress'
```

New draft named *hello vuepress latter*

```bash
vuepress new . 'hello vuepress latter' -d/--draft
```

## Options

base

- Type: string
- Default: '.'

Provide the base path in the blog directory


## Development

```bash
git clone https://github.com/x-bao/vuepress-plugin-new
cd vuepress-plugin-new
yarn
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :P


## Author

**vuepress-plugin-new** © [San Baofeng](https://github.com/x-bao), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by San Baofeng

> [San Baofeng's](https://arts.sanbaofengs.com) · GitHub [@San Baofeng](https://github.com/x-bao) · Twitter [@Baofeng15](https://twitter.com/Baofeng15)
