---
author:
  avatar: https://avatars.githubusercontent.com/u/23313167?v=4
  email: qw13131wang@gmail.com
  name: tolking
  url: null
  username: tolking
bugs: https://github.com/tolking/vuepress-plugin-last-reading/issues
category: plugin
date: '2020-10-13T06:56:00.471Z'
deprecated: false
description: A vuepress plugin to record the last reading
downloads: null
homepage: https://github.com/tolking/vuepress-plugin-last-reading
keywords:
- vuepress
- plugin
- last-reading
- reading
- history
license: MIT License
maintainers: null
name: vuepress-plugin-last-reading
npm: https://www.npmjs.com/package/vuepress-plugin-last-reading
publisher:
  avatar: null
  email: qw13131wang@gmail.com
  name: null
  url: null
  username: tolking
repository: https://github.com/tolking/vuepress-plugin-last-reading
score: 0.43883461069943663
stars: 1
unstable: false
version: 1.0.0
watchers: 1

---

# vuepress-plugin-last-reading

> A vuepress plugin to record the last reading

[Documentation](https://tolking.github.io/vuepress-plugin-last-reading/)

## Installation

``` sh
yarn add vuepress-plugin-last-reading
# or
npm i vuepress-plugin-last-reading
```

## Usage

``` js
module.exports = {
  plugins: [
    'last-reading'
  ]
}
```

## Options

### popupConfig
- Type: `Object`
- Required: `false`

The default content displayed in the popup component.

``` js
module.exports = {
  plugins: [
    ['last-reading', {
      popupConfig: {
        message: 'Go back',
        buttonText: 'ok'
      },
    }]
  ]
}
```

Or refer to [i18n](./src/i18n.js)

### popupCountdown
- Type: `Number`
- Default: `10000`
- Required: `false`

Configure the time that the popup will display.

### popupComponent
- Type: `string`
- Required: `false`

A custom component to replace the default popup component, refer to [Customize the UI of Popup](https://tolking.github.io/vuepress-plugin-last-reading/#customize-the-ui-of-popup).

### popupCustom
- Type: `Function`
- Required: `false`

Custom popup related logic.

``` js
module.exports = {
  plugins: [
    ['last-reading', {
      popupCustom: function() {
        const now = new Date().getTime()
        if (now - this.lastReading.timestamp > 30 * 24 * 60 *60 * 1000) {
          this.clean()
        } else if (this.$route.path === this.lastReading.path) {
          this.goto()
        } else {
          this.show = true
          setTimeout(this.clean, 10000)
        }
      },
    }]
  ]
}
```

## License

[MIT](http://opensource.org/licenses/MIT)
