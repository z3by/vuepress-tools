---
author:
  avatar: https://private-avatars.githubusercontent.com/u/32794429?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU2MjAsIm5iZiI6MTczNDY1NDQyMCwicGF0aCI6Ii91LzMyNzk0NDI5In0.LZmuAVZE2a4oyhZMR49J1iqqBzwyKO7P7vNdLINVrIs&v=4
  email: null
  name: '9240'
  url: null
  username: '9240'
bugs: https://github.com/9240/vuepress-theme-similar-yilia/issues
category: themes
date: '2019-11-07T10:46:34.845Z'
deprecated: false
description: "vuepress\u7C7Bhexo\u7684yilia\u4E3B\u9898"
downloads: null
homepage: https://github.com/9240/vuepress-theme-similar-yilia#readme
keywords:
- documentation
- vuepress
- generator
- yilia
license: MIT License
maintainers: null
name: vuepress-theme-similar-yilia
npm: https://www.npmjs.com/package/vuepress-theme-similar-yilia
publisher:
  avatar: null
  email: 992027995@qq.com
  name: null
  url: null
  username: z9240
repository: https://github.com/9240/vuepress-theme-similar-yilia
score: 0.43882140707458694
stars: 0
unstable: false
version: 1.1.4
watchers: 0

---

# vuepress类Hexo的yilia主题

## 使用
1. <code>npm i vuepress-theme-similar-yilia</code>
2. 在 <code>.vuepress/config.yml</code> 中提供一个 theme 选项：入当前目录的config.yml
3. 基本配置和[vuepress默认配置](https://www.vuepress.cn/default-theme-config/#%E4%B8%BB%E9%A1%B5-homepage)差不多
4. [YAML front matter](https://jekyllrb.com/docs/frontmatter/)语法部分和hexo配置差不多
## 为什么
18年5月29我用hexo脚手架在github pages上搭建了一个博客,当默认的主题不是很好看,于是在网上搜罗一圈发现[yilia](git@github.com:litten/hexo-theme-yilia.git)主题挺好看的,于是就用起了这个主题。一段时间后,想修改主题,就按照作者的说明进行了修改,但是打包时出现了问题,原来webpack版本太低。我就直接在打包后的代码上做修改,但是很不方便。几天后,我把该主题的所有依赖都更新到最新,修改打包配置,调试通过后提交了dev分支到作者的git仓库,顺便看了一下代码提交情况,发现最近一次提交在17年11月15,而且打包问题已经有人提交了Pull requests,但没有合并。于是想用尤大的[vuepress](https://www.vuepress.cn/)实现这样一个主题。
## 说干就干
刚开始准备完全自己写,写着写着发现[vuepress](https://www.vuepress.cn/)的自定义主题真的是完完全全的自定义,Markdown的样式都没有,而且[vuepress](https://www.vuepress.cn/)默认主题的响应式做的非常好,于是决定这个基础上做了修改,就有了这个。
