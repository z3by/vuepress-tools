---
author:
  avatar: https://private-avatars.githubusercontent.com/u/3100992?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUyNjAsIm5iZiI6MTczNDY1NDA2MCwicGF0aCI6Ii91LzMxMDA5OTIifQ.gRHAe2Xfz_PSXXNUgS9cV53ttL0NNi8YnEfXlE8FNYU&v=4
  email: jscherbe@gmail.com
  name: Joseph Scherben
  url: null
  username: jscherbe
bugs: https://github.com/Jscherbe/vuepress-plugin-default-theme-auto-nav/issues
category: plugins
date: '2022-05-12T02:15:05.664Z'
deprecated: false
description: This plugin fills in the navbar and or sidebar links based on all page's
  paths (default theme)
downloads: null
homepage: https://github.com/Jscherbe/vuepress-plugin-default-theme-auto-nav#readme
keywords:
- vuepress
- vuepress-plugin
- sidebar
- navbar
- dynamic links
license: MIT License
maintainers: null
name: '@ulu/vuepress-plugin-auto-nav'
npm: https://www.npmjs.com/package/%40ulu%2Fvuepress-plugin-auto-nav
publisher:
  avatar: null
  email: jscherbe@gmail.com
  name: null
  url: null
  username: jscherbe
repository: https://github.com/Jscherbe/vuepress-plugin-default-theme-auto-nav
score: 0.5111229566239934
stars: 0
unstable: false
version: 1.0.2
watchers: 0

---

# Vuepress Plugin Auto Nav

This plugin fills in the navbar and or sidebar links based on all page's paths. Children are nested. Sidebar show's active section by default. Navbar show's all sections. Sidebar can be configured to show all sections (if not using navbar).

## Page Order

Page order is alphabetical and can be ordered manually by adding a "weight" or "order" property to a page's front matter. Pages will be listed by order/weight ascending.

```yaml
# In a page's frontmatter
order: 10
```

## Usage & Options

Install the plugin (npm), then add the plugin to the end of your plugin array (in vuepress `config.js`).

Options are placed in the vuepress `config.js` within the theme's config. This plugin modify's the theme's configuration during runtime using enhanceAppFiles. So configuration is added to the the theme's config object using the "pluginAutoNav" key.

**Usage and notes on settings:**

``` js

module.exports = {
  themeConfig: {
    pluginAutoNav: {
      /**
       * Generate links for the sidebar (nests children)
       */
      createSidebar: true,
      /**
       * Generate links for the top navbar
       */
      createNav: true,
      /**
       * If true it should show the whole tree else show by section (landing page)
       */
      sidebarAllSections: false
    }
  },
  plugins: [
    "@ulu/vuepress-plugin-auto-nav"
  ]
}

```