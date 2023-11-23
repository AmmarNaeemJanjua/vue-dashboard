const state = {
  user: {
    image:
      "https://randomuser.me/api/portraits/men/85.jpg",
    name: "T. JOBLONSKI",
  },
};

const getters = {
  getUser: (state) => state.user,
};

const actions = {
};

const mutations = {
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
