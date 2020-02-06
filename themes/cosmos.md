---
archive_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/{archive_format}{/ref}
archived: false
assignees_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/assignees{/user}
blobs_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/git/blobs{/sha}
branches_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/branches{/branch}
clone_url: https://github.com/cosmos/vuepress-theme-cosmos.git
collaborators_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/collaborators{/collaborator}
comments_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/comments{/number}
commits_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/commits{/sha}
compare_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/compare/{base}...{head}
contents_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/contents/{+path}
contributors_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/contributors
created_at: '2019-09-30T20:44:54Z'
default_branch: master
deployments_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/deployments
description: VuePress theme for Cosmos/Tendermint Documentation
disabled: false
downloads_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/downloads
events_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/events
fork: false
forks: 0
forks_count: 0
forks_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/forks
full_name: cosmos/vuepress-theme-cosmos
git_commits_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/git/commits{/sha}
git_refs_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/git/refs{/sha}
git_tags_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/git/tags{/sha}
git_url: git://github.com/cosmos/vuepress-theme-cosmos.git
has_downloads: true
has_issues: true
has_pages: false
has_projects: true
has_wiki: true
homepage: ''
hooks_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/hooks
html_url: https://github.com/cosmos/vuepress-theme-cosmos
id: 211953472
issue_comment_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/issues/comments{/number}
issue_events_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/issues/events{/number}
issues_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/issues{/number}
keys_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/keys{/key_id}
labels_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/labels{/name}
language: Vue
languages_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/languages
license:
  key: apache-2.0
  name: Apache License 2.0
  node_id: MDc6TGljZW5zZTI=
  spdx_id: Apache-2.0
  url: https://api.github.com/licenses/apache-2.0
merges_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/merges
milestones_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/milestones{/number}
mirror_url: null
name: vuepress-theme-cosmos
node_id: MDEwOlJlcG9zaXRvcnkyMTE5NTM0NzI=
notifications_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/notifications{?since,all,participating}
open_issues: 0
open_issues_count: 0
owner:
  avatar_url: https://avatars0.githubusercontent.com/u/228843?v=4
  events_url: https://api.github.com/users/cosmos/events{/privacy}
  followers_url: https://api.github.com/users/cosmos/followers
  following_url: https://api.github.com/users/cosmos/following{/other_user}
  gists_url: https://api.github.com/users/cosmos/gists{/gist_id}
  gravatar_id: ''
  html_url: https://github.com/cosmos
  id: 228843
  login: cosmos
  node_id: MDEyOk9yZ2FuaXphdGlvbjIyODg0Mw==
  organizations_url: https://api.github.com/users/cosmos/orgs
  received_events_url: https://api.github.com/users/cosmos/received_events
  repos_url: https://api.github.com/users/cosmos/repos
  site_admin: false
  starred_url: https://api.github.com/users/cosmos/starred{/owner}{/repo}
  subscriptions_url: https://api.github.com/users/cosmos/subscriptions
  type: Organization
  url: https://api.github.com/users/cosmos
private: false
pulls_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/pulls{/number}
pushed_at: '2020-02-06T06:13:55Z'
releases_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/releases{/id}
score: 23.807981
size: 1382
ssh_url: git@github.com:cosmos/vuepress-theme-cosmos.git
stargazers_count: 2
stargazers_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/stargazers
statuses_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/statuses/{sha}
subscribers_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/subscribers
subscription_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/subscription
svn_url: https://github.com/cosmos/vuepress-theme-cosmos
tags_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/tags
teams_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/teams
trees_url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos/git/trees{/sha}
updated_at: '2020-02-06T06:13:54Z'
url: https://api.github.com/repos/cosmos/vuepress-theme-cosmos
watchers: 2
watchers_count: 2
---

# Cosmos theme for VuePress

## Install

```sh
# Remove previously installed version (optional)
rm -rf node_modules

# If there is no package.json file, initialize npm package
npm init

# Install or update the theme
npm install --save vuepress-theme-cosmos
```

## Usage

Minimal config in `.vuepress/config.js` to enable the theme:

```js
module.exports = {
  theme: "cosmos"
}
```

### Run dev server

```sh
vupress dev
```

### Build the website

```
vuepress build
```

## Configuration

Most of the configuration happens in the `.vuepress/config.js` file. All parameters all optional, except `theme`.

```js
module.exports = {
  // Enable the theme
  theme: "cosmos",
  themeConfig: {
    // Logo in the top left corner, file in .vuepress/public/
    logo: "/logo.svg",
    // Auto-sidebar, true by default
    autoSidebar: true,
    // Configure the manual sidebar
    sidebar: [
      // Array of sections
      {
        title: "Section title",
        children: [
          {
            title: "External link",
            path: "https://example.org/"
          },
          {
            title: "Internal link",
            path: "/url/path/"
          },
          {
            title: "Directory",
            path: "/path/to/directory/",
            directory: true
          },
          {
            title: "Link to ./vuepress/public/foo/index.html",
            path: "/foo/",
            static: true
          }
        ]
      }
    ]
  }
}
```

Markdown files can contain YAML frontmatter. Several properties (all of which are optional) are used by the theme:

```yaml
---
# title is displayed in the sidebar
title: Title of the file
# order specifies file's priority in the sidebar
order: 2
# parent is readme.md or index.md parent directory
parent:
  title: Directory title
  order: 1
---
```

Setting `order: false` removes the item (file or directory) from the sidebar. It is, however, remains accessible by means other than the sidebar. It is valid use a `readme.md` to set an order of a parent-directory and hide the file with `order: false`.