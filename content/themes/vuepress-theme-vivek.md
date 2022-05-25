---
author:
  avatar: https://avatars.githubusercontent.com/u/57286975?v=4
  email: null
  name: cavalheiro
  url: null
  username: eddievandeer
bugs: https://github.com/eddievandeer/vuepress-theme-vivek/issues
category: themes
date: '2022-03-02T08:19:04.315Z'
deprecated: false
description: "A simple style vuepress theme. \u4E00\u4E2A\u7B80\u7EA6\u98CE\u683C\u7684\
  vuepress\u4E3B\u9898\u3002"
downloads: null
homepage: https://github.com/eddievandeer/vuepress-theme-vivek#readme
keywords:
- documentation
- vue
- vuepress
- generator
- theme
- blog
license: false
maintainers: null
name: vuepress-theme-vivek
npm: https://www.npmjs.com/package/vuepress-theme-vivek
publisher:
  avatar: null
  email: eddievandeer@163.com
  name: null
  url: null
  username: cavalheiro
repository: https://github.com/eddievandeer/vuepress-theme-vivek
score: 0.49579989769885735
stars: 1
unstable: false
version: 1.2.2
watchers: 1

---

# 介绍
这是一款简约风格的vuepress主题，实现了响应式布局，可适配 pc 、平板、移动设备

通过 `docs/.vuepress/config.js` 文件可进行多种（在原版的基础上新增的）自定义属性的配置

目前能进行自定义的部分还比较有限，将在后续的开发中更新更多自定义功能，目标是打造一个高度自定义化的主题，能够让用户自行组合出属于自己的独一无二的博客网站



# 快速开始

### 安装
```bash
npm i vuepress-theme-vivek -D
# OR yarn add vuepress-theme-vivek -D
```



### 使用

在 `docs/.vuepress/config.js` 文件中输入如下配置：

```js
module.exports = {
  theme: 'vuepress-theme-vivek',
  themeConfig: {
    // Please head documentation to see the available options.
  }
}
// or
module.exports = {
  theme: 'vivek',
  themeConfig: {
    // Please head documentation to see the available options.
  }
}
```



# 预览

## Demo

[Vivek的博客小站](https://eddievandeer.github.io/)

## 截图

![image-20211015183319792](http://upyun.cavalheiro.cn/images/image-20211015183319792.png)

![image-20211017163524927](http://upyun.cavalheiro.cn/images/image-20211017163524927.png)

![image-20211015185640836](http://upyun.cavalheiro.cn/images/image-20211015185640836.png)



# 主题自定义配置

本主题使用 `.vuepress/config.js` 文件的 `themeConfig` 对象，和 `.md` 文件的 `frontmatter` 进行自定义配置，因此对 `vuepress` 官方提供的各种配置项大部分也都是支持的。



## themeConfig 对象

由于配置项较多，建议将 `themeConfig` 对象的配置单独放置在一个文件，例如：

~~~js
// .vuepress/config.js 文件
module.exports = {
    // ...
    theme: 'vivek',
    themeConfig: {
        themeConfig: require('./themeConfig'),
    }
}

// .vuepress/themeConfig.js 文件
module.exports = {
    author: 'Vivek',
    license: 'CC BY-NC-SA 4.0',
    // ...
}
~~~



### background

- 类型: `string`
- 默认值: `undefined`

配置主页的背景图片



### logo

- 类型: `string`
- 默认值: `undefined`

配置在侧边栏中展示的 logo 图片



### author

- 类型: `string`
- 默认值: `undefined`

配置作者的信息，主要用于每篇文章末尾的授权信息部分



### license

- 类型: `string`
- 默认值: `'CC BY-NC-SA 4.0'`

配置当前博客文章默认使用的协议（也可在 `frontmatter` 中单独对某一文件进行配置）



### nav

- 类型: `Array`
- 默认值: `undefined`

配置顶部导航栏的路由项，与 `vuepress` 的配置一致



### filters

- 类型: `Array`
- 默认值: `undefined`

过滤特定分类的文章（ `frontmatter` 中 `categories` 的值），使该分类下的文章不展示在首页的所有文章的列表中



### valine

- 类型: `boolean`
- 默认值: `undefined`

设置是否开启 `Valine`



### appId

- 类型: `string`
- 默认值: `undefined`

配置从 `LeanCloud` 中得到的 `appId` 

> [获取appId 和 appKey](https://valine.js.org/quickstart.html)



### appKey

- 类型: `string`
- 默认值: `undefined`

配置从 `LeanCloud` 中得到的 `appKey` 

> [获取appId 和 appKey](https://valine.js.org/quickstart.html)



### externalLinks

- 类型: `Array`
- 默认值: `undefined`

外链配置，这里配置的外链将会显示在顶部栏的右侧，每一项的格式为：

~~~js
externalLinks: [
    {
        text: '标题文字',
        link: '外链url',
        target: '_blank'	// 和a标签的target属性一致
    },
]
~~~



### footer

- 类型: `Object`
- 默认值: `undefined`

配置页脚信息



### footer.createYear

- 类型: `number`
- 默认值: `undefined`

博客网站创建年份



### footer.createYear

- 类型: `number|string`
- 默认值: `Present`

博客网站创建年份，可以是数字的年份，也可以是字符串的 `Present` 等



### footer.beian

- 类型: `Object`
- 默认值: `undefined`

备案信息，由两个属性 `link` 和 `context` 组成，分别代表：**点击备案信息跳转的url** 和 **备案号** ，配置参考如下：

~~~js
beian: {
    link: 'https://beian.miit.gov.cn/#/Integrated/index',
    context: '闽ICP备2021005292号-1'
},
~~~



### footer.support

- 类型: `string`
- 默认值: `undefined`

服务提供商信息，支持html模板字符串，示例：

~~~js
support: `<span>本网站由</span>
			<a href="https://www.upyun.com/" target="_blank">
			<img height="30px"
				src="https://xxx.net/upyun-logo.png"
				alt="">
			</a>
		  <span>提供 <b>CDN</b> 加速</span>`,
~~~

​	

## frontmatter

### title

- 类型: `string`
- 默认值: `''`

当前文章的标题， `.vuepress/README.md` 中的 `title` 属性用于展示在首屏中心部分



### postTime

- 类型: `string`
- 默认值: `''`

当前文章的发布时间，将会显示在文章列表和文章内容中，并且默认以该时间排序，最晚发布的显示在最前面



### license

- 类型: `string`
- 默认值: `'CC BY-NC-SA 4.0'`

配置当前文章使用的协议，若不配置则使用 `themeConfig.license` 的属性值



### categories

- 类型: `Array`
- 默认值: `undefined`

设置该文章所属的分类，只支持两级分类，数组第一项为一级分类，第二项为二级分类，若只有一项则为一级分类



### tags

- 类型: `Array`
- 默认值: `undefined`

设置该文章所属的标签，同时也可用于优化搜索结果



## 特殊页设置

本主题提供几个特殊页，供用户自由选择搭配



### 分类和标签

分类和标签属于特殊页，需要分别在 `docs` 目录下创建 `tags` 和 `categories` 目录，目录内只需要一个 `README.md` 文件，并配置如下 `frontmatter` ：

~~~yaml
# docs/categories/README.md
categoriesPage: true

# docs/tags/README.md
tagsPage: true
~~~



### 列表

列表支持用户将某一个文件夹下的所有文件生成为文章列表页面，生成路由为 `/文件夹名` ，并可以在 `nav` 中配置路由作为顶部栏导航栏的项

使用列表只需要在文件夹下的 `README.md` 配置如下 `frontmatter` ：

~~~yaml
list: true
~~~

列表将会在顶部展示 `README.md` 中的其他内容，如标题、正文、引用等



# TODO List

- [x] 自定义文章末尾授权部分
- [ ] 置顶功能，且可以按数字大小指定置顶顺序
- [ ] 明暗风格切换
- [ ] 文章背景图片自定义（FrontMatter设置）
- [ ] 在页面上添加可操作部分样式（如透明度）的控制台
- [ ] 可配置音乐播放器
