import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    SET_USER_DATA(state, user) {
      state.user = user;
    },
    RESET_DATA(state) {
      state.user = {};
    },
  },
  actions: {
    fetchUserData({ commit }, userData) {
      commit("SET_USER_DATA", userData);
    },
    // async fetchGithubData({ commit }) {
    //   axios
    //     .get("https://api.github.com/users/" + this.state.user.githubUserName)
    //     .then((response) => {
    //       this.state.user.githubData = response.data;
    //       commit("SET_USER_DATA", this.state.user.githubData);
    //     })
    //     .catch((error) => {
    //       console.warn(error);
    //     });
    // },
    resetData({ commit }) {
      commit("RESET_DATA");
    },
  },
  modules: {},
});
