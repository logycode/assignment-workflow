import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    githubData: {},
  },
  mutations: {
    SET_USER_DATA(state, user) {
      state.user = user;
    },
    SET_GITHUB_DATA(state, githubData) {
      state.githubData = githubData;
    },
  },
  actions: {
    fetchUserData({ commit }, userData) {
      commit("SET_USER_DATA", userData);
    },
    async fetchGithubData({ commit }) {
      axios
        .get("https://api.github.com/users/" + this.state.user.githubUserName)
        .then((response) => {
          this.state.githubData = response.data;
          commit("SET_GITHUB_DATA", this.state.githubData);
        })
        .catch((error) => {
          console.warn(error);
          this.isThereAValidationError = true;
        });
    },
  },
  modules: {},
});
