---
author:
  avatar: https://avatars.githubusercontent.com/u/82188?v=4
  email: null
  name: Axway Appcelerator
  url: null
  username: appcelerator
bugs: https://github.com/appcelerator/docs-devkit/issues
category: theme
date: '2020-11-10T19:22:07.431Z'
deprecated: false
description: VuePress theme for Titanium projects
downloads: null
homepage: https://github.com/appcelerator/docs-devkit#readme
keywords: null
license: false
maintainers: null
name: vuepress-theme-titanium
npm: https://www.npmjs.com/package/vuepress-theme-titanium
publisher:
  avatar: null
  email: npmjs@appcelerator.com
  name: null
  url: null
  username: appcelerator
repository: https://github.com/appcelerator/docs-devkit
score: 0.5949259387429578
stars: 21
unstable: false
version: 4.9.0
watchers: 21

---

# docs-devkit

> Tooling for Axway Appcelerator open source documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/28f362c2-9aef-4701-a0d6-25f7bd71760f/deploy-status)](https://app.netlify.com/sites/titanium-docs-devkit/deploys)

This is the home for all the libraries, plugins and themes to build sleek and modern documentations using VuePress.

📖 View the [Documentation](https://titanium-docs-devkit.netlify.com/).

## Packages

This is a monorepo with the following packages:

| Package | Description | Version | Links |
|---|---|---|---|
| titanium-docgen | Various generators to format Titanium API documentation | [![latest](https://img.shields.io/npm/v/titanium-docgen.svg?style=flat-square)](https://www.npmjs.com/package/titanium-docgen) | [![README](https://img.shields.io/badge/README--green.svg)](packages/titanium-docgen#readme) |
| vuepress-plugin-apidocs | Plugin for VuePress to render API reference documentation | [![latest](https://img.shields.io/npm/v/vuepress-plugin-apidocs.svg?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-apidocs) | [![README](https://img.shields.io/badge/README--green.svg)](packages/vuepress/vuepress-plugin-apidocs#readme) |
| vuepress-plugin-versioning | Versioning plugin for VuePress | [![latest](https://img.shields.io/npm/v/vuepress-plugin-versioning.svg?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-versioning) | [![README](https://img.shields.io/badge/README--green.svg)](packages/vuepress/vuepress-plugin-versioning#readme) |
| vuepress-theme-titanium | VuePress theme for Titanium projects | [![latest](https://img.shields.io/npm/v/vuepress-theme-titanium.svg?style=flat-square)](https://www.npmjs.com/package/vuepress-theme-titanium) | [![README](https://img.shields.io/badge/README--green.svg)](packages/vuepress/vuepress-theme-titanium#readme) |

## Contributing

Open source contributions are greatly appreciated! If you have a bugfix, improvement or new feature, please create
[an issue](https://github.com/appcelerator/docs-devkit/issues/new) first and submit a [pull request](https://github.com/appcelerator/docs-devkit/pulls/new) against master.

Before you contribute read through the following guidelines.

* The `master` branch contains a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**
* Checkout relevant topic branches, e.g. `develop` and merge back against that branch.
* Your commit messages should follow the [Conventional Commits Specification](https://conventionalcommits.org/) so that changelogs and version bumps can be automatically generated. If you are not familiar with the commit message convention, you can use `npm run commit` instead of git commit, which provides an interactive CLI for generating proper commit messages.
* We will let GitHub automatically squash your PR before merging, so don't worry about making multiple small commits.

## Getting Help

If you have questions about our documentation devkit for VuePress, feel free to reach out on Stackoverflow or the
`#helpme` channel on [TiSlack](http://tislack.org). In case you find a bug, create a [new issue](https://github.com/appcelerator/docs-devkit/issues/new)
or open a [new JIRA ticket](https://jira.appcelerator.org).

## License

Apache License. Version 2.0
