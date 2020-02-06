const { path } = require('@vuepress/shared-utils')

module.exports = (options) => ({
    extendPageData ($page) {
        const {
            frontmatter
        } = $page
        $page.title = frontmatter.name
    },
})