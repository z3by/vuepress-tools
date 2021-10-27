---
author:
  avatar: https://avatars.githubusercontent.com/u/3874900?v=4
  email: null
  name: null
  url: null
  username: simonbrunel
bugs: https://github.com/simonbrunel/vuepress-plugin-versions/issues
category: plugin
date: '2021-04-11T17:21:02.535Z'
deprecated: false
description: Allows users to switch between different versions of your documentation
downloads: null
homepage: https://github.com/simonbrunel/vuepress-plugin-versions#readme
keywords:
- vuepress
- plugin
- versions
- npm
license: MIT License
maintainers: null
name: '@simonbrunel/vuepress-plugin-versions'
npm: https://www.npmjs.com/package/%40simonbrunel%2Fvuepress-plugin-versions
publisher:
  avatar: null
  email: s.b.npmjs@abysscorp.org
  name: null
  url: null
  username: simonbrunel
repository: https://github.com/simonbrunel/vuepress-plugin-versions
score: 0.49881874641705976
stars: 2
unstable: true
version: 0.2.0
watchers: 2

---

# @simonbrunel/vuepress-plugin-versions

VuePress plugin that allows users to switch between different versions of your documentation,
based on the published versions of your project on npm. Available releases are automatically
retrieved on the client side, so previous versions of your documentation can provide a link
to the newer versions.

**Important:** this plugin does **not** help to create and organize different versions of
your documentation but assumes that it's already properly versioned under different URLs.
If it's not the case, you may want to try the `vuepress-plugin-versioning` plugin.

## Requirements

Please read the following requirements before using this plugin:

- Your project **must be publicly available on npm**. Currently, this plugin only allows to
  fetch published versions from npm. If you want to see more use cases implemented for projects
  not available on npm, please open an issue.

- The versioned URL format of your documentation should be stable in order to support old docs
  linking to newer ones. Rules to convert versions to URLs are part of the build, thus can't be
  changed once published. If you deploy newer docs under a different URL format, old docs will
  still redirect to the previous format.

- Your VuePress theme, if not the default one, must provide a dropdown component with a similar
  API as the one built-in the default VuePress theme. This component must be accessible via the
  `@theme/components/DropdownLink.vue` alias.

## Installation

```sh
npm install -D @simonbrunel/vuepress-plugin-versions
```

## Configuration

Minimal config in `.vuepress/config.js` to enable this plugin:

```js
module.exports = {
  plugins: [
    ['@simonbrunel/vuepress-plugin-versions'],
  ],
};
```

The following snippet describes available options with their default values:

```js
module.exports = {
  plugins: [
    ['@simonbrunel/vuepress-plugin-versions', {
      /**
       * Path to the `package.json` file of your project, relative to the `.vuepress` folder.
       * The default value assumes that your documentation is stored under a top level folder
       * in your project repository (e.g. /docs).
       * @type string
       * @default '../../package.json'
       */
      package: '../../package.json',

      /**
       * Template filters. See "Template Syntax > Filters" for details.
       * @type object | undefined
       * @default undefined
       */
      filters: undefined,

      /**
       * Options to customize the versions menu(s).
       * @type object
       */
      menu: {
        /**
         * Array of query selectors. For each of them, a menu is created and inserted inside
         * the element represented by the selector. If the selector ends with `::before` or
         * `::after`, the menu is inserted before (or after) the element. By default, two
         * menus are created, one after the docs title, on the left of the navbar (desktop)
         * and another one on the top of the sidebar (mobile).
         * https://developer.mozilla.org/docs/Web/API/Document/querySelector
         * @type string
         */
        locations: [
          '.navbar > .home-link::after',
          '.sidebar > .nav-links > :first-child::before',
        ],

        /**
         * Text to display for the menu title. This value supports variables for the current
         * version (i.e. package.json/version). See "Template Syntax" for details.
         * @type string (template)
         */
        text: '{{version}}',

        /**
         * Menu content items. The default value displays all minor versions, redirecting to
         * '/<version>/' (e.g. 'https://<hostname>/1.2.3-beta.1/') with the version as title
         * (e.g. '1.2.3-beta.1'). See "Menu Items" for details.
         * @type array
         */
        items: [
          {
            type: 'versions',
            target: '_self',
            link: '/{{version}}/',
            text: '{{version}}',
            exclude: undefined,
            limit: undefined,
            group: 'minor',
          },
        ],
      },
    }],
  ],
};
```

### Menu Items

This plugin supports the same options as the default theme navbar links, with the difference
that the `text` and `link` properties support [template](#template-syntax) with variables for
the current version. Additionally, a special [`versions`](#versions-item) item can be used to
generate a list of items for each available version.

```js
module.exports = {
  plugins: [
    ['@simonbrunel/vuepress-plugin-versions', {
      menu: {
        items: [
          { /* 'link' item     */ },
          { /* 'group' item    */ },
          { /* 'versions' item */ },
        ],
      },
    }],
  ],
};
```

#### Link Item

Same as the [Navbar Links](https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-links)
for the default theme.

```js
{
  /**
   * Link URL. If it's a path, it will be resolved relative to the site origin (i.e.
   * will not have `base` prepended to it), thus it must start and end with a slash.
   * For example, if your documentation is deployed at `https://foo.com/docs/1.2.3/`
   * with `base: '/docs/1.2.3/`, then `link: '/docs/{{version}}/'` will be resolved
   * as `https://foo.com/docs/{{version}}/`. This value supports variables for the
   * version for which this item is created. See "Template Syntax" for details.
   * @type string (template)
   * @required
   */
  link: '<required>',

  /**
   * Text to display as link title. This value supports variables for the current
   * version (i.e. `package.json/version`). See "Template Syntax" for details.
   * @type string (template)
   * @required
   */
  text: '<required>',

  /**
   * Where to display the linked URL. If undefined, outbound links are opened in a
   * new tab ('_blank') and internal links in the same tab ('_self').
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
   * @type '_self' | '_blank' | '_parent' | '_top' | string | undefined
   */
  target: undefined,
}
```

#### Group Item

Sub groups inside the menu are also supported using nested items and follow the same format
as the [Navbar Links](https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-links)
for the default theme.

```js
{
  /**
   * Text to display as group title. This value supports variables for the current
   * version (i.e. `package.json/version`). See "Template Syntax" for details.
   * @type string (template)
   * @required
   */
  text: '',

  /**
   * Group content items.
   * @ype array
   * @required
   */
  items: [
    { /* 'link' item */ },
    { /* 'versions' item */ },
  ],
}
```

#### Versions Item

A `'versions'` item can be used to generate multiple items, one for each available version.
It's possible to control which versions are displayed by changing the `group`, `exclude`
and `limit` options.

```js
{
  /**
   * Turns the item as a 'versions' item.
   * @type 'versions'
   * @required
   */
  type: 'versions',

  /**
   * Regular expression used to exclude versions, for example:
   * - exclude: /^[0]\.|[1]\.[0-5]\./ (ignores version in range 0.x to 1.5)
   * - exclude: /^[01]\./ (ignores all 0.x and 1.x versions)
   * - exclude: /alpha|beta/ (ignores all alpha and beta versions)
   * @type regexp
   */
  exclude: undefined,

  /**
   * Defines how versions are grouped together. If 'major', only one entry is kept per
   * major version (the most recent one). For example, if available versions are '1.2.4',
   * '1.2.5', '2.2.3', '2.2.4' and '2.2.5', only '1.2.5' and '2.2.5' will be displayed.
   * Same logic applies for 'minor' and 'patch'.
   * @type 'major' | 'minor' | 'patch' | null
   */
  group: 'minor',

  /**
   * Number of versions to display, after `exclude` and `group` have been applied.
   * @type number
   */
  limit: undefined,

  /**
   * Where to display the linked URL. If undefined, outbound links are opened in a
   * new tab ('_blank') and internal links in the same tab ('_self').
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
   * @type '_self' | '_blank' | '_parent' | '_top' | string | undefined
   */
  target: undefined,

  /**
   * Link URL. If it's a path, it will be resolved relative to the site origin (i.e.
   * will not have `base` prepended to it), thus it must start and end with a slash.
   * For example, if your documentation is deployed at `https://foo.com/docs/1.2.3/`
   * with `base: '/docs/1.2.3/`, then `link: '/docs/{{version}}/'` will be resolved
   * as `https://foo.com/docs/{{version}}/`. This value supports variables for the
   * version for which this item is created. See "Template Syntax" for details.
   * @type string (template)
   */
  link: '/{{version}}/',

  /**
   * Text to display as link title. This value supports variables for the version
   * for which this item is created. See "Template Syntax" for details.
   * @type string (template)
   */
  text: '{{version}}',
}
```

### Template Syntax

Texts and links in the plugin configuration support a (very) basic template syntax. A template is a
string that contains any number of variables. Variables are indicated by the double curly brackets
that surround them and will be replaced by values derived from version numbers.

#### Variables

Currently, the following variables are supported for each version:

| Variables | Example
| --------- | -------
| `{{core}}` | `1.4.2`
| `{{major}}` | `1`
| `{{minor}}` | `4`
| `{{patch}}` | `2`
| `{{prerelease}}` | `beta.2`
| `{{tag}}` | `next`
| `{{version}}` | `1.4.2-beta.2`

Additionally, it's possible to define your own filters that you can use to transform the value of
these variables (e.g. `{{version|slug}}`, where `slug` is a function that you provide and taking
the value of `version` as first argument).

#### Filters

Filters allow to modify the value of a template variable. There is currently no built-in filters
but you can provide your own using the `filters` plugin option. It must be an object where the key
is the filter name and the value, a function that takes two arguments: the variable value to
transform and an object containing all available variables.

**Important:** Since filters are serialized in order to be used on the client side, they **must**
be [arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
and can **not** use global variables or functions.

For example:

```js
module.exports = {
  plugins: [
    ['@simonbrunel/vuepress-plugin-versions', {
      filters: {
        slug: (v) => v.replace(/\./g, '_'),
        suffix: (v) => v ? ` (${v})` : '',
      }
    }]
  ]
}
```

With the previous configuration, the following templates are resolved as:

| Template | Example 1 | Example 2
| -------- | --------- | ---------
| `'{{version}}'` | `'1.2.3'` | `'1.2.3-beta.1'`
| `'{{version\|slug}}'` | `'1_2_3'` | `'1_2_3-beta_1'`
| `'{{core}}{{prerelease\|suffix}}'` | `'1.2.3'` | `'1.2.3 (beta.1)'`

## License

`@simonbrunel/vuepress-plugin-versions` is available under the [MIT license](LICENSE.md).
