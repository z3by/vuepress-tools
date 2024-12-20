---
author:
  avatar: https://private-avatars.githubusercontent.com/u/1093590?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU4MDAsIm5iZiI6MTczNDY1NDYwMCwicGF0aCI6Ii91LzEwOTM1OTAifQ.S7qxkxuhkrUrINccgJP5vCf3x3xUl0rDx5Wav-ylBBY&v=4
  email: rashfael@isobeef.org
  name: rashfael
  url: null
  username: rash
bugs: https://github.com/rashfael/daumenkino/issues
category: themes
date: '2020-05-11T13:23:51.546Z'
deprecated: false
description: null
downloads: null
homepage: https://github.com/rashfael/daumenkino#readme
keywords: null
license: false
maintainers: null
name: vuepress-theme-daumenkino
npm: https://www.npmjs.com/package/vuepress-theme-daumenkino
publisher:
  avatar: null
  email: rashfael@isobeef.org
  name: null
  url: null
  username: rash
repository: https://github.com/rashfael/daumenkino
score: 0.2788501526188258
stars: 10
unstable: true
version: 0.4.1
watchers: 10

---

# daumenkino

a vuepress based presentation framework · [Demo](https://daumenkino.rash.codes)

`daumenkino` uses `vuepress` to generate static pages. It does this by providing a vuepress theme: `vuepress-theme-daumenkino`.

Right now the only way to use `daumenkino` is to use `vuepress` directly.
If you are interested in a more streamlined method, drop a :+1: on [issue #5](../../issues/5).

## Usage

### Local development

Run these commands a directory for your presentation:

```
npm init
npm install vuepress@next vuepress-theme-daumenkino
mkdir .vuepress && echo "module.exports = {theme: 'daumenkino'}" > .vuepress/config.js
npx vuepress dev
```

This will install `vuepress` and the daumenkino theme and configure vuepress to use the daumenkino theme.

Now create a `index.md` file and put your presentation content in there. You may want to look at the [vuepress example
presentation file](https://raw.githubusercontent.com/rashfael/daumenkino/master/docs/index.md) for inspiration.

The `npx vuepress dev` command will provide you with a server, making the presentation available locally. It will reload
the web page when it detects changes to the markdown file.

You can also create multiple markdown files and directories, for more information see the [vuepress docs](https://v1.vuepress.vuejs.org/)
As per the [vuepress directory structure](https://v1.vuepress.vuejs.org/guide/directory-structure.html), you can put
your own style files at `.vuepress/styles/index.styl`.


### Deployment

Once (or if) you want to move your presentation to a static website, run

```
npx vuepress build
```

The command output will tell you where the static pages are located, typically `.vuepress/dist`. If you copy this
directory to the web host of your choice, and point a server (like nginx, Apache, …) at it, it will provide your
presentation.

If you want to host your presentation on github pages you'll need to set `base` to the repository name in `.vuepress/config.js` ([see vuepress docs](https://v1.vuepress.vuejs.org/config/#base)).
