export const state = () => ({
  sidebar: true,
  plugins: [],
  themes: [],
})

export const mutations = {
  setSidebar(state, value) {
    state.sidebar = value
  },
  setPlugins(state, plugins) {
    state.plugins = plugins
  },
  setThemes(state, themes) {
    state.themes = themes
  },
}
