const fs = require("fs");
const { description } = require("../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Vuepress Tools",
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
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "/arab-open-source/vuepress-tools",
    logo: "/img/vuepress-tools-logo.png",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    author: "Ahmad Mostafa",
    domain: "vuepress.tools",
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "home",
      },
      {
        text: "Themes",
        link: "/themes/",
        icon: "palette",
      },
      {
        text: "Plugins",
        link: "/plugins/",
        icon: "plug",
      },
    ],
    sidebar: {
      "/themes/": fs.readdirSync(`${__dirname}/../themes/`),
      "/plugins/": fs.readdirSync(`${__dirname}/../plugins/`),
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ["@vuepress/plugin-back-to-top"],
    ["@vuepress/plugin-medium-zoom"],
    [
      "sitemap",
      {
        hostname: "https://vuepress.tools",
      },
    ],
    ["seo"],
    ["flexsearch"],
    require.resolve("./setTitle"),
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
};
