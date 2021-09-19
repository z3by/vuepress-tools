---
author:
  avatar: https://avatars.githubusercontent.com/u/10135110?v=4
  email: andy@5ff.de
  name: Andreas Fischer
  url: null
  username: fischermaen
bugs: https://github.com/Fischermaen/vuepress-plugin-contributors/issues
category: plugin
date: '2020-06-02T14:50:23.558Z'
deprecated: false
description: Display a list of all contributors ordered descending by number of contributions,
  showing avatar, username and number of commits.
downloads: null
homepage: https://github.com/Fischermaen/vuepress-plugin-contributors#readme
keywords:
- vuepress
- vuepress-plugin
- contributors
license: false
maintainers: null
name: vuepress-plugin-contributors
npm: https://www.npmjs.com/package/vuepress-plugin-contributors
publisher:
  avatar: null
  email: andy@5ff.de
  name: null
  url: null
  username: fischermaen
repository: https://github.com/Fischermaen/vuepress-plugin-contributors
score: 0.40677022164703974
stars: 1
unstable: false
version: 1.4.0
watchers: 1

---

![npm](https://img.shields.io/npm/v/vuepress-plugin-contributors) ![GitHub Release Date](https://img.shields.io/github/release-date/Fischermaen/vuepress-plugin-contributors) ![NPM](https://img.shields.io/npm/l/vuepress-plugin-contributors)  ![GitHub contributors](https://img.shields.io/github/contributors/Fischermaen/vuepress-plugin-contributors)  ![GitHub last commit](https://img.shields.io/github/last-commit/Fischermaen/vuepress-plugin-contributors)

# vuepress-plugin-contributors
This component allows you to add a list of all contributors, which is sorted descending by the number of contributions.

To get the list of contributors this plugins uses `git shortlog -nse --no-merges HEAD`. The shortlog is taken from the root path of the project, if you want the contributors to be retrieved only from a certain path, you can specify it with parameter `baseDir`. If you expect double entries due to e.g. changes of email-adresses, you may specify a `.mailmap` in the root of your project. (See [git dcumentation](https://git-scm.com/docs/git-shortlog))

## Installation
```shell
$ npm install vuepress-plugin-contributors --save

# or, if you prefer yarn
$ yarn add vuepress-plugin-contributors
```

After installing, add it to your Vuepress configuration's plugin list:

```js
module.exports = {
    plugins: [ 'vuepress-plugin-contributors' ]
}
```

## Usage

Just put the following code somewhere in one of your markdown files: 

```markdown
<contributors />
```

## Options

This plugin takes a number of options, which can be passed in n options object:

```js
module.exports = {
    plugins. [
        ['vuepress-plugin-contributors', {
            showAvatar: true,
            showCount: true,
            avatarSize: 32,
            defaultAvatar: '/not-found.png', 
            avatarProvider: 'github',
            userProfileUrlProvider: 'github'
        }]
    ]
}
```

### showAvatar

- Type: `Boolean`
- Default: `false`

If set to `true` an avatarProvider has to be specified to show the avatars.

### avatarProvider

- Type: `String|function`
- Default: `undefinded`

Following avatar sources are supported: `github`, `gitlab` or `gravatar`. In case of `gitlab` the email address of the user has to public to enable the plugin to fetch the avatar url.

You can specify a function in case you would like to use a different avatar source or your documentation is running on premise and you need a different url for the standard avatar-providers. This function is called with 2 parameters:

- user: `Object`, contains two fields `name` (String) and `email` (String)
- avatarSize: `Integer` Size of the avatar in pixel.

**Expected return value:** `String` The url to the avatar.

Sample:

```js
const rp = require('request-promise');

    ['vuepress-plugin-contributors', {
        avatarProvider: async (user, avatarSize) => {
            var options = {
                strictSSL: false,
                json: true
            };
            options.uri = `https://<your.gitlab.server>/api/v4/avatar?email=${user.email}&size=${avatarSize}`;
            var json = await rp(options);
            return json.avatar_url;
        },
        avatarSize: 32,
        defaultAvatar: '/transparent.png'
    }]
```

### defaultAvatar

- Type: `String`
- Default: `undefined`

Path to a default avatar, when no avatar is found in the source. This file must be in the public folder of `.vuepress` to ensure the name isn't changed during webpack.

### avatarSize

- Type: `Integer`
- Default: `32`

The size of the avatars. This value is provided to the `avatarProvider` function, if specified.

### showCount

- Type: `Boolean`
- Default: `false`

Should the number of commits be shown in brackets behind the name.

### userProfileUrlProvider

- Type: `String|function`
- Default: `undefinded`

Following user profile sources are supported: `github` or `gitlab`. In these cases the user profile url is built by adding user.name to the url.

You can specify a function in case you would like to use a different user profile source:

- user: `Object`, contains two fields `name` (String) and `email` (String)

**Expected return value:** `String` The url to the user profile.

Sample:

```js
    ['vuepress-plugin-contributors', {
        userProfileUrlProvider: async (user) => {
            return `http://your-server.domain/user/${user.email}`;
        }
    }]
```

### baseDir

- Type: `String`
- Default: `''`

Specifies the path from where the contributors should be taken. If you have your documentation within a source-code project (e.g. in the docs folder) and you only want to list the contributors for the documentation, then value of `baseDir` has to be `docs`. 