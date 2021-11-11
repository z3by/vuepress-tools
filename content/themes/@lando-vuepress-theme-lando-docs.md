---
author:
  avatar: https://avatars.githubusercontent.com/u/31605584?v=4
  email: null
  name: John Ouellet @labboy0276
  url: null
  username: lando
bugs: https://github.com/lando/vuepress-theme-lando-docs/issues/new/choose/
category: themes
date: '2021-11-08T21:21:40.260Z'
deprecated: false
description: A VuePress 2 Theme for Lando Doc Based Sites
downloads: null
homepage: https://github.com/lando/vuepress-theme-lando-docs
keywords:
- lando
- vuepress
license: GNU General Public License v3.0
maintainers: null
name: '@lando/vuepress-theme-lando-docs'
npm: https://www.npmjs.com/package/%40lando%2Fvuepress-theme-lando-docs
publisher:
  avatar: null
  email: mike@lando.dev
  name: null
  url: null
  username: pirog
repository: https://github.com/lando/vuepress-theme-lando-docs
score: 0.49479770632329684
stars: 0
unstable: true
version: 0.2.3
watchers: 0

---

# VuePress 2 Theme for Lando Doc Based Sites

Contains the theme and docs for the [VuePress 2](https://v2.vuepress.vuejs.org/) [Lando Docs](https://docs.lando.dev/) Based Sites.

## Usage

Add the theme name to your [theme key](https://v2.vuepress.vuejs.org/guide/theme.html#community-theme) in your VuePress 2 config.js:

```
module.exports = {
  ...
  theme: '@lando/vuepress-theme-lando-docs',
  ...
};
```

## Docs

For more detailed information on options and other configs, please [visit the docs](https://vuepress-theme-lando-docs.lando.dev/) for this repo.

## Issues, Questions and Support

If you have a question or would like some community support we recommend you [join us on Slack](https://launchpass.com/devwithlando). Note that this is the Slack community for [Lando](https://lando.dev) but we are more than happy to help with this module as well!

If you'd like to report a bug or submit a feature request then please [use the issue queue](https://github.com/lando/website/issues/new/choose) in this repo.

## Changelog

We try to log all changes big and small in both [THE CHANGELOG](https://github.com/lando/vuepress-theme-lando-docs/blob/main/CHANGELOG.md) and the [release notes](https://github.com/lando/vuepress-theme-lando-docs/releases).


## Development

* Requires [Lando](https://lando.dev/)
* Prefers [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

```bash
git clone https://github.com/lando/vuepress-theme-lando-docs.git && cd vuepress-theme-lando-docs
yarn install
```

If you dont' want to install Node 14 or Yarn for whatever reason you can install [Lando](https://docs.lando.dev/basics/installation.html) and use that:

```bash
git clone https://github.com/lando/vuepress-theme-lando-docs.git && cd vuepress-theme-lando-docs
# Install deps and get node
lando start

# Run commands
lando node
lando yarn
```

## Testing

```bash
# Lint the code
yarn lint

# Run unit tests
yarn test
```

## Releasing

```bash
yarn release
```

## Contributors

<a href="https://github.com/lando/vuepress-theme-lando-docs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lando/vuepress-theme-lando-docs" />
</a>

Made with [contributors-img](https://contrib.rocks).

## Other Resources

* [Important advice](https://www.youtube.com/watch?v=WA4iX5D9Z64)
