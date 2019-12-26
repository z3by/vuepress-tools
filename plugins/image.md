---
archive_url: https://api.github.com/repos/im/vuepress-plugin-image/{archive_format}{/ref}
archived: false
assignees_url: https://api.github.com/repos/im/vuepress-plugin-image/assignees{/user}
blobs_url: https://api.github.com/repos/im/vuepress-plugin-image/git/blobs{/sha}
branches_url: https://api.github.com/repos/im/vuepress-plugin-image/branches{/branch}
clone_url: https://github.com/im/vuepress-plugin-image.git
collaborators_url: https://api.github.com/repos/im/vuepress-plugin-image/collaborators{/collaborator}
comments_url: https://api.github.com/repos/im/vuepress-plugin-image/comments{/number}
commits_url: https://api.github.com/repos/im/vuepress-plugin-image/commits{/sha}
compare_url: https://api.github.com/repos/im/vuepress-plugin-image/compare/{base}...{head}
contents_url: https://api.github.com/repos/im/vuepress-plugin-image/contents/{+path}
contributors_url: https://api.github.com/repos/im/vuepress-plugin-image/contributors
created_at: '2019-09-16T10:56:02Z'
default_branch: master
deployments_url: https://api.github.com/repos/im/vuepress-plugin-image/deployments
description: "\U0001F34B \U0001F34C \U0001F349\u4F18\u5316vuepress image \u6548\u679C\
  \uFF0C\u652F\u6301\u8BBE\u7F6E\u5BBD\u9AD8, \u56FE\u7247loading, \u61D2\u52A0\u8F7D"
disabled: false
downloads_url: https://api.github.com/repos/im/vuepress-plugin-image/downloads
events_url: https://api.github.com/repos/im/vuepress-plugin-image/events
fork: false
forks: 0
forks_count: 0
forks_url: https://api.github.com/repos/im/vuepress-plugin-image/forks
full_name: im/vuepress-plugin-image
git_commits_url: https://api.github.com/repos/im/vuepress-plugin-image/git/commits{/sha}
git_refs_url: https://api.github.com/repos/im/vuepress-plugin-image/git/refs{/sha}
git_tags_url: https://api.github.com/repos/im/vuepress-plugin-image/git/tags{/sha}
git_url: git://github.com/im/vuepress-plugin-image.git
has_downloads: true
has_issues: true
has_pages: true
has_projects: true
has_wiki: true
homepage: http://tangxiaomi.top/vuepress-plugin-image/
hooks_url: https://api.github.com/repos/im/vuepress-plugin-image/hooks
html_url: https://github.com/im/vuepress-plugin-image
id: 208777386
issue_comment_url: https://api.github.com/repos/im/vuepress-plugin-image/issues/comments{/number}
issue_events_url: https://api.github.com/repos/im/vuepress-plugin-image/issues/events{/number}
issues_url: https://api.github.com/repos/im/vuepress-plugin-image/issues{/number}
keys_url: https://api.github.com/repos/im/vuepress-plugin-image/keys{/key_id}
labels_url: https://api.github.com/repos/im/vuepress-plugin-image/labels{/name}
language: JavaScript
languages_url: https://api.github.com/repos/im/vuepress-plugin-image/languages
license: null
merges_url: https://api.github.com/repos/im/vuepress-plugin-image/merges
milestones_url: https://api.github.com/repos/im/vuepress-plugin-image/milestones{/number}
mirror_url: null
name: vuepress-plugin-image
node_id: MDEwOlJlcG9zaXRvcnkyMDg3NzczODY=
notifications_url: https://api.github.com/repos/im/vuepress-plugin-image/notifications{?since,all,participating}
open_issues: 0
open_issues_count: 0
owner:
  avatar_url: https://avatars2.githubusercontent.com/u/12029165?v=4
  events_url: https://api.github.com/users/im/events{/privacy}
  followers_url: https://api.github.com/users/im/followers
  following_url: https://api.github.com/users/im/following{/other_user}
  gists_url: https://api.github.com/users/im/gists{/gist_id}
  gravatar_id: ''
  html_url: https://github.com/im
  id: 12029165
  login: im
  node_id: MDQ6VXNlcjEyMDI5MTY1
  organizations_url: https://api.github.com/users/im/orgs
  received_events_url: https://api.github.com/users/im/received_events
  repos_url: https://api.github.com/users/im/repos
  site_admin: false
  starred_url: https://api.github.com/users/im/starred{/owner}{/repo}
  subscriptions_url: https://api.github.com/users/im/subscriptions
  type: User
  url: https://api.github.com/users/im
private: false
pulls_url: https://api.github.com/repos/im/vuepress-plugin-image/pulls{/number}
pushed_at: '2019-09-17T11:53:20Z'
releases_url: https://api.github.com/repos/im/vuepress-plugin-image/releases{/id}
score: 17.60058
size: 495
ssh_url: git@github.com:im/vuepress-plugin-image.git
stargazers_count: 0
stargazers_url: https://api.github.com/repos/im/vuepress-plugin-image/stargazers
statuses_url: https://api.github.com/repos/im/vuepress-plugin-image/statuses/{sha}
subscribers_url: https://api.github.com/repos/im/vuepress-plugin-image/subscribers
subscription_url: https://api.github.com/repos/im/vuepress-plugin-image/subscription
svn_url: https://github.com/im/vuepress-plugin-image
tags_url: https://api.github.com/repos/im/vuepress-plugin-image/tags
teams_url: https://api.github.com/repos/im/vuepress-plugin-image/teams
trees_url: https://api.github.com/repos/im/vuepress-plugin-image/git/trees{/sha}
updated_at: '2019-09-17T11:55:40Z'
url: https://api.github.com/repos/im/vuepress-plugin-image
watchers: 0
watchers_count: 0
---

# vuepress-plugin-image



## vuepress 配置

* 安装依赖

```bash
npm i vuepress-plugin-image -D
```

```js
// config.js
module.exports = { 
    plugins: [
        ['image']
    ]
} 
```

## 设置图片大小  
[markdown-it-imsize](https://www.npmjs.com/package/markdown-it-imsize)

```
![](https://picsum.photos/300/150/?random  =200x100)
```

![](https://picsum.photos/300/150/?random  =200x100)


## 图片懒加载
[markdown-it-image-lazy-loading](https://www.npmjs.com/package/markdown-it-image-lazy-loading)
支持Chrome 75以上的 版本 [原生图像延迟加载](https://addyosmani.com/blog/lazy-loading/)

```html
<!-- <img src="example.png" alt="" title="image title" loading="lazy"> -->
```

![](https://picsum.photos/400/200/?random  =200x100)


## 图片loading 动画
[markdown-it-image-loading](https://www.npmjs.com/package/markdown-it-image-loading)

```js
// config.js
module.exports = { 
    plugins: [
        ['image'],
        {
            loading: true,
            loadingSrc: 'http://tangxiaomi.top/markdown-it-image-loading/loading.gif',
            loadingWidth: 30,
            loadingHeight: 30,
            minWidth: 100,
            minHeight: 100,
            bgColor: '#000'
        }
    ]
} 
```

## 参数

* `loading` 是否显示loading
    - 默认：true
* `loadingSrc` loading 图片 src 
* `loadingWidth` : loading 图片宽度
    - 默认：30
* `loadingHeight` : loading 图片高度
    - 默认：30
* `minWidth` : 图片最小宽度 `(图片的最小高度)`
    - 默认：100  
* `minHeight` : 图片最小高度 `(图片的最小宽度)`
    - 默认：100 
* `bgColor` : 图片背景颜色 `(图片的背景颜色)`
    - 默认：''  

### markdown 单独设置 loading 样式

```
![](/){loadingSrc=http://tangxiaomi.top/markdown-it-image-loading/loading.gif loadingWidth=50 loadingHeight=50 minWidth=200 minHeight=200  bgColor=#ccc} 
```
![](/){loadingSrc=http://tangxiaomi.top/markdown-it-image-loading/loading.gif loadingWidth=50 loadingHeight=50 minWidth=200 minHeight=200  bgColor=#ccc} 

