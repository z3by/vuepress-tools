---
author:
  avatar: https://avatars.githubusercontent.com/u/55663384?v=4
  email: caleb@getnacelle.com
  name: Caleb Bodtorf
  url: null
  username: getnacelle
bugs: https://github.com/getnacelle/vuepress-plugin-github-markdown/issues
category: plugin
date: '2020-06-24T22:43:57.446Z'
deprecated: false
description: VuePress plugin for importing markdown files from Github
downloads: null
homepage: https://github.com/getnacelle/vuepress-plugin-github-markdown#readme
keywords:
- github
- markdown
- plugin
- vuepress
license: MIT License
maintainers: null
name: vuepress-plugin-github-markdown
npm: https://www.npmjs.com/package/vuepress-plugin-github-markdown
publisher:
  avatar: null
  email: cbodtorf@gmail.com
  name: null
  url: null
  username: cbodtorf
repository: https://github.com/getnacelle/vuepress-plugin-github-markdown
score: 0.36210074618390387
stars: 0
unstable: false
version: 1.0.3
watchers: 0

---

# vuepress-plugin-github-markdown

> VuePress plugin for importing markdown from Github

## Setup

### Create Github App for Organization:

1. [Register new Github App](https://github.com/organizations/H2Know/settings/apps/new)
  - Please follow [guide](https://developer.github.com/apps/building-github-apps/creating-a-github-app/) if you have questions.
  - Make sure to save the **Private Key** that is generated to your .env file `GITHUB_PRIVATE_KEY`.
      - May need to format the Private Key properly on single line for env file (The OSX script will format & save to clipboard for easy pasting):

        `awk -v ORS='\\n' '1' github-app-name.2020-06-21.private-key.pem | pbcopy`
      - Some deployment services (ie. Netlify) won't be able to parse the line breaks properly. When calling the env variable replace the line breaks like this: `process.env.GITHUB_PRIVATE_KEY.replace(/\\n/gm, '\n')`.
  - Also save the **App ID** to your .env file `GITHUB_APP_ID`.

2. Install Github App
  - Please follow [guide](https://developer.github.com/apps/installing-github-apps/) for installation.
  - On the installation page of the app, make note of the **Installation ID**** at the end of the url. (ie. `https://github.com/organizations/getnacelle/settings/installations/**9762656**`). Save to your .env file `GITHUB_INSTALLATION_ID`

### Installation:

`npm install -D vuepress-plugin-github-markdown`

### Add to `.vuepress/config`:

```
  plugins: [
    [
      'vuepress-plugin-github-markdown',
      {
        appId: process.env.GITHUB_APP_ID,
        privateKey: process.env.GITHUB_PRIVATE_KEY.replace(/\\n/gm, '\n'),
        installationId: process.env.GITHUB_INSTALLATION_ID,
        files: [
          {
            path: '/nuxt/changelog.html',
            owner: 'getnacelle',
            repo: 'nacelle-nuxt-starter',
            githubFilePath: 'CHANGELOG.md',
            modifyContent(content) {
              // Append title to markdown
              return '# @nacelle/nacelle-nuxt-starter' + '\n' + content
            }
          }
        ]
      }
    ]
  ]
```

#### Plugin Options:

| Name | Param[Type] | Describe |
| ---- | --------- | -------- |
| appId | String | App ID for Github App |
| privateKey | String | Private Key of Github App |
| installationId | String | ID of Github App installation |
| files | File[] | Array of file options for markdown files to import |

#### File Options:

| Name | Param[Type] | Describe |
| ---- | --------- | -------- |
| path | String | url path where the page will live in docs |
| owner | String | github owner/organization |
| repo | String | github repo name |
| githubFilePath | String | the url to the raw markdown file |
| modifyContent | (String): String | (optional) A function that can modify imported content if needed |


## Link to Markdown File in Sidebar:

We can link to the markdown file by using a standard sidebar group in the `config.js`:

```
  {
    title: 'Changelog',
    collapsable: true,
    path: '/nuxt/changelog',
    sidebarDepth: 1,
    children: ['/nuxt/changelog'],
  },
```