---
author:
  avatar: https://avatars.githubusercontent.com/u/24218764?v=4
  email: null
  name: JSShou
  url: null
  username: xuzhongpeng
bugs: https://github.com/xuzhongpeng/vuepress-plugin-gitalk/issues
category: plugin
date: '2019-06-13T01:42:32.465Z'
deprecated: false
description: VuePress plugin for creating Gitalk automation
downloads: null
homepage: https://github.com/xuzhongpeng/vuepress-plugin-gitalk#readme
keywords:
- vuepress
- plugin
- gittalk
license: MIT License
maintainers: null
name: vuepress-plugin-gitalk
npm: https://www.npmjs.com/package/vuepress-plugin-gitalk
publisher:
  avatar: null
  email: xuzhongpeng@foxmail.com
  name: null
  url: null
  username: xuzhongpeng
repository: https://github.com/xuzhongpeng/vuepress-plugin-gitalk
score: 0.09883454730099642
stars: 2
unstable: true
version: 0.1.3
watchers: 2

---


## 提醒

此插件目前需要配合[vuepress-theme-reform](https://github.com/xuzhongpeng/vuepress-theme-reform)使用，后续可能会发普适版，如果需要针对自己的项目使用，可自行查看源码。

## 配置

在config.js中配置
```
{
  themConfig:{
    ...
    gitalk: {
      // gitalk的主要参数
      clientID: `your clientID`,
      clientSecret: `your clientSecret`,
      repo: `your repo`,
      owner: "yourname",
      admin: ["yourname"],
      accessToken: 'your accessToken ',
      labelRule: `(title,path)=> {
        let paths=path.split('/')
        if(paths.length>0){
          let res = paths.pop()
          if(res===''){
            res=paths.pop()
          }
          res = res.slice(-50)
          return res
        }else{
          return title
        }
      }`
    },
    ...
  }
}
```
- clientID： 你的clientID，在github的Settings/Developer settings/OAuth Apps下创建获取
- clientSecret：  你的clientSecret，在github的Settings/Developer settings/OAuth Apps下创建获取
- repo: 你的评论存放的仓库名，如我的为xuzhongpeng.github.io
- owner: 你的github账户名
- admin: 评论下展示的名字
- accessToken: 可选，用于自动化创建gitalk时发送请求的taken，在github的Settings/Developer settings/Personal access tokens下创建获取
- labelRule: 评论请求及自动化创建评论时的回调函数，有回调函数的原因在于gitalk标签只能有50个字符的限制，回调函数的第一个参数为当前页面的标题，第二个参数当前页面的路径，返回创建的标签名

## 使用

下载安装插件
```
yarn add vuepress-plugin-gitalk # npm i vuepress-plugin-gitalk -D
```
在package.json中的scripts中加入
```
{
  "scripts":{
    ...
    "gitalk": "vuepress gitalk ./docs",
    ...
  }
}
```
执行
```
npm run gitalk
```
即可输出自动化初始化评论的结果

## 错误处理
如果自动化创建评论时输出
```
接口返回数据{"message":"Bad credentials","documentation_url":"https://developer.github.com/v3"}
xxx 创建失败
```
报这个错误大概率是accessToken失效了，这时需要重新到github的Settings/Developer settings/Personal access tokens下创建获取并替换

项目地址：[vuepress-theme-reform](https://github.com/xuzhongpeng/vuepress-theme-reform)

效果展示： [我的博客](http://JSShou.cn)