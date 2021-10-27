---
author:
  avatar: https://avatars.githubusercontent.com/u/30315743?v=4
  email: geniuslim27@gmail.com
  name: limdongjin
  url: null
  username: limdongjin
bugs: https://github.com/limdongjin/vuepress-plugin-simple-seo/issues
category: plugin
date: '2019-01-21T09:57:58.938Z'
deprecated: false
description: simple-seo plugin for vuepress
downloads: null
homepage: https://github.com/limdongjin/vuepress-plugin-simple-seo#readme
keywords:
- documentation
- vue
- vuepress
- seo
license: MIT License
maintainers: null
name: '@limdongjin/vuepress-plugin-simple-seo'
npm: https://www.npmjs.com/package/%40limdongjin%2Fvuepress-plugin-simple-seo
publisher:
  avatar: null
  email: geniuslim27@gmail.com
  name: null
  url: null
  username: limdongjin
repository: https://github.com/limdongjin/vuepress-plugin-simple-seo
score: 0.36942736364163636
stars: 8
unstable: false
version: 1.0.4-alpha.5
watchers: 8

---

# vuepress-plugin-simple-seo

> Simple Seo plugin for Vuepress 1.x

[![npm version](https://img.shields.io/npm/v/vuepress-plugin-feed.svg?style=flat-square)](https://www.npmjs.com/package/@limdongjin/vuepress-plugin-simple-seo)
[![MIT License](https://img.shields.io/npm/l/express.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## Install

```
yarn add -D @limdongjin/vuepress-plugin-simple-seo
```

## Usage

```js
module.exports = {
    plugins:  ['@limdongjin/vuepress-plugin-simple-seo', {
        // write options. ( all options are optional )
    }]
}
```

## Example Usage1

```js
// config.js
module.exports = {
    plugins:  ['@limdongjin/vuepress-plugin-simple-seo', {
          default_image: '/images/main-image-min.jpg',
          root_url: 'https://limdongjin.github.io',
          default_site_name: 'limdongjin TIL'
    }]
}
```

```md
---
description: It is Simple Seo Plugin for Vuepress
image: '/post-specific-image.png'
twitter_creator: twituser
twitter_site: twituser
---

# It is automatic title.

hello world

## gogo
```

```html
<!-- result html head tags-->
<meta property="og:image" content="https://limdongjin.github.io/images/main-image-min.jpg">
<meta name="twitter:image" content="https://limdongjin.github.io/images/main-image-min.jpg">

<meta property="og:description" content="It is Simple Seo Plugin for Vuepress">
<meta name="twitter:description" content="It is Simple Seo Plugin for Vuepress">
<meta itemprop="description" content="It is Simple Seo Plugin for Vuepress">

<meta property="og:url" content="https://limdongjin.github.io/">
<meta name="twitter:url" content="https://limdongjin.github.io/">

<meta property="og:title" content="It is automatic title">
<meta name="twitter:title" content="It is automatic title">
<meta itemprop="name" content="It is automatic title">

<meta property="og:type" content="article"> <!-- default value -->
<meta name="twitter:card" content="summary"> <!-- default value -->

<meta property="og:site_name" content="limdongjin TIL">

<meta name="twitter:site" content="@twituser">
<meta name="twitter:creator" content="@twituser">
```

## Options

- recommend option are also "optional" option.
- Type: `string`

### root_url (recommend)

- Default: Empty String
- Example: `https://limdongjin.github.io`

```html
<meta property="og:url" content="https://limdongjin.github.io/">
<meta name="twitter:url" content="https://limdongjin.github.io/">
```
### default_site_name (recommend)

- Default: `undefined`

```html
<meta property="og:site_name" content="limdongjin TIL">
```

### default_image (recommend)

- Default: `undefined`
- Example, `/image.png`

```html
<meta name="og:image" content="https://mysite.com/image.png">
<meta name="twitter:image" content="https://mysite.com/image.png">
<meta itemprop="image" content="https://mysite.com/image.png">
```

### default_image_type

- Default: `undefined`

```html
<meta name="og:image:type" content="image/jpeg">
```

### default_image_width

- Default: `undefined`

```html
<meta name="og:image:width" content="400">
```

### default_image_height

- Default: `undefined`

```html
<meta name="og:image:height" content="500">
```

### default_image_alt

- Default: `undefined`

```html
<meta name="og:image:alt" content="it is alt!">
```

### default_twitter_creator

- Default: `undefined`

```html
<meta name="twitter:creator" content="@limdongjin">
```

### default_twitter_site

- Default: `undefined`

```html
<meta name="twitter:site" content="@limdongjin">
```

### default_twitter_card

- Default: `summary`

```html
<meta name="twitter:card" content="summary">
```

### default_og_type

- Default: `article`

```html
<meta property="og:type" content="website">
```

## Frontmatter

- each page can override default option values.
- if you want minimal setting, recommend just set description, or image.

### title

if you are not write frontmatter title, create meta title tag from $page.title.

```html
<meta property="og:title" content="awesome title">
<meta name="twitter:title" content="Dongjin Lim, 초고수 소프트웨어 엔지니어를 향하여">
```


### description ( recommend )

```html
<meta property="og:description" content="write your page description">
<meta name="twitter:description" content="write your page description">
<meta name="description" content="write your page description">
<meta itemprop="description" content="write your page description">
```

### image ( recommend )

```html
 <meta name="og:image" content="https://mysite.com/image.png">
 <meta name="twitter:image" content="https://mysite.com/image.png">
 <meta itemprop="image" content="https://mysite.com/image.png">
```

### image_type

```html
<meta name="og:image:type" content="image/jpeg">
```

### image_width

```html
<meta name="og:image:width" content="400">
```

### image_height

```html
<meta name="og:image:height" content="500">
```

### image_alt

```html
<meta name="og:image:alt" content="it is alt!">
```

### twitter_creator

- Example: twituser

```html
<meta name="twitter:creator" content="@twituser">
```

### twitter_site

- Example: twituser

```html
<meta name="twitter:site" content="@twituser">
```

### twitter_card

```html
<meta name="twitter:card" content="summary">
```

### og_type

```html
<meta property="og:type" content="website">
```

### site_name

```html
<meta property="og:site_name" content="limdongjin TIL">
```

## License

MIT © [limdongjin](https://github.com/limdongjin)
