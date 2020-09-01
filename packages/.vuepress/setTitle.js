module.exports = (options) => ({
    extendPageData ($page) {
        const {
            frontmatter
        } = $page
        $page.title = frontmatter.name
    },
})