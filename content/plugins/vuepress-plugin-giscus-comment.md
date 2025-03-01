---
author:
  avatar: https://avatars.githubusercontent.com/u/13284800?v=4
  email: debe3721@gmail.com
  name: PresentKim
  url: null
  username: presentkim
bugs: https://github.com/PresentKim/vuepress-plugin-giscus-comment/issues
category: plugins
date: '2022-03-25T03:15:33.177Z'
deprecated: false
description: '[![npm](https://img.shields.io/npm/v/vuepress-plugin-giscus-comment.svg)](https://www.npmjs.com/package/vuepress-plugin-giscus-comment)
  [![GitHub license](https://img.shields.io/github/license/PresentKim/vuepress-plugin-giscus-comment.svg)](https://github'
downloads: null
homepage: https://github.com/PresentKim/vuepress-plugin-giscus-comment#readme
keywords: null
license: MIT License
maintainers: null
name: vuepress-plugin-giscus-comment
npm: https://www.npmjs.com/package/vuepress-plugin-giscus-comment
publisher:
  avatar: null
  email: debe3721@gmail.com
  name: null
  url: null
  username: presentkim
repository: https://github.com/PresentKim/vuepress-plugin-giscus-comment
score: 0.5436716130593746
stars: 3
unstable: false
version: 2.0.0
watchers: 3

---

# vuepress-plugin-giscus-comment

[![npm](https://img.shields.io/npm/v/vuepress-plugin-giscus-comment.svg)](https://www.npmjs.com/package/vuepress-plugin-giscus-comment) [![GitHub license](https://img.shields.io/github/license/PresentKim/vuepress-plugin-giscus-comment.svg)](https://github.com/PresentKim/vuepress-plugin-giscus-comment/blob/master/LICENSE)
> Note: This plugin is provided for [**VuePress 2**](https://v2.vuepress.vuejs.org/)

[Giscus](https://giscus.app/) plugin for VuePress 2.   
This plugin register `<GiscusComment/>` custom element to your VuePress site.  
You are free to use it on any theme or page.

## Installation

```bash
yarn add -D vuepress-plugin-giscus-comment
# OR
npm install -D vuepress-plugin-giscus-comment
```

## Usage

> #### **`Method 1`**: Using the simple plugin configuration array
> This method is simple and the most common.
> ```javascript
> module.exports = {
>     plugins: [
>         ['vuepress-plugin-giscus-comment',{/*options*/}]
>     ]
> };
> ```
>
> When using with TypeScript, you can specify the type as shown below.
> ```typescript
> import {GiscusCommentPluginConfig} from 'vuepress-plugin-giscus-comment'
> 
> module.exports = {
>     plugins: [
>         ['vuepress-plugin-giscus-comment', {/*options*/}] as GiscusCommentPluginConfig
>     ]
> };
> ```

> #### **`Method 2`**: Using the plugin configuration generator function
> This method is a goes well with TypeScript.
> ```typescript
> import {GiscusCommentPlugin} from 'vuepress-plugin-giscus-comment';
> 
> module.exports = {
>     plugins: [
>         new GiscusCommentPlugin({/*options*/})
>     ]
> }
> ```

## :card_file_box: Options

The plugin option has an interface as shown below.

```typscript
interface GiscusCommentPluginOptions{
    /** @description The repository name */
    repo: `${string}/${string}`;

    /** @description The repository id */
    repoId: string;
    
    /** 
     * @description The discussion category name of repository
     * Required if 'mapping' value is not 'specific'
    */
    category?: string;

    /** 
     * @description The discussion category id of repository
     * Required if 'mapping' value is not 'specific'
    */
    categoryId?: string;

    /**
     * @description The mapping method between the embedding page and the embedded discussion
     * @default 'pathname'
     */
    mapping?: 'url' | 'title' | 'og:title' | 'pathname' | 'specific' | 'number';
    
    /**
     * @description Not required by Common mapping method
     * Required when 'mapping' value is 'specific' or 'number'
     */
    term?: string|number;
    
     /**
     * @description Whether to enable reactions for main post
     * @default true
     */
    reactionsEnabled?: boolean;

    /**
     * @description Whether to enable emit discussion metadata
     * @default false
     */
    emitMetadata?: boolean;

    /**
     * @description The theme name or custom theme css path that apply to giscus
     * @default 'light'
     */
    theme?:
        'light' | 'light_high_contrast' | 'light_protanopia' |
        'dark' | 'dark_high_contrast' | 'dark_protanopia' | 'dark_dimmed' |
        'transparent_dark' | 'preferred_color_scheme' |
        `/${string}` | `https://${string}`;

    /**
     * @description The location of comment box
     * @default 'bottom'
     */
    inputPosition?: 'top' | 'bottom';

    /**
     * @description The language name that apply to giscus
     * @default 'en'
     */
    lang?:
        'de' | 'en' | 'es' | 'fr' | 'gsw' | 'id' | 'it' | 'ja' |
        'ko' | 'pl' | 'ro' | 'ru' | 'tr' | 'vi' | 'zh-CN' | 'zh-TW';

    /**
     * @description Whether to load the comments lazily
     * @default true
     */
    lazyLoading?: boolean;
}
```

> Example:
> ```typescript
> import {GiscusCommentPlugin} from 'vuepress-plugin-giscus-comment';
> 
> module.exports = {
>     plugins: [
>         new GiscusCommentPlugin({
>                repo: '[ENTER REPOSITORY NAME HERE]',
>                repoId: '[ENTER REPOSITORY ID HERE]',
>                category: '[ENTER CATEGORY NAME HERE]',
>                categoryId: '[ENTER CATEGORY ID HERE]',
>                mapping: 'url',
>                reactionsEnabled: false,
>                emitMetadata: true,
>                theme: 'dark',
>                inputPosition: 'top',
>                lang: 'en',
>                lazyLoading: false
>            })
>     ]
> }
> ```

> ### :bulb: How to get my repo and category ids?
> 
> You can easily get it from [**Giscus Main page**](https://giscus.app/).