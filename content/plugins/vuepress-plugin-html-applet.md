---
author:
  avatar: https://private-avatars.githubusercontent.com/u/7115690?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUzODAsIm5iZiI6MTczNDY1NDE4MCwicGF0aCI6Ii91LzcxMTU2OTAifQ._WlR5d1nVTjZ-p3fOu8kGOo2gKJZDbTFADM4m9fTZyw&v=4
  email: purocean@gmail.com
  name: purocean
  url: null
  username: purocean
bugs: https://github.com/purocean/vuepress-plugin-html-applet/issues
category: plugins
date: '2022-04-09T10:02:15.167Z'
deprecated: false
description: a vuepress plugin to embed html applet
downloads: null
homepage: https://github.com/purocean/vuepress-plugin-html-applet
keywords:
- vuepress
- vuepress-plugin
- iframe
license: MIT License
maintainers: null
name: vuepress-plugin-html-applet
npm: https://www.npmjs.com/package/vuepress-plugin-html-applet
publisher:
  avatar: null
  email: purocean@outlook.com
  name: null
  url: null
  username: purocean
repository: https://github.com/purocean/vuepress-plugin-html-applet
score: 0.36848086383137657
stars: 1
unstable: true
version: 0.0.4
watchers: 1

---

# Vuepress HTML Applet Plugin

Embed HTML Applet iframe to your Vuepress article.

## Installation

```shell
yarn add vuepress-plugin-html-applet -D
# or
npm i vuepress-plugin-html-applet -D
```

## Usage

Add the following to your `config.js`:

```js
module.exports = {
  plugins: [
    'html-applet',
    // or
    // ['html-applet', { useSrcdoc: true }],
  ]
}
```

Write html code in markdown like this:

The first line of the HTML code block needs to contain the string `--applet--`.

~~~markdown
```html
<!-- --applet-- -->

<div>
  <h1>Hello World</h1>
  <p>This is a simple applet.</p>
</div>
```
~~~

## Options

- `useSrcdoc`: whether to use `srcdoc` attribute instead of `src`. Default is `false`.
- `showCode`: whether to show the HTML code block. Default is `false`.

## Example Page

https://blog-purocean.vercel.app/css-quirks/
