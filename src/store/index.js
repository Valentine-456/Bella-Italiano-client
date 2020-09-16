import Vue from "vue";
import Vuex from "vuex";
import menu from "./modules/menu";
import map from "./modules/map";
import news from "./modules/news";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { menu, map, news },
});

store.dispatch("initMenu");
store.dispatch("initMap");

store.dispatch("getNews");
export default store;
