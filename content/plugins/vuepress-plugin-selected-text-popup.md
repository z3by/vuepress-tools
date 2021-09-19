---
author:
  avatar: https://avatars.githubusercontent.com/u/27291717?v=4
  email: null
  name: znicholasbrown
  url: null
  username: znicholasbrown
bugs: https://github.com/znicholasbrown/vuepress-plugin-selected-text-popup/issues
category: plugin
date: '2019-12-06T04:27:10.151Z'
deprecated: false
description: A global plugin for Vuepress that creates a popup on selecting text!
downloads: null
homepage: https://github.com/znicholasbrown/vuepress-plugin-selected-text-popup#readme
keywords:
- vuepress
- vuepress-plugin
- selected-text
license: MIT License
maintainers: null
name: vuepress-plugin-selected-text-popup
npm: https://www.npmjs.com/package/vuepress-plugin-selected-text-popup
publisher:
  avatar: null
  email: znicholasbrown@gmail.com
  name: null
  url: null
  username: znicholasbrown
repository: https://github.com/znicholasbrown/vuepress-plugin-selected-text-popup
score: 0.23569703895770588
stars: 1
unstable: false
version: 1.0.1
watchers: 1

---

# Vuepress Selected Text Popup Plugin

A global plugin for Vuepress that creates a popup on selecting text!

It currently supports options to link to (and autopopulate with selection) a GitHub issue and Tweet.

## Installation

```
$ npm install vuepress-plugin-selected-text-popup
# OR
$ yarn add vuepress-plugin-selected-text-popup
```

## Usage

The plugin can be added to `.vuepress/config.js` in your Vuepress project under `plugins`:

```javascript
module.exports = {
  plugins: [['vuepress-plugin-selected-text-popup', true]]
}
```

## Options

The plugin takes a number of options, which can be passed in with the plugin config in an options object:

```
module.exports = {
  plugins: [
    ["vuepress-plugin-selected-text-popup", {
        github: Boolean,
        twitter: Boolean,
        githubOwner: String,
        githubRepo: String,
        githubIssueTitle: String,
        githubLabels: String[],
        githubTooltipContent: String
  ]
}
```

### github

- Type: `Boolean`
- Default: `true`

Enables the GitHub issue creation link.
`githubOwner` and `githubRepo` options should both be set if this is `true`.

### twitter

- Type: `Boolean`
- Default: `true`

Enables the Tweet creation link.

### githubOwner

- Type: `String`
- Default: ``

The owner of the repository the GitHub issue will link to.

### githubRepo

- Type: `String`
- Default: ``

The GitHub repository the issue will link to.

### githubIssueTitle

- Type: `String`
- Default: ``

The title of the GitHub issue to be created.

### githubLabels

- Type: `String[]`
- Default: `[]`

This is an array of strings representing labels for the issue to be created. (these are case sensitive)

### githubTooltipContent

- Type: `String`
- Default: `Create a GitHub Issue!`

This sets the text that displays when a user hovers the GitHub link
