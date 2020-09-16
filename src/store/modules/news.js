const store = {
  state: {
    news: [],
  },
  getters: {
    news: ({ news }) => news,
  },
  mutations: {
    SET_NEWS(state, value) {
      state.news = value;
    },
  },
  actions: {
    getNews: function({ commit }) {
      fetch("https://bella-italiano.herokuapp.com/api/v1/news")
        .then((data) => data.json())
        .then((res) => commit("SET_NEWS", res.data))
        .catch((error) => console.log(error));
    },
  },
};

export default store;
