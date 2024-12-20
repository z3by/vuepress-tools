---
author:
  avatar: https://private-avatars.githubusercontent.com/u/7025343?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU3NDAsIm5iZiI6MTczNDY1NDU0MCwicGF0aCI6Ii91LzcwMjUzNDMifQ.xpt4sYEe4MfAEpmZnLvlrPqach_x9yQQwT3KyRkqbow&v=4
  email: me@snazzah.com
  name: Snazzah
  url: https://snazzah.com/
  username: snazzah
bugs: https://github.com/Snazzah/vuepress-plugin-jsonld/issues
category: plugins
date: '2022-04-06T04:32:37.418Z'
deprecated: false
description: VuePress plugin for adding JSON-LD to pages
downloads: null
homepage: https://github.com/Snazzah/vuepress-plugin-jsonld#readme
keywords:
- linkeddata
- jsonld
- vuepress
license: MIT License
maintainers: null
name: vuepress-plugin-jsonld
npm: https://www.npmjs.com/package/vuepress-plugin-jsonld
publisher:
  avatar: null
  email: me@snazzah.com
  name: null
  url: null
  username: snazzah
repository: https://github.com/Snazzah/vuepress-plugin-jsonld
score: 0.39879174041772586
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

# vuepress-plugin-jsonld
> VuePress plugin for adding JSON-LD to pages

## Installation
```sh
yarn add -D vuepress-plugin-jsonld
# or
npm install -D vuepress-plugin-jsonld
```

## Usage
```js
// .vuepress/config.js
module.exports = {
  plugins: ['jsonld'],
}
```

You can add JSON-LD to pages using the `ld` prop in the frontmatter:
```yaml
---
ld:
  '@type': Organization
  url: https://example.com
  logo: https://example.com/logo.png
  name: VuePress
---
```

You can follow the [schema](https://schema.org/) and write it in YAML.