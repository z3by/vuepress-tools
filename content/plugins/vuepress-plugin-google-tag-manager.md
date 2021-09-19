---
author:
  avatar: https://avatars.githubusercontent.com/u/15069983?v=4
  email: omerbuyukcelik@gmail.com
  name: "\xD6mer B\xFCy\xFCk\xE7elik"
  url: null
  username: bykclk
bugs: https://github.com/bykclk/vuepress-plugin-google-tag-manager/issues
category: plugin
date: '2020-12-06T10:15:51.320Z'
deprecated: false
description: vuepress-plugin-google-tag-manager plugin for vuepress
downloads: null
homepage: https://github.com/bykclk/vuepress-plugin-google-tag-manager#readme
keywords:
- documentation
- vue
- vuepress
- generator
license: false
maintainers: null
name: vuepress-plugin-google-tag-manager
npm: https://www.npmjs.com/package/vuepress-plugin-google-tag-manager
publisher:
  avatar: null
  email: omerbuyukcelik@gmail.com
  name: null
  url: null
  username: bykclk
repository: https://github.com/bykclk/vuepress-plugin-google-tag-manager
score: 0.37817370196064837
stars: 7
unstable: true
version: 0.0.5
watchers: 7

---

# vuepress-plugin-google-tag-manager

> vuepress-plugin-google-tag-manager plugin for vuepress

## Install

```
npm i vuepress-plugin-google-tag-manager --save
```
or
```
yarn add vuepress-plugin-google-tag-manager
```

## Configuration

```javascript
module.exports = {
  plugins: ['vuepress-plugin-google-tag-manager'] 
}
```

## Options

### gtm

- Type: `string`
- Default: `undefined`

Provide the Google Tag Manager ID to enable integration.

## Documentation

Once the configuration is completed, you can access vue gtm instance in your components like that :

```javascript
export default {
  name: 'MyComponent',
  data() {
    return {
      someData: false
    };
  },
  methods: {
    onClick: function() {
      this.$gtm.trackEvent({
        event: null, // Event type [default = 'interaction'] (Optional)
        category: 'Calculator',
        action: 'click',
        label: 'Home page SIP calculator',
        value: 5000,
        noninteraction: false // Optional
      });
    }
  },
  mounted() {
    this.$gtm.trackView('MyScreenName', 'currentpath');
  }
};
```

The passed variables are mapped with GTM data layer as follows

```
dataLayer.push({
	'event': event || 'interaction',
	'target': category,
	'action': action,
	'target-properties': label,
	'value': value,
	'interaction-type': noninteraction,
	...rest
});
```