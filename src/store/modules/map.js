const store = {
  namespaced: "true",
  state: {
    restaurants: [],
  },
  getters: {
    geolocations: ({ restaurants }) =>
      Object.values(restaurants).map((restaurant) => restaurant.geolocation),
    restaurants: ({ restaurants }) => restaurants,
    addresses: ({ restaurants }) =>
      Object.values(restaurants).map((restaurant) => restaurant.address),
  },
  mutations: {
    SET_RESTAURANTS(state, value) {
      state.restaurants = value;
    },
  },
  actions: {
    initMap: {
      handler: function({ dispatch }) {
        dispatch("getRestaurants");
      },
      root: true,
    },
    getRestaurants({ commit }) {
      fetch("https://bella-italiano.herokuapp.com/api/v1/restaurants")
        .then((data) => data.json())
        .then((response) => response.data)
        .then((restaurants) => commit("SET_RESTAURANTS", restaurants))
        .catch((error) => console.log(error));
    },
  },
};

export default store;
