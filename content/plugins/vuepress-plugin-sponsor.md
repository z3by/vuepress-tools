---
author:
  avatar: https://avatars.githubusercontent.com/u/43605758?v=4
  email: yuan1241900094@gmail.com
  name: yokefellow
  url: null
  username: yokefellow
bugs: https://github.com/yokefellow/vuepress-plugin-sponsor/issues
category: plugin
date: '2020-08-18T11:22:30.617Z'
deprecated: false
description: Sponsor plugin for vuepress
downloads: null
homepage: https://yokefellow.github.io
keywords:
- sponsor
- vuepress
license: MIT License
maintainers: null
name: vuepress-plugin-sponsor
npm: https://www.npmjs.com/package/vuepress-plugin-sponsor
publisher:
  avatar: null
  email: yuan1241900094@gmail.com
  name: null
  url: null
  username: yokefellow
repository: https://github.com/yokefellow/vuepress-plugin-sponsor
score: 0.27827215010120754
stars: 7
unstable: false
version: 1.0.0
watchers: 7

---



## 介绍

这是一个vuepress的打赏插件，借鉴于开源项目[Kaiyuan/sponsor-page](https://github.com/Kaiyuan/sponsor-page)。由于开源项目是基于jQuery来实现动画效果和DOM操作的，为了减轻插件依赖，在原开源项目的基础上简单重构了一下，将jQuery替换成Vue。

## 使用

在配置文件（`.vuepress/config.js`）添加如下代码，选择Babel 式或对象式，例子如下。

### Babel 式

```js
module.exports = {
  plugins: [
     [
      'vuepress-plugin-sponsor',
      {
        theme: 'simple',
        alipay: '/sponsor-qrcode/qrcode-alipay.png',
        wechat: '/sponsor-qrcode/qrcode-wechat.png',
        qq: '/sponsor-qrcode/qrcode-qq.png',
        paypal: 'https://www.paypal.me/yokefellow',
        duration: 2000
      }
    ]
  ]
}
```
### 对象式

```js
module.exports = {
  plugins: {
    'vuepress-plugin-sponsor': {
      theme: 'simple',
      alipay: '/sponsor-qrcode/qrcode-alipay.png',
      wechat: '/sponsor-qrcode/qrcode-wechat.png',
      qq: '/sponsor-qrcode/qrcode-qq.png',
      paypal: 'https://www.paypal.me/yokefellow',
      duration: 2000
    }
  }
}
```
## 配置选项

| Name     | Type   | Default | Description                                       |
| -------  | ------ | ------- | --------------------------------------------------|
| theme    | String | simple  | 插件主题（simple / drinks）                        |
| alipay   | String | null    | 支付宝收款码的图片路径                              |
| wechat   | String | null    | 微信收款码的图片路径                                |
| qq       | String | null    | QQ收款码的图片路径                                  |
| paypal   | String | null    | PayPal 收款地址                                    |
| duration | Number | 1500    | 当收款选项为null时，点击选项后弹出的消息显示时间（ms） |

+ 小小的建议：添加支付宝/微信/QQ等收款码时，建议裁剪为正方形并放在public目录下

## Front Matter

在需要显示打赏插件的页面（.md）中设置变量
```markdown
---
showSponsor: true
---
```
