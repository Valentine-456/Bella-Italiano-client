import Vue from "vue";
import Vuex from "vuex";
import menu from "./modules/menu";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { menu },
});

store.dispatch("initMenu");

export default store;
