const store = {
  namespaced: "true",
  state: {
    menu: [],
    menuSection: "",
  },
  getters: {
    menu: ({ menu }) => menu,
    menuSection: ({ menuSection }) => menuSection,
  },
  mutations: {
    SET_MENU(state, value) {
      state.menu = value;
    },
    SET_MENU_SECTION(state, value) {
      state.menuSection = value;
    },
  },
  actions: {
    initMenu: {
      handler: function({ dispatch }) {
        dispatch("getMenu");
      },
      root: true,
    },
    getMenu({ commit }, foodType = "wines") {
      let path = foodType === "wines" ? `wines` : `dishes/category/${foodType}`;

      fetch(`https://bella-italiano.herokuapp.com/api/v1/${path}`)
        .then((data) => data.json())
        .then((res) => res.data)
        .then((menu) => commit("SET_MENU", menu))
        .catch((error) => console.log(error));

      commit("SET_MENU_SECTION", foodType);
    },
  },
};

export default store;
