(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{763:function(t,a,s){"use strict";s.r(a);var e=s(50),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"craft-documentation-theme-for-vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#craft-documentation-theme-for-vuepress"}},[t._v("#")]),t._v(" Craft Documentation Theme for VuePress")]),t._v(" "),s("p",[t._v("This is the "),s("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),s("OutboundLink")],1),t._v(" theme used for "),s("a",{attrs:{href:"https://docs.craftcms.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft CMS documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("It makes the following changes over the default VuePress theme:")]),t._v(" "),s("ul",[s("li",[t._v("Adds support for "),s("a",{attrs:{href:"#code-toggles"}},[t._v("code language toggles")]),t._v(" and "),s("a",{attrs:{href:"#split-views"}},[t._v("split page views")]),t._v(".")]),t._v(" "),s("li",[t._v("Disables "),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/using-vue.html#interpolation",target:"_blank",rel:"noopener noreferrer"}},[t._v("interpolation"),s("OutboundLink")],1),t._v(" for all inline "),s("code",[t._v("<code>")]),t._v(" tags.")]),t._v(" "),s("li",[t._v("Improves "),s("code",[t._v("<table>")]),t._v(" styling.")])]),t._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),s("ol",[s("li",[s("p",[s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install"),s("OutboundLink")],1),t._v(" VuePress like normal")])]),t._v(" "),s("li",[s("p",[t._v("Require this theme")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yarn add -D vuepress-theme-craftdocs # or npm install -D vuepress-theme-craftdocs\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Set these things in "),s("code",[t._v(".vuepress/config.js")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  theme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"craftdocs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    codeLanguages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PHP"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      twig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Twig"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// any other code language labels you want to include in code toggles...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  markdown"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" level"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendMarkdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("md")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" markup "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress-theme-craftdocs/markup"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      md"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("markup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"code-toggles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-toggles"}},[t._v("#")]),t._v(" Code Toggles")]),t._v(" "),s("p",[t._v("You can create code toggles by wrapping multiple fenced code blocks with a "),s("code",[t._v("code")]),t._v(" container:")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[t._v("::: code\n\n"),s("span",{pre:!0,attrs:{class:"token code"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")]),s("span",{pre:!0,attrs:{class:"token code-language"}},[t._v("php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token code-block language-php"}},[t._v('echo "Hey, $name";')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token code"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")]),s("span",{pre:!0,attrs:{class:"token code-language"}},[t._v("twig")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token code-block language-twig"}},[t._v("Hey, {{ name }}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")])]),t._v("\n\n:::\n")])])]),s("p",[t._v("By default, toggle labels will be pulled from the value in "),s("code",[t._v("themeConfig.codeLanguages")]),t._v(" that matches the code block’s language. If you want to provide a custom label instead, just type it after the code block language:")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[t._v("::: code\n\n"),s("span",{pre:!0,attrs:{class:"token code"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")]),s("span",{pre:!0,attrs:{class:"token code-language"}},[t._v("php Craft 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token code-block language-php"}},[t._v("$success = craft()->entries->saveEntry($entry);")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token code"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")]),s("span",{pre:!0,attrs:{class:"token code-language"}},[t._v("php Craft 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token code-block language-php"}},[t._v("$success = Craft::$app->elements->saveElement($entry);")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")])]),t._v("\n\n:::\n\n")])])]),s("h2",{attrs:{id:"split-views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-views"}},[t._v("#")]),t._v(" Split Views")]),t._v(" "),s("p",[t._v("You can create split view pages by adding "),s("code",[t._v("split: true")]),t._v(" to your page’s frontmatter:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),s("p",[t._v("In split view, any content that contains a horizontal rule ("),s("code",[t._v("---")]),t._v(") will be divided into "),s("code",[t._v("left")]),t._v(" and "),s("code",[t._v("right")]),t._v(" portions, starting and ending at the closest H2/H3 headings.")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Cool Headings")]),t._v("\n\nLeft-side content\n\n"),s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\n\nRight-side content\n")])])]),s("p",[t._v("In split view, code toggles can share a single page-wide toggle UI, floated at the top of the right-hand content pane. To do this, add a "),s("code",[t._v("code")]),t._v(" list to your page’s frontmatter:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("code")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" php\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" twig\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),s("p",[t._v("(Use the same language handles defined by "),s("code",[t._v("themeConfig.codeLanguages")]),t._v(" in "),s("code",[t._v(".vuepress/config.js")]),t._v(".)")]),t._v(" "),s("h2",{attrs:{id:"upgrading-from-v1-3-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-from-v1-3-x"}},[t._v("#")]),t._v(" Upgrading from v1.3.x")]),t._v(" "),s("ol",[s("li",[t._v("Follow the VuePress "),s("a",{attrs:{href:"https://vuepress.vuejs.org/miscellaneous/migration-guide.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Migration from 0.x"),s("OutboundLink")],1),t._v(" guide.")]),t._v(" "),s("li",[t._v("Update any custom styles that relied on "),s("code",[t._v(".content")]),t._v(" to reference "),s("code",[t._v(".theme-default-content")]),t._v(" instead.")]),t._v(" "),s("li",[t._v("If you’re using Algolia DocSearch, make sure your index configuration’s selectors are still valid.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);