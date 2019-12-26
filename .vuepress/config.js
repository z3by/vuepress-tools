const { description } = require('../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Tools',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '/arab-open-source/vuepress-tools',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Themes',
        link: '/themes/',
      }
    ],
    sidebar: {
      '/themes/': [
        '',
        'eugeo',
        'zjblog',
        'vuetify',
        'gouv-fr',
        'xydocs',
        'easyBlog',
        'cute',
        'modern-portfolio',
        'nav',
        'tabsp',
        'default-prefers-color-scheme',
        'codemao_docs',
        'dark-new',
        'default',
        'bulma',
        'casper',
        'api',
        'ajv',
        'mini',
        'yuu',
        'meteorlxy-cwr',
        'mufeng',
        'cchao',
        'ermu',
        'zp',
        'bhabgs',
        'kalisio',
        'dark',
        'reco',
        'thindark',
        'refrom-reco',
        'sakura',
        'note',
        'similar-yilia',
        'yur-cli',
        'starter1',
        'learner',
        'hope',
        'luna',
        'loaded',
        'dew',
        'canvas',
        'ting',
        'blog',
        'egoist',
        'modern-blog',
        'oneN',
        'whilife',
        'simple',
        'fluent',
        'tassel',
        'cool-starter',
        'millidocs',
        'shadow',
        'blogue',
        'cky',
        'ldy',
        'resume',
        'tomato',
        'valle',
        'typewriter',
        'api-starter-kit',
        'even',
        'neon',
        'teadocs',
        'elegant',
        'light',
        'zjy',
        'terminal',
        'yuicer',
        'gh-style',
        'single-page-sections',
        'glitzma',
        'kim',
        'craftdocs',
        'bb',
        'flipbox',
        'koala',
        'vook',
        'yubisaki',
        'Secondary_element',
        'indigo-material',
        'starter2',
        'concise',
        'ebook',
        'tsed',
        'blogvis',
        'cool',
        'material',
        'oscarteg',
        'talltotal',
        'ououe',
        'ktquez',
        'cycle',
        'one',
        'simple-blog',
        'monday',
        'postline',
        'zeit',
        'bgcz',
        'clair',
        'docs',
        'dynamicsidebar',
        'seeker',
        'melody',
        'yilia-plus',
        'reform',
        'blog-official-style',
        'meteorlxy',
        'yur',
        'x',
        'crow',
        'jupiter',
        'lemon',
        'nine',
        'sammyne',
        'succinct',
        'track',
        'idg',
        'monokai',
        'egg',
        'vuescroll',
        'medium',
        'default-hot',
        'britecore',
        'live-ebook',
        'meteorlxy-original.md'
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
