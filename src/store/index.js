import Vue from "vue";
import Vuex from "vuex";

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
    resetData({ commit }) {
      commit("RESET_DATA");
    },
  },
  modules: {},
});
