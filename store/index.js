export const state = () => ({
  sidebar: true,
  loading: false,
  plugins: [],
  themes: [],
})

export const mutations = {
  setSidebar(state, value) {
    state.sidebar = value
  },
  setLoading(state, val) {
    state.loading = val
  },
  setPlugins(state, plugins) {
    state.plugins = plugins
  },
  setThemes(state, themes) {
    state.themes = themes
  },
}
