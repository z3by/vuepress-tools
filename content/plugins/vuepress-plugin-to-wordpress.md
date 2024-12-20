---
author:
  avatar: https://private-avatars.githubusercontent.com/u/24477920?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU3NDAsIm5iZiI6MTczNDY1NDU0MCwicGF0aCI6Ii91LzI0NDc3OTIwIn0.YFNYxwt394CFgL5nEbTEl7MI-6HG-vvZ5_HbeSPjKxM&v=4
  email: null
  name: lzw.
  url: null
  username: lzwdot
bugs: https://github.com/lzwdot/vuepress-plugin-to-wordpress/issues
category: plugins
date: '2022-02-05T06:58:21.371Z'
deprecated: false
description: A vuepress plugin uses XmlRpc to synchronize Vuepress content to WordPress
downloads: null
homepage: https://github.com/lzwdot/vuepress-plugin-to-wordpress
keywords:
- vuepress-plugin-to-wordpress
license: false
maintainers: null
name: vuepress-plugin-to-wordpress
npm: https://www.npmjs.com/package/vuepress-plugin-to-wordpress
publisher:
  avatar: null
  email: lzwdot@qq.com
  name: null
  url: null
  username: lzwdot
repository: https://github.com/lzwdot/vuepress-plugin-to-wordpress
score: 0.555335387287681
stars: 1
unstable: true
version: 1.0.0-beta.14
watchers: 1

---

## Vuepress Plugin To WordPress

A plugin uses XmlRpc to synchronize Vuepress content to
WordPress, implements all the interfaces in [XML-RPC_WordPress_API](http://codex.wordpress.org/XML-RPC_WordPress_API).

### use:

```js
plugins: [
  //...
     ['vuepress-plugin-to-wordpress', {
       username: 'root',
       password: 'root',
       options: {
         https: false,
         host: 'localhost',
         port: 80,
         path: "/wordpress/xmlrpc.php"
       },
       onPrepared: (wpRpc, app) => {
         app.pages.forEach(page => {
           const content = {
             post_author: 1,
             post_type: 'post',
             post_title: page.frontmatter.title,
             post_content: page.frontmatter.content,
           }
           wpRpc.newPost(1, content).send((err, data) => {
             console.log(err, data)
             // ...
           })
         })
       }
     }]
  //...
]
```

Refer to tests/wordpress-test.js for other API interfaces

### test

```shell
npm run test
```