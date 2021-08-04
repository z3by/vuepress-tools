---
author:
  avatar: https://avatars.githubusercontent.com/u/17905150?v=4
  email: ikangxu@outlook.com
  name: IKangxu
  url: null
  username: IKangXu
bugs: https://github.com/IKangXu/vuepress-theme-ic/issues
category: theme
date: '2020-06-03T03:26:33.352Z'
deprecated: false
description: ':tada::tada::tada: A note-style vuepress blog theme with simple, clear
  and practical features for the purpose'
downloads: null
homepage: https://github.com/IKangXu/vuepress-theme-ic#readme
keywords:
- vuepress
license: false
maintainers: null
name: vuepress-theme-ic
npm: https://www.npmjs.com/package/vuepress-theme-ic
publisher:
  avatar: null
  email: ikangxu@qq.com
  name: null
  url: null
  username: kangxu
repository: https://github.com/IKangXu/vuepress-theme-ic
score: 0.29141406972333217
stars: 5
unstable: false
version: 1.0.1
watchers: 5

---

:tada::tada::tada: A note-style vuepress blog theme with simple, clear and practical features for the purpose

#### 主题部分样式展示

![Loading](
https://ikangxu-static.oss-cn-beijing.aliyuncs.com/images/vuepress-theme-ic/loading.gif)

![Note](
https://ikangxu-static.oss-cn-beijing.aliyuncs.com/images/vuepress-theme-ic/mobile.jpg)

![Note](
https://ikangxu-static.oss-cn-beijing.aliyuncs.com/images/vuepress-theme-ic/pc.jpg)

#### 使用方式

将vuepress-theme-ic项目下载下来，执行`yarn link`

然后新建一个博文比较项目，执行`yarn link vuepress-theme-ic`,将主题引入项目中

然后配置`config.js`

```js
module.exports = {
  // 博客名
  title: "Narrow road meet, code revere win.",
  // 博客描述
  description: "码,需清心寡欲",
  theme: require.resolve("vuepress-theme-ic/theme/"), // 引入主题
  themeConfig: {
    // 设置logo
    logo: "/ikangxu.jpg",
    author: "IKangXu",
    searchMaxSuggestions: 20,
    repo: "IKangXu/vuepress-theme-ic",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "Last Updated",
    navs: [
      // 默认为左侧底部设计
      { text: "关于", link: "/notes/about", blank: false },
      { text: "友链", link: "/notes/friendLink", blank: false },
      { text: "RSS", link: "http://ikangxu.cn/rss.xml", blank: true }
    ],
    noteConfig: {
      bg: "/bg.jpg",
      // 来创建左侧菜单
      nav: [
        {
          text: "随笔", // 左侧栏名称
          icon: "",
          frontmatter: {
            // 指定frontmatter内容
            id: "other", // 指向vuepress-plugin-blog中的frontmatter
            key: "essay" // Markdown中的frontmatter配置的categories值
          }
        },
        {
          text: "语言",
          icon: "",
          frontmatter: { id: "language" }, // 通过这种方式进行分组设置
          open: true,
          items: [
            {
              text: "Java",
              icon: "",
              frontmatter: { key: "Java" },
              items: [
                {
                  text: "SpringBoot",
                  icon: "",
                  frontmatter: { key: "SpringBoot" }
                },
                {
                  text: "SpringCloud",
                  icon: "",
                  frontmatter: { key: "SpringCloud" }
                }
              ]
            },
            {
              text: "JavaScript",
              icon: "",
              frontmatter: { key: "JavaScript" },
              items: [
                {
                  text: "ECMAScript6",
                  icon: "",
                  frontmatter: { key: "ECMAScript6" }
                },
                {
                  text: "Vue",
                  icon: "",
                  frontmatter: { key: "Vue" }
                },
                {
                  text: "React",
                  icon: "",
                  frontmatter: { key: "React" }
                }
              ]
            }
          ]
        }
      ],
      // 联系我设置内容
      contact: {
        enabled: true,
        items: [
          {
            text: "QQ",
            link: "http://wpa.qq.com/msgrd?v=3&uin=1454900516&site=qq&menu=yes",
            icon: "iconqq"
          },
          {
            text: "GitHub",
            link: "https://github.com/IKangXu",
            icon: "icongithub"
          }
        ]
      }
    },
    comment: {
      choosen: "valine",
      // options选项中的所有参数，会传给Valine的配置
      options: {
        el: "#valine-ic-comment",
        appId: "xxxx",
        appKey: "xxxx",
        notify: false,
        visitor: true,
        placeholder: "just go go"
      },
      container: ".valine-ic-comment" // 默认即可
    },
    sponsor: ["/alipay.jpg", "/Tenpay.png"],
    footer: {
      icp: {
        val: "苏ICP备19025415号",
        link: "http://beian.miit.gov.cn/"
      }, // ICP备案
      startYear: "2019", // 开始日期
      psr: {
        val: "", //"苏公网安备 XXXXX号",
        link:
          "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=XXXXX&token=62a24040-710d-473b-89b8-26de6e91d20b"
      } // 公安备案
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      "@vuepress/plugin-blog",
      {
        frontmatters: [
          {
            id: "other",
            keys: ["other"],
            path: "/other/"
          },
          {
            id: "language",
            keys: ["language"],
            path: "/language/"
          }
        ]
      }
    ],
    "@vuepress/medium-zoom",
    [
      "@ikangxu/vuepress-plugin-rss", // 需要下载仓库中的vuepress-plugin-rss
      {
        base_url: "/", // required
        site_url: "http://www.ikangxu.cn/", // required
        copyright: "2020 IKangXu", // optional
        // filter some post
        filter: frontmatter => {
          return [true | false];
        },
        // How much articles
        count: 20
      }
    ]
  ]
};
```

首页配置

```yaml
---
home: true
heroImage: /logo.png
features:
- author: Steve Jobs
  details: The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.
- author: Steve Jobs
  details: Stay hungry, stay foolish.
- author: Werner Vogels
  details: You build it, you run it.
- author: Linus Torvalds
  details: Talk is cheap. Show me the code.
- author: Facebook
  details: Go big or go home.
- author: Facebook
  details: Done is better than perfect.
- author: 马云
  details: Today is cruel. Tomorrow is crueler. And the day after tomorrow is beautiful.
- author: 马云
  details: If you don't give up, you still have a chance. And, when you are small, you have to be very focused and rely on your brain, not your strength.
sponsor: false
---
```

文章中相关自定义头设置

```text
sponsor: false   ### 赞赏功能的开启操作
comment: true   ### 评论功能的开启
reprint:   ### 文章出处
    author: 程序猿DD-翟永超
    title: Spring Boot属性配置文件详解
    link: http://blog.didispace.com/springbootproperties/
```

附图本人

![目录图](https://ikangxu-static.oss-cn-beijing.aliyuncs.com/images/vuepress-theme-ic/menu.jpg)
