---
archive_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/{archive_format}{/ref}
archived: false
assignees_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/assignees{/user}
blobs_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/git/blobs{/sha}
branches_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/branches{/branch}
clone_url: https://github.com/tacck/vuepress-plugin-sidebar.git
collaborators_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/collaborators{/collaborator}
comments_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/comments{/number}
commits_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/commits{/sha}
compare_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/compare/{base}...{head}
contents_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/contents/{+path}
contributors_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/contributors
created_at: '2019-12-06T09:40:29Z'
default_branch: master
deployments_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/deployments
description: Generate sidebar menu for VuePress
disabled: false
downloads_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/downloads
events_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/events
fork: false
forks: 0
forks_count: 0
forks_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/forks
full_name: tacck/vuepress-plugin-sidebar
git_commits_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/git/commits{/sha}
git_refs_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/git/refs{/sha}
git_tags_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/git/tags{/sha}
git_url: git://github.com/tacck/vuepress-plugin-sidebar.git
has_downloads: true
has_issues: true
has_pages: false
has_projects: true
has_wiki: true
homepage: https://www.npmjs.com/package/vuepress-plugin-sidebar
hooks_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/hooks
html_url: https://github.com/tacck/vuepress-plugin-sidebar
id: 226294803
issue_comment_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/issues/comments{/number}
issue_events_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/issues/events{/number}
issues_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/issues{/number}
keys_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/keys{/key_id}
labels_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/labels{/name}
language: JavaScript
languages_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/languages
license:
  key: mit
  name: MIT License
  node_id: MDc6TGljZW5zZTEz
  spdx_id: MIT
  url: https://api.github.com/licenses/mit
merges_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/merges
milestones_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/milestones{/number}
mirror_url: null
name: vuepress-plugin-sidebar
node_id: MDEwOlJlcG9zaXRvcnkyMjYyOTQ4MDM=
notifications_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/notifications{?since,all,participating}
open_issues: 1
open_issues_count: 1
owner:
  avatar_url: https://avatars2.githubusercontent.com/u/2795323?v=4
  events_url: https://api.github.com/users/tacck/events{/privacy}
  followers_url: https://api.github.com/users/tacck/followers
  following_url: https://api.github.com/users/tacck/following{/other_user}
  gists_url: https://api.github.com/users/tacck/gists{/gist_id}
  gravatar_id: ''
  html_url: https://github.com/tacck
  id: 2795323
  login: tacck
  node_id: MDQ6VXNlcjI3OTUzMjM=
  organizations_url: https://api.github.com/users/tacck/orgs
  received_events_url: https://api.github.com/users/tacck/received_events
  repos_url: https://api.github.com/users/tacck/repos
  site_admin: false
  starred_url: https://api.github.com/users/tacck/starred{/owner}{/repo}
  subscriptions_url: https://api.github.com/users/tacck/subscriptions
  type: User
  url: https://api.github.com/users/tacck
private: false
pulls_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/pulls{/number}
pushed_at: '2019-12-15T07:07:05Z'
releases_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/releases{/id}
score: 17.564487
size: 5
ssh_url: git@github.com:tacck/vuepress-plugin-sidebar.git
stargazers_count: 0
stargazers_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/stargazers
statuses_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/statuses/{sha}
subscribers_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/subscribers
subscription_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/subscription
svn_url: https://github.com/tacck/vuepress-plugin-sidebar
tags_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/tags
teams_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/teams
trees_url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar/git/trees{/sha}
updated_at: '2019-12-17T04:36:09Z'
url: https://api.github.com/repos/tacck/vuepress-plugin-sidebar
watchers: 0
watchers_count: 0
---

# vuepress-plugin-sidebar

Sidebar-menu generator plugin for VuePress.

## Instration

```
$ npm install --save-dev vuepress-plugin-sidebar
# or
$ yarn add --dev vuepress-plugin-sidebar
```

## How to use

``` .vuepress/config.js
module.exports = {
  plugins: [
    ['sidebar']
  ]
}
```

### Option: Add static links after generated menu

``` .vuepress/config.js
module.exports = {
  plugins: [
    [
      'sidebar', {
        postItems: [
          ['https://www.tacck.net/', 'Tacck.NET']
        ]
      }
    ]
  ]
}
```

## License

[MIT License](https://raw.githubusercontent.com/Kihara, Takuya/vuepress-plugin-sidebar/master/LICENSE)
