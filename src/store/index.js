import Vue from "vue";
import Vuex from "vuex";
import menu from "./modules/menu";
import map from "./modules/map";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { menu, map },
});

store.dispatch("initMenu");
store.dispatch("initMap");

export default store;
