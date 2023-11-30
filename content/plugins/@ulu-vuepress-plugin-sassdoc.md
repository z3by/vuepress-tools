---
author:
  avatar: https://avatars.githubusercontent.com/u/3100992?v=4
  email: jscherbe@gmail.com
  name: Joseph Scherben
  url: null
  username: jscherbe
bugs: https://github.com/Jscherbe/vuepress-plugin-sassdoc/issues
category: plugins
date: '2022-05-10T05:26:21.883Z'
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
- html preview
- compiled example
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
score: 0.5149419819194577
stars: 0
unstable: false
version: 1.0.2
watchers: 0

---

# Vuepress Sassdoc Plugin

Creates pages for sassdoc groups in vuepress (as markdown). Supports all annotations, custom annotations, groups display name and description, as well as content blocks in content. Items organized by type (variable, mixin, etc).

This module has been refactored to account for Vuepress 2. The new version uses both a plugin and the method `outputPages`. You need to create a script that uses the outputPages method which will generate the sassdoc markdown pages for Vuepress. Then you need to install the plugin (export `plugin`). See examples below.

If you encounter bugs or have a feature request, feel free to open an issue on github. Readme was done quickly more details, better documentation to follow.

**This is for Vuepress 2, for vuepress 1 see past version**

## Contents

- [Vuepress Sassdoc Plugin](#vuepress-sassdoc-plugin)
  - [Contents](#contents)
  - [Features](#features)
  - [Usage Examples](#usage-examples)
    - [Create options file](#create-options-file)
    - [Setup in your config](#setup-in-your-config)
    - [Create a module/script to output the pages](#create-a-modulescript-to-output-the-pages)
    - [Setup scripts in package.json](#setup-scripts-in-packagejson)
  - [Compiled Sassdoc Example](#compiled-sassdoc-example)
  - [Example Previews](#example-previews)
  - [Options](#options)


## Features

- Compiled Sass examples (Dart Sass) 
- Compiled examples can be configured to use your own implementation, see options (ie. if using node-sass for example)
- Preview HTML examples (demos, etc)
- Content blocks between documented items
- Custom group display names by adding dash ie `/// @group util - Shared Utilities`
- Group descriptions pulled from lines after group definition (you can also use content blocks to describe groups)
- Ability to override annotation and page templates
- Can be used multiple times (useful for dividing things up into different 'pathBase')

## Usage Examples

### Create options file

Create options file (sassdoc-options.js in config below), this example is pretending that the options file resides at the same level as the config.js file ("/docs/.vuepress/""), and the scss files are within the projects "/scss"

```js
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  // Path to publish (docs folder in vuepress)
  dist: resolve(__dirname, "../"), 
  // Path to sass files
  dir: resolve(__dirname, "../../scss"), 
  // Path to prefix all generated pages (all in /sass/ directory for example)
  pathBase: "/sass/"
}
```

### Setup in your config

Example `config.js` file, using the plugin

```js
import { defineUserConfig } from "vuepress";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defaultTheme } from "@vuepress/theme-default";
// Seperate package, optional, used to populate the menus with the generated files
import { createTree, toDefaultTheme } from "@ulu/vuepress-page-tree";

// Import the plugin and your options, install the plugin
import { plugin } from "@ulu/vuepress-plugin-sassdoc";
import options from "./sassdoc-options.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const pageTree = createTree({
  source: resolve(__dirname, "../")
});

export default defineUserConfig({
  lang: "en-US",
  title: "Sassdoc Tests",
  description: "Test plugin in vuepress setup",
  theme: defaultTheme({
    ...toDefaultTheme(pageTree)
  }),
  plugins: [
    // Install the plugin
    plugin(options)
  ]
});
```

### Create a module/script to output the pages

Create a module that will output the pages into the vuepress documentation directory

```js
import fs from "fs-extra";
import path from "path";
import { outputPages } from "@ulu/vuepress-plugin-sassdoc";
import options from "./sassdoc-options.js";

// The creation of pages is async
(async () => {
  try {
    await outputPages(options);
  } catch (error) {
    console.log(error);
  }
})();
```

### Setup scripts in package.json

Examples of running this with npm scripts in package.json

```json
{
  "scripts" : {
    "sassdoc-output": "node ./docs/.vuepress/sassdoc-output.js",
  }
}

```


## Compiled Sassdoc Example

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

See the "/test/" directory in this repo for example

You need to specify the "pathBase" in options defaults to /sass/. If the pathBase is "/sass/", you will need to create the directory ie "/sass/index.md". This is the base path for all pages created by the plugin. To break up into multiple directories, use the plugin multiple times targeting the desired files. Keep in mind you can exclude files in the 'sassdocOptions' object.


