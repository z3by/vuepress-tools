---
author:
  avatar: https://avatars.githubusercontent.com/u/69196822?v=4
  email: null
  name: Orta Therox
  url: null
  username: shikijs
bugs: https://github.com/shikijs/twoslash/issues
category: plugin
date: '2021-09-02T19:28:50.298Z'
deprecated: false
description: A VuePress plugin which adds shiki with optional twoslash-powered code
  samples
downloads: null
homepage: https://github.com/shikijs/twoslash
keywords: null
license: MIT License
maintainers: null
name: vuepress-plugin-shiki-twoslash
npm: https://www.npmjs.com/package/vuepress-plugin-shiki-twoslash
publisher:
  avatar: null
  email: shiki-deploys@orta.io
  name: null
  url: null
  username: shiki-deploys
repository: https://github.com/shikijs/twoslash
score: 0.6194967082977073
stars: 401
unstable: false
version: 1.0.29
watchers: 401

---

<center><img src="./misc/repo-icon.png" /></center>

You take some Shiki, add a hint of TypeScript compiler, and 🎉 incredible statically generated code samples.

See the user-facing docs at: https://shikijs.github.io/twoslash/

### This Repo

The majority of this repo uses pnpm, the rest yarn. There are four main areas of interest:
 
 - `packages`, the shiki meets twoslash plugins for markdown renderers and static site generators
 - `site`, the docs micro-site
 - `examples`, example static site generator projects which use the plugins
 - `extensions`, right now, just the vscode extension for twoslash code samples
 
### Packages

The `site` `extensions` and `examples` are excluded from the workspace. To work on those, `cd` to their folders and read instructions.

Otherwise:

```sh
git clone https://github.com/shikijs/twoslash
cd twoslash

pnpm i
pnpm bootstrap
pnpm test
```

Then see the contributing [for advice](./CONTRIBUTING.md) and the vision file for the [long-term perspective](./VISION.md).

#### Plugins 

- [`docusaurus-preset-shiki-twoslash`](packages/docusaurus-preset-shiki-twoslash) - for Docusaurus
- [`eleventy-plugin-shiki-twoslash`](packages/eleventy-plugin-shiki-twoslash) - For 11ty
- [`gatsby-remark-shiki-twoslash`](packages/gatsby-remark-shiki-twoslash) - For Gatsby
- [`hexo-shiki-twoslash`](packages/hexo-shiki-twoslash) - For Hexo
- [`vuepress-plugin-shiki-twoslash`](packages/vuepress-plugin-shiki-twoslash) - For VuePress

#### Markdown Renderers

- [`markdown-it-shiki-twoslash`](packages/markdown-it-shiki-twoslash) - For Markdown-It
- [`remark-shiki-twoslash`](packages/remark-shiki-twoslash) - For Remark

#### Root Abstractions

- [`shiki-twoslash`](packages/shiki-twoslash) - Provides all the building blocks for above
- [`twoslash-cli`](packages/twoslash-cli) - A CLI for converting md/ts/tsx/js/jsx files to HTML
