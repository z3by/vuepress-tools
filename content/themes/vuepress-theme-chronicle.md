---
author:
  avatar: https://avatars.githubusercontent.com/u/69201983?v=4
  email: null
  name: daylily
  url: null
  username: re-xyr
bugs: https://github.com/re-xyr/vuepress-theme-chronicle/issues
category: themes
date: '2021-07-05T05:33:03.590Z'
deprecated: false
description: A typographic theme for vuepress.
downloads: null
homepage: https://github.com/re-xyr/vuepress-theme-chronicle#readme
keywords: null
license: MIT License
maintainers: null
name: vuepress-theme-chronicle
npm: https://www.npmjs.com/package/vuepress-theme-chronicle
publisher:
  avatar: null
  email: xy.r@outlook.com
  name: null
  url: null
  username: daylily
repository: https://github.com/re-xyr/vuepress-theme-chronicle
score: 0.46881146797678097
stars: 4
unstable: false
version: 1.0.1
watchers: 4

---

# Chronicle

> **Chronicle** *n.*
> 
> a factual written account of important or historical events in the order of their occurrence.
 
---

### English ([中文](#中文-english))

Chronicle is a typographic blog theme for [vuepress](https://github.com/vuejs/vuepress). You can go to [the example website](https://xn--i2r.xn--rhqv96g/2021/06/25/chronicle-theme/#english-%E4%B8%AD%E6%96%87) to read the documentation too.

Vuepress is a powerful static site generator, and [vuepress-blog-plugin](https://github.com/vuepress/vuepress-plugin-blog) brings the capability of creating blog sites with vuepress. However, despite the functionality, users need a theme that shape the style of their sites. Sadly, not all can meet *[good typography criteria](https://practicaltypography.com)*.

The [default, official blog theme](https://github.com/vuepress/vuepress-theme-blog), for example, contains a few typographic flaws that spoils the first impression. The navbar is visibly not well aligned; the abuse of `box-shadow` fails to create the inteded simplicity, but rather eliminates the effect of white space; the color of the link is an overly distracting light purple. Not to mention, some other themes with high star counts on GitHub [are just hopelessly miserable](https://github.com/zhhlwd/vuepress-theme-indigo-material).

This kind of phenomenon can be attributed to the idea that showing off web frontend skills is prioritized over the overall typographic consistency of the document. Chronicle tries not to do so by not applying too many “visible” style rules, such as `background`s, `border-radius`es, or `box-shadow`s, but instead make heavy use of white spaces and font features.

Besides, vuepress lacks a theme that creates a paper-like reading experience. To achieve this, Chronicle uses the well-designed open-source serif font [Source Han Serif（思源宋体）](https://github.com/adobe-fonts/source-han-serif). Such a style is often described as “elegant” or “minimalist”; I hope that this theme can convey similar feelings to the reader.

---

I shall mention that Chronicle is a theme that was initially created for my personal blog. Hence, it is aggressively opinionated, with minimal options. For instance, it does not support searching, newsletter service, customizable pagination element, displaying article summaries, displaying author name or displaying author location (?!). To your disappointment, Chronicle does not support comment sections too, because current comment services are all terrible to use, and does not look good with the theme.

To use Chronicle to create a blog site, first create a vuepress site with the following structure and install the theme at the root by `npm install --save-dev vuepress-theme-chronicle`.

```
/
  .vuepress/
    public/
    config.js
  posts/
    2021-06-24-my-first-post.md
    ...
```

Edit the `config.js` to contain the following content. You can also include other configuration items from the [vuepress documentation](https://vuepress.vuejs.org/config/#basic-config).

```js
module.exports = {
  theme: 'vuepress-theme-chronicle',
  themeConfig: {
    // Navbar (optional, defaults are link to posts and categories)
    nav: [
      // Displayed text and href
      { text: 'about', link: '/about.html' },
      { text: 'post', link: '/' },
      { text: 'categories', link: '/category/' },
    ],
    // Copyright information
    copy: {
      // Copyright holder
      name: 'daylily',
      // Link to further information
      link: '/about.html#copy',
      // Copyright start year
      beginYear: '2019',
    },
    // Optional, include if you want RSS/Atom/JSON feed enabled.
    feed: {
      // Your domain.
      canonical_base: 'https://xn--i2r.xn--rhqv96g/',
    },
  },
}
```

> **By the way**:
> - Everything stored under the `.vuepress/public/` directory will be accessible from the site root when the site is compiled.
> - You can also furthermore customize your vuepress site by adding your own theme on top of Chronicle. For this part of information, go to the [vuepress documentation](https://vuepress.vuejs.org/theme/writing-a-theme.html).

To create posts, add files with names in the format `YYYY-MM-DD-this-is-article-title.md` under `posts/`, and edit the frontmatter as follows.

```yaml
---
title: This is Article Title
date: YYYY-MM-DD
category:
  - Category1
  - Category2
notPost: true # if set, will not display time and category.
hidden: true # if set, will not be present in posts list.
---
```

---

### 中文 ([English](#english-中文))

Chronicle 是一个排版「正常」的 vuepress 主题。你可以去 Chronicle 的[示例网站](https://xn--i2r.xn--rhqv96g/2021/06/25/chronicle-theme/#%E4%B8%AD%E6%96%87-english)阅读这部分文档。

Vuepress 是一个强大的静态页面生成器，而 [vuepress-blog-plugin](https://github.com/vuepress/vuepress-plugin-blog) 使 vuepress 支持博客写作。然而，用户还是需要为他们的网站找一个主题。不幸的是，许多主题都没有[好的排版](https://practicaltypography.com)。

排版细节的疏忽影响了读者观感的例子很多，[默认的官方主题](https://github.com/vuepress/vuepress-theme-blog)就是一个。它的导航栏没有好好对齐；滥用 `box-shadow` 没有显得页面简洁反而带回了拥挤感；链接的颜色则使用了过于刺眼的亮紫色。另外一些[彻底没希望](https://github.com/zhhlwd/vuepress-theme-indigo-material)的主题也在 GitHub 上获得了更多的 stars。

这种现象可以归功于开发人员重视炫耀网页前端技术而轻视文档的排版和谐性。他们可能会应用过多的「显眼」的样式，包括背景、圆角和阴影。Chronicle 则试图通过转而使用大量的留白和字体特性来避免这种状况。

另外，vuepress 也缺少类似纸张阅读体验的主题。Chronicle 使用了整洁的开源字体[思源宋体（Source Han Serif）](https://github.com/adobe-fonts/source-han-serif)来传达优雅和简洁感，希望读者能有好的阅读体验。

---

请注意，Chronicle 最初是我为个人博客写的主题。因此，它的可配置项非常少。它不支持文章搜索、邮件提醒更新、自定义分页元素，也不支持显示文章预览、作者名和作者所处的位置（？！）。很不幸，Chronicle 也不支持评论。现在的评论服务用起来体验都很糟糕，而且和 Chronicle 的样式搭配不好。

要用 Chronicle 搭建一个博客，请先创建一个如下结构的目录，然后在目录下用 `npm install --save-dev vuepress-theme-chronicle` 来安装主题。

```
/
  .vuepress/
    public/
    config.js
  posts/
    2021-06-24-my-first-post.md
    ...
```

接着把下面的内容写进 `.vuepress/config.js`。你也可以加入其他 [vuepress 文档](https://vuepress.vuejs.org/config/#basic-config)中的元素。

```js
module.exports = {
  theme: 'vuepress-theme-chronicle',
  themeConfig: {
    // 导航栏 (可选，默认是到文章列表和标签列表)
    nav: [
      // 显示的文字和链接
      { text: '关于我', link: '/about.html' },
      { text: '文章', link: '/' },
      { text: '标签', link: '/category/' },
    ],
    // 版权信息
    copy: {
      // 作者
      name: 'daylily',
      // 链到更多版权信息的链接
      link: '/about.html#copy',
      // 版权起始年份
      beginYear: '2019',
    },
    // 可选的 Feed
    feed: {
      // 你的域名
      canonical_base: 'https://xn--i2r.xn--rhqv96g/',
    },
  },
}
```

> **提示**:
> - 在 `.vuepress/public/` 路径下的文件在网站编译后可以直接从根目录访问。
> - 你可以自定义你的主题来扩展 Chronicle。参见 [vuepress 文档](https://vuepress.vuejs.org/theme/writing-a-theme.html)。

要新建一篇文章，在 `posts/` 下新建文件名格式为 `YYYY-MM-DD-this-is-article-title.md` 的文件并如此编辑 frontmatter：

```yaml
---
title: 这是文章标题
date: YYYY-MM-DD
category:
  - 标签1
  - 标签2
notPost: true # 如果设置了则不会显示日期和标签
hidden: true # 如果设置了则不会显示在文章列表里
---
```
