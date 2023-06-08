---
author:
  avatar: https://avatars.githubusercontent.com/u/24841685?v=4
  email: qinwencheng719@gmail.com
  name: qinwencheng
  url: null
  username: qinwencheng
bugs: https://github.com/qinwencheng/vuepress-plugin-run-codeblock/issues
category: plugins
date: '2022-04-06T16:37:37.744Z'
deprecated: false
description: run simple code in vuepress markdowm containner
downloads: null
homepage: https://github.com/qinwencheng/vuepress-plugin-run-codeblock#readme
keywords:
- documentation
- generator
- vue
- vuepress
- run
- markdowm
license: false
maintainers: null
name: vuepress-plugin-run-codeblock
npm: https://www.npmjs.com/package/vuepress-plugin-run-codeblock
publisher:
  avatar: null
  email: qinwencheng719@gmail.com
  name: null
  url: null
  username: qinwencheng
repository: https://github.com/qinwencheng/vuepress-plugin-run-codeblock
score: 0.5087533121134064
stars: 0
unstable: false
version: 1.0.5
watchers: 0

---

# vuepress-plugin-run-codeblock

## Introduction
show and run codeblock in vuepress

## Support
vuepress 1.x

## Install
`npm i vuepress-plugin-run-codeblock`

## Usage

### step 1
in `[..your vuepress project..]/docs/.vuepress/config.js`

set:
```js
...
plugins: [
  [require('vuepress-plugin-run-codeblock')],
],
...
```

### step 2

#### use in markdowm 

- base

````md
::: run
```js
console.log('js')
```
:::
````


![1](./img/1.png)

you can click the button to run the code

![2](./img/2.png)

- show file name
````md
::: run file/lib/index.js
```js
console.log('js')
```
:::
````
![3](./img/3.png)



- use in another container
````md
:::: details Click me to view the code
::: run
```js
console.log('js')
```
:::
::::
````

![4](./img/4.png)

see: [markdown-it-container/issues](https://github.com/markdown-it/markdown-it-container/issues/33#issuecomment-551111227)

## About 
the api was supported by [https://wandbox.org/](https://wandbox.org/)




<!-- todo:
1. 智能识别语言别名
2. 运行结果显示语言改为js,右上角content改成编译器提示信息
-->
