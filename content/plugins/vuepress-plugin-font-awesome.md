---
author:
  avatar: https://avatars.githubusercontent.com/u/48642166?v=4
  email: hi@yue.dev
  name: Justin Wang
  url: null
  username: hiyue
bugs: https://github.com/HiYue/vuepress-component-font-awesome/issues
category: plugin
date: '2019-07-25T01:50:14.048Z'
deprecated: false
description: Use font awesome icon in the Vuepress markdown file directly
downloads: null
homepage: https://github.com/HiYue/vuepress-component-font-awesome#readme
keywords:
- vuepress
- vuepress-plugin
- Font Awesome icons components
- vue
- vuepress
- Font Awesome icons components for vuepress
- font awesome icons
license: false
maintainers: null
name: vuepress-plugin-font-awesome
npm: https://www.npmjs.com/package/vuepress-plugin-font-awesome
publisher:
  avatar: null
  email: hi@yue.dev
  name: null
  url: null
  username: hiyue
repository: https://github.com/HiYue/vuepress-component-font-awesome
score: 0.1499648109267471
stars: 6
unstable: false
version: 1.90.6
watchers: 6

---

# Font Awesome component for Vuepress

This plugin allows you to use Font Awesome icons in Vuepress markdown file directly. 
> **Support regular and solid icons ONLY**

---
## How to Use

Each icon's used as a Vuepress component, so you just need to input a directive start with `Fa-` then follow the Capitalised font awesome icon class name, for example:

```markdown
<!-- Insert a address book icon, red colour, 3x large size -->
<Fa-AddressBook color="red" size="3x" />
```
---
## Install
- Step 1: Install dependency
```bash
yarn add vuepress-plugin-font-awesome
```
- Step 2: Create a shortcut script, please add following codes  in your `package.json` file
```json
  "scripts": {
    "fa:build": "node node_modules/vuepress-plugin-font-awesome/index.js"
  }
```
---
## Generate Font Awesome components

### Generate all font awesome icon components
> Simply run following command:
```bash
yarn fa:build
```

> If in your project, you root folder is in other place, for example: 'docs', then pass the `dest` option:
```bash
yarn fa:build --dest=docs
```

The plugin will put the font awesome components in right place, which is `.vuepress/components/Fa`.

### Generate specified icons only

By default, there are 152 regular and 957 solid icon components will be generated, which is a huge amount. Instead of pack them all, you might want to only generate some specified icons based on your demand. To do so, simply put them in the .vuepress/config.js file as below:
```javascript
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',

    // Please append following lines into your config.js
    thirdPartyComponents: {
        fontAwesomeIcons:{
            regular:['address-card','file-audio'],  // Regular font awesome icon keys here
            solid:['battery-quarter']               // Solid font awesome icon keys here
        }
    }
  }
```
> If you don't know what icon's key you could use, please refer the following:
- [Font Awesome Regular icons](./lib/regular-icons.txt)
- [Font Awesome Solid icons](./lib/solid-icons.txt)

The command is exactly same as above:
```bash
yarn fa:build
```
**OR**
```bash
yarn fa:build --dest=$YOUR_DOCS
```


---
## Use Font Awesome in your markdown

In any of your markdown file, simply add:
```markdown
<Fa-AddressBook />
```

Add props to icon:
```markdown
<Fa-AddressBook color="red" size="3x" />
```

**Here below are props you could pass:**

- color: String, Color Hex Code
- size: String, Font Awesome size class: 'lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'
- pull: String, left/right
- rotation: [String, Number], degrees such as 90/180/270
- flip: String, such as 'horizontal', 'vertical', 'both'
- spin: true/false
- pulse: true/false
- border: true/false

---
## Change Log

- `v1.0.2`: 23/Jul/2019
  - add specified icons generation feature
  - add regular and solid icons key list file

- `v1.0.1`: 22/Jul/2019
  - Support all props to pass to the component