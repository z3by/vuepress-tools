---
author:
  avatar: https://avatars.githubusercontent.com/u/25088094?v=4
  email: maxcharleswolf@gmail.com
  name: Max Wolf
  url: null
  username: maxcwolf
bugs: https://github.com/maxcwolf/vuepress-theme-dynamicsidebar/issues
category: themes
date: '2018-11-21T15:58:28.951Z'
deprecated: false
description: vuepress-theme
downloads: null
homepage: https://github.com/maxcwolf/vuepress-theme-dynamicsidebar#readme
keywords:
- vuepress
- theme
- dynamic
- sidebar
- drag
- drop
- file
license: false
maintainers: null
name: vuepress-theme-dynamicsidebar
npm: https://www.npmjs.com/package/vuepress-theme-dynamicsidebar
publisher:
  avatar: null
  email: maxcharleswolf@gmail.com
  name: null
  url: null
  username: maxcwolf
repository: https://github.com/maxcwolf/vuepress-theme-dynamicsidebar
score: 0.4187901912568671
stars: 1
unstable: false
version: 1.0.0
watchers: 1

---

# VuePress Theme - Dynamic Sidebar

**A Drag and Drop Documentation Library Solution**

This custom VuePress theme creates sidebar navigation dynamically based on folder content

### Instructions

1. [Install](https://vuepress.vuejs.org/guide/getting-started.html) Vuepress
2. Require this theme
   ```
   yarn add -D vuepress-theme-dynamicsidebar
   ```
3. In `.vuepress/config.js`, set up your Nav links to folders

```js
module.exports = {
  title: 'Document Library',
  themeConfig: {
    sidebarDepth: 2,
    nav: [{
        text: 'Folder',
        link: '/folder/'
      },
      {
        text: 'Folder 2.0',
        link: '/folder20/'
      }
    ],
```

4. Now, setup those folders to appear in the Sidebar when clicked on the Navbar

> NOTE: capitalization and periods are allowed to be the only differences between the path/link and the title. To account for other differences, you may edit the regex shown in the later section of this readme

```js
  themeConfig: {
    sidebar: {
      '/folder20/': [{
        title: 'Folder2.0',
        collapsable: false,
        // CHILDREN ARE NOW AUTOMATICALLY CREATED WHEN DROPPED INTO THE AMS and AMS20 FOLDERS!
        // Custom code in Layout.vue handles this.
        // children: [
        //   'Document-1',
        //   'Document-2',
        //   'Document-3'
        // ]
      }],
      '/folder/': [{
        title: 'Folder',
        collapsable: false,
      }]
    }
  }
```

- All markdown documentation that is dropped into these folders will appear in the sidebar after selecting that folder in the navbar!
- In the sidebar, the documentation will appear in the same alphabetical order that documents are stored in the filesystem. 


### The code in Layout.vue that handles this functionality

If you want to eject the VuePress theme and customize it yourself, below is the code that handles this functionality. 

```js
  computed: {
  //Get the links from the filepaths rather than the config.js so that the sidebar is dynamic
    sidebarItemsFromFile () {      
      if (this.sidebarItems.length !== 0) {
        let arr = []
        let folder = this.sidebarItems[0].title.toLowerCase().replace(/\./g,'')
        let item = {
            type: "group",
            title: this.sidebarItems[0].title,
            children: this.$site.pages.filter( page => page.path.startsWith(`/${folder}/`) && page.path != `/${folder}/`),
            collapsable: false
          }
        arr.push(item)
        return arr
      } else {
        return this.sidebarItems
      }
    }
  }
```

Then use `sidebarItemsFromFile` where `sidebarItems` is used in the Vue template