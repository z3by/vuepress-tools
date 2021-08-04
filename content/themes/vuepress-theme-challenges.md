---
author:
  avatar: https://avatars.githubusercontent.com/u/5863590?v=4
  email: null
  name: Nico De Witte
  url: null
  username: BioBoost
bugs: https://github.com/BioBoost/vuepress-theme-challenges/issues
category: theme
date: '2020-02-03T16:49:05.429Z'
deprecated: false
description: VuePress theme for programming challenges
downloads: null
homepage: https://github.com/BioBoost/vuepress-theme-challenges#readme
keywords:
- vuepress
- programming
- challenges
- vives
license: false
maintainers: null
name: vuepress-theme-challenges
npm: https://www.npmjs.com/package/vuepress-theme-challenges
publisher:
  avatar: null
  email: bioboost@gmail.com
  name: null
  url: null
  username: bioboost
repository: https://github.com/BioBoost/vuepress-theme-challenges
score: 0.11878844799456906
stars: 0
unstable: true
version: 0.0.1
watchers: 0

---

# VuePress Theme Challenges

Initial test of trying to create theme for VuePress for programming challenges for some of my courses.

## Setup

Install the theme

```bash
npm install --save vuepress-theme-challenges
```

Next add theme to config:

```js
module.exports = {
  title: '...................',
  description: '...................',,
  theme: 'vuepress-theme-challenges',
  themeConfig: {
  }
}
```

## Example

Add following front-matter to your challenge README:

```md
---
name: Biggest Number
description: Biggest number out of 3.
details: ./07_making_decisions/biggest_number/README.md
difficulty: Medium
solution: false
unitTests: true
keywords: operators
solved: false
notes:
---
```
