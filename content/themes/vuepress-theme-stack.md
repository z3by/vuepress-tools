---
author:
  avatar: https://avatars.githubusercontent.com/u/49359773?v=4
  email: the_alex_mark@mail.ru
  name: "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u041C\u0430\u043A\
    \u0430\u0440\u043E\u0432"
  url: https://the-alex-mark.ru
  username: the_alex_mark
bugs: https://github.com/the-alex-mark/vuepress-theme-stack/issues
category: themes
date: '2021-05-15T18:45:53.029Z'
deprecated: false
description: "\u0422\u0435\u043C\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\
  \ \u0434\u043B\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\
  \u0438\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \"\u0421\u0442\u0435\
  \u043A\""
downloads: null
homepage: https://github.com/the-alex-mark/vuepress-theme-stack
keywords:
- vuepress
- vuepress-theme
license: MIT License
maintainers: null
name: vuepress-theme-stack
npm: https://www.npmjs.com/package/vuepress-theme-stack
publisher:
  avatar: null
  email: the_alex_mark@mail.ru
  name: null
  url: null
  username: the_alex_mark
repository: https://github.com/the-alex-mark/vuepress-theme-stack
score: 0.43691137671932406
stars: 0
unstable: false
version: 1.1.20
watchers: 0

---

# VuePress Theme "Stack" 

Тема сервиса для документации [компании \"Стек\"](https://stack-it.ru).

<br>

## Использование

Устанавливаем тему с помощью команды:
```bash
npm install vuepress-theme-stack --save
```

<br>

## Конфигурация

### breadcrumbs

- type: `bool`
- default: `undefined`

Отображение хлебных крошек.  
Элементы хлебных крошек берутся из заголовка статьи или `frontmatter`.

### titleTag

- type: `bool|object`
- default: `undefined`

| Параметр      | Описание                                                           |
|:-------------:| ------------------------------------------------------------------ |
| `siteTitle`   | Заголовок сайта                                                    |
| `selfHome`    | Подзаголовок главной страницы                                      |
| `self404`     | Подзаголовок страницы со статусом `404`                            |

Тег заголовка сайта `<title>Document</title>`.  
Элементы заголовка берутся из заголовка статьи или `frontmatter`.

### search

- type: `object`
- default: `undefined`

| Параметр      | Описание                                                           |
|:-------------:| ------------------------------------------------------------------ |
| `full`        | Вид поиска (`true` - во всех разделах, `false` - только в текущем) |
| `placeholder` | Заполнитель поля поиска                                            |

Настройки полнотекстового поиска.

<br>

## Примеры

Настраиваем конфигурацию сервиса:
```js
const { getNavLinks, getHomeLinks, getSidebarLinks, getFooterLinks } = require('./utils')

module.exports = {
    title: 'HELP',
    description: 'Документация программного обеспечения компании "Стек"',

    // Расположение собранного проекта
    dest: './dist',

    // Настройки постоянных ссылок
    base: '/',
    permalink: '/:regular',

    // Дополнительные настройки страницы
    head: [
        [ 'meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' } ],
        [ 'link', { rel:  'icon',     href:    '/assets/img/favicon.png' } ]
    ],

    // Локализация
    locales: { '/': { lang: 'ru-RU' } },

    // Конфигурация темы
    theme: 'stack',
    themeConfig: {
        logo: '/assets/logo.svg',
        
        // Хлебные крошки
        breadcrumbs: true,

        // Заголовок страницы
        titleTag: {
            siteTitle: 'Компания "Стек"',
            selfHome: 'Главная',
            self404: 'Страница не найдена'
        },
        
        // Поиск
        search: {
            full: false,
            placeholder: 'Поиск ...'
        },

        nav: getNavLinks(),
        sidebar: getSidebarLinks(),
        home: getHomeLinks(),
        footer: getFooterLinks()
    }
}
```

<br>

Настраиваем главную страницу:
```js
module.exports = { getHomeLinks }

/**
 * Возвращает структурированный список ссылок для главной страницы.
 *
 * @returns array
 */
function getHomeLinks() {
    return [
        {
            title: 'Сервисы',
            slug: 'services',
            columns: 2,
            items: [
                {
                    title: 'Личный кабинет ФЛ',
                    description: 'Руководства пользователя',
                    icon: '/assets/img/icons/icon-lk_fl.svg',
                    link: '/lk/fl/'
                },
                {
                    title: 'Личный кабинет ЮЛ',
                    description: 'Руководства пользователя',
                    icon: '/assets/img/icons/icon-lk_ul.svg',
                    link: '/lk/ul/'
                }
            ]
        },
        {
            title: 'Мобильные приложения',
            slug: 'applications',
            columns: 3,
            items: [
                {
                    title: 'Стек-ЖКХ',
                    description: 'Руководства пользователя',
                    icon: '/assets/img/icons/icon-app_lk.png',
                    link: '/mp/lk/'
                }
            ]
        }
    ];
}
```

<br>

Настраиваем подвал:
```js
module.exports = { getFooterLinks }

/**
 * Возвращает содержание подвала.
 *
 * @return Object
 */
function getFooterLinks() {
    return {
        text: '© 1993 − ' + new Date().getFullYear() + ' Группа компаний "Стек"',
        link: 'https://stack-it.ru',
        social: getSocialLinks().items
    };
}
```

<br>

## Дополнительная информация

- [Vue](https://vuejs.org)
- [VuePress](https://vuepress.vuejs.org)