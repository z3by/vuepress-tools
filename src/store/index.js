import Vue from "vue";
import Vuex from "vuex";
import themesData from "../../themes.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    themes: themesData,
    currentType: "all",
    currentTheme: null
  },
  mutations: {
    filterByType(state, type) {
      if (type == "all") {
        state.themes = themesData;
      } else {
        state.themes = themesData.filter(theme => {
          return theme.type == type;
        });
      }
      state.currentType = type;
    },
    search(state, query) {
      state.themes = themesData.filter(theme => {
        query = query.toLowerCase();
        return (
          theme.name.toLowerCase().includes(query) ||
          theme.description.toLowerCase().includes(query) ||
          theme.type.toLowerCase().includes(query)
        );
      });
    },
    setCurrentTheme(state, name) {
      const theme = state.themes.find(theme => {
        return theme.name === name;
      });
      state.currentTheme = theme;
    }
  },
  actions: {},
  modules: {}
});
