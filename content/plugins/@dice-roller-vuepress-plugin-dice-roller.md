---
author:
  avatar: https://avatars.githubusercontent.com/u/85532421?v=4
  email: info@greenimp.co.uk
  name: GreenImp Media
  url: http://greenimp.co.uk
  username: dice-roller
bugs: https://github.com/dice-roller/vuepress-plugin/issues
category: plugins
date: '2021-11-26T22:57:51.362Z'
deprecated: false
description: Plugin for VuePress that allows rolling dice
downloads: null
homepage: https://github.com/dice-roller/vuepress-plugin
keywords:
- vuepress
- dice
- roll
license: MIT License
maintainers: null
name: '@dice-roller/vuepress-plugin-dice-roller'
npm: https://www.npmjs.com/package/%40dice-roller%2Fvuepress-plugin-dice-roller
publisher:
  avatar: null
  email: lee@greenimp.co.uk
  name: null
  url: null
  username: greenimp
repository: https://github.com/dice-roller/vuepress-plugin
score: 0.3583240560253957
stars: 2
unstable: true
version: 0.1.10
watchers: 2

---

<p align="center">
    <img src="https://dice-roller.github.io/documentation/dice-roller-logo.png" alt="RPG Dice Roller" style="max-width: 100%;" width="200"/>
</p>

# RPG Dice Roller Vuepress Plugin

[![npm (scoped)](https://img.shields.io/npm/v/@dice-roller/vuepress-plugin-dice-roller?label=version)](https://www.npmjs.com/package/@dice-roller/vuepress-plugin-dice-roller)
[![License](https://img.shields.io/npm/l/@dice-roller/vuepress-plugin-dice-roller)](./LICENSE.txt)


Plugin for [VuePress v2](https://v2.vuepress.vuejs.org/) that allows rolling dice. For Vuepress v1, use version [`v0.1.*`](https://github.com/dice-roller/vuepress-plugin/tree/v0.1.10) of this library.

This library enables adding a dice roller component anywhere within a markdown file, with a simple syntax.

It uses the [Dice Roller Vue component](https://github.com/dice-roller/vue), which is built upon the [RPG dice roller](https://github.com/dice-roller/rpg-dice-roller), and is used in the [Dice Roller documentation](https://dice-roller.github.io/documentation/).

![Dice Roller component](./src/client/images/example.png)


## Install

Install the plugin:

```bash
npm install -D @dice-roller/vuepress-plugin-dice-roller
```

Then add the plugin to your Vuepress config file:

```javascript
import { diceRollerPlugin } from '@dice-roller/vuepress-plugin-dice-roller';

export default defineUserConfig({
    ...
    plugins: [
        diceRollerPlugin()
    ]
});
```


## Usage

You can add a die roller anywhere by using the following markdown syntax:

```
::: roll :::
```

You can even specify the default notation with:

```
::: roll {notation} :::
```

For example:

```
::: roll 4d6 ::
```

```
::: roll (2*6)d10 / (4 - d20) :::
```


## Customise

### Styles

You  can customise the style of the dice roller component via CSS variables.

These are the variables, and their default values:

```css
:root {
    --dice-roller-text-color: #2c3e50;

    --dice-roller-bg: #eeeeee;
    --dice-roller-border-radius: 0;
    --dice-roller-color: var(--dice-roller-text-color);

    --dice-roller-output-bg: #ffffff;
    --dice-roller-output-border-color: #d4f4c6;
    --dice-roller-output-border-radius: 0;
    --dice-roller-output-color: var(--dice-roller-text-color);
    --dice-roller-output-font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;

    --dice-roller-form-height: 2.75rem;

    --dice-roller-input-bg: #ffffff;
    --dice-roller-input-border: #eaecef;
    --dice-roller-input-border-focus: #d4f4c6;
    --dice-roller-input-color: var(--dice-roller-text-color);

    --dice-roller-button-bg: linear-gradient(to bottom right, #eda18b, #d4f4c6);
    --dice-roller-button-bg-active: linear-gradient(to bottom right, #d4f4c6, #eda18b);
    --dice-roller-button-border-color: rgb(209 213 219);
    --dice-roller-button-color: rgb(75 85 99);

    --dice-roller-error-color: rgb(220 38 38);
}

html.dark {
    --dice-roller-text-color: #adbac7;

    --dice-roller-bg: #2b313a;

    --dice-roller-output-bg: #22272e;

    --dice-roller-input-bg: #22272e;
    --dice-roller-input-border: #3e4c5a;

    --dice-roller-error-color: rgb(254 202 202);
}
```

#### Default Vuepress theme

If you're using the default Vuepress theme, we suggest the following overrides, to make it match your theme:

```css
:root {
    --dice-roller-text-color: var(--c-text);

    --dice-roller-bg: var(--c-bg-lighter);
    --dice-roller-border-radius: 0;
    --dice-roller-color: var(--dice-roller-text-color);

    --dice-roller-output-bg: var(--c-bg);
    --dice-roller-output-border-color: var(--c-brand);
    --dice-roller-output-border-radius: 0;
    --dice-roller-output-color: var(--dice-roller-text-color);
    --dice-roller-output-font-family: var(--font-family-code);

    --dice-roller-form-height: 2.75rem;

    --dice-roller-input-bg: var(--c-bg);
    --dice-roller-input-border: var(--c-border);
    --dice-roller-input-border-focus: var(--c-brand);
    --dice-roller-input-color: var(--dice-roller-text-color);

    --dice-roller-button-bg: var(--c-brand);
    --dice-roller-button-bg-active: var(--c-brand-light);
    --dice-roller-button-border-color: var(--c-brand);
    --dice-roller-button-color: var(--c-bg);

    --dice-roller-error-color: var(--c-danger);
}

html.dark {
    --dice-roller-bg: var(--c-bg-light);
}
```

#### Custom styles not working

There is [an issue with Vuepress](https://github.com/vuepress/vuepress-next/discussions/1099), whereby Plugin styling can take precendent over custom styling, causing these CSS overrides to not work.

In this case, you may need to use `!important` to force your custom styling to take affect.
