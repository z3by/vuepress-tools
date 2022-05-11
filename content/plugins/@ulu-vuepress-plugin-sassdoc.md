---
author:
  avatar: https://avatars.githubusercontent.com/u/3100992?v=4
  email: jscherbe@gmail.com
  name: Joseph Scherben
  url: null
  username: jscherbe
bugs: https://github.com/Jscherbe/vuepress-plugin-sassdoc/issues
category: plugins
date: '2022-05-09T03:44:54.925Z'
deprecated: false
description: Creates pages for sassdoc groups in vuepress (as markdown). Supports
  all annotations, custom annotations, groups display name and description, and content
  blocks in content. Items organized by type (variable, mixin, etc).
downloads: null
homepage: https://github.com/Jscherbe/vuepress-plugin-sassdoc#readme
keywords:
- sassdoc
- vuepress
- vuepress-plugin
- sass
- documentation
license: MIT License
maintainers: null
name: '@ulu/vuepress-plugin-sassdoc'
npm: https://www.npmjs.com/package/%40ulu%2Fvuepress-plugin-sassdoc
publisher:
  avatar: null
  email: jscherbe@gmail.com
  name: null
  url: null
  username: jscherbe
repository: https://github.com/Jscherbe/vuepress-plugin-sassdoc
score: 0.5977613583634178
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

# Vuepress Sassdoc Plugin

Creates pages for sassdoc groups in vuepress (as markdown). Supports all annotations, custom annotations, groups display name and description, as well as content blocks in content. Items organized by type (variable, mixin, etc).

If you encounter bugs or have a feature request, feel free to open an issue on github

## Features

- Compiled Sass examples (Dart Sass) 
- Compiled examples can be configured to use your own implementation, see options (ie. if using node-sass for example)
- Preview HTML examples (demos, etc)
- Content blocks between documented items
- Custom group display names by adding dash ie `/// @group util - Shared Utilities`
- Group descriptions pulled from lines after group definition (you can also use content blocks to describe groups)
- Ability to override annotation and page templates
- Can be used multiple times (useful for dividing things up into different 'pathBase')

## Compiled Examples

```scss
/// In addition to the code block example this example will show the compiled result. Note the  {compile} modifier on the example. It also uses the compiler annotation to load the module for the compiled example. Content in the compiler annotation are prepended to the compiled code for the item or group if at file-level)
/// @compiler
///   @use "_this-file" as examples;
/// @example scss {compile} This example will be compiled
///   @include examples.print-color(red);

@mixin  print-color($value) {
  .test {
    color: $value;
  }
}
```

## Example Previews

```scss
/// In addition to the html example this will also be previewed in an iframe. Note the {preview} modifier. Settings are available to add stylesheet and javascript to iframe. Iframe used for isolation from docs styles. 
/// @example html {preview} This example will be previewed
///   <span class="test">This is a test</span>

@mixin  some-mixin($value) {}
```

## Options

Coming soon, will fill in details about all plugin options…

For now configuration can be seen in the tests `test/.vuepress/plugin-config.js` in this repo. Full options can be viewed at `lib/defaults.js` in this repo. This will be added to the readme eventually.

You need to specify the "pathBase" in options defaults to /sass/. If the pathBase is "/sass/", you will need to create the directory ie "/sass/index.md". This is the base path for all pages created by the plugin. To break up into multiple directories, use the plugin multiple times targeting the desired files. Keep in mind you can exclude files in the 'sassdocOptions' object.

you will need a method to list the pages in your site's navigation. If you are using the default theme you can use @ulu/vuepress-plugin-auto-nav (NPM package) to fill in the navigation (so you have links to pages) based on their path hierarchy.


