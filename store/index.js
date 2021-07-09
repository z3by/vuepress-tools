export const state = () => ({
  sidebar: true,
})

export const mutations = {
  setSidebar(state, value) {
    state.sidebar = value
  },
}
