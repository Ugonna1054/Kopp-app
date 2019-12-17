const state = {
  radio: "personal",
  isPersonal: true,
  isUploads: false,
  isReview: false
};

const mutations = {
  setIsPersonal(state, payload) {
    state.isPersonal = payload;
  },
  setRadio(state, payload) {
    state.radio = payload;
  },
  setIsUploads(state, payload) {
    state.isUploads = payload;
  },
  setIsReview(state, payload) {
    state.isReview = payload;
  }
};

const actions = {
  updateIsPersonal({ commit }) {
    commit("setIsPersonal", true);
    commit("setRadio", false);
    commit("setIsUploads", false);
    commit("setIsReview", false);
    commit("setRadio", "personal");
  },
  updateIsUploads({ commit }) {
    commit("setIsPersonal", false);
    commit("setRadio", false);
    commit("setIsUploads", true);
    commit("setIsReview", false);
    commit("setRadio", "uploads");
  },
  updateIsReview({ commit }) {
    commit("setIsPersonal", false);
    commit("setRadio", false);
    commit("setIsUploads", false);
    commit("setIsReview", true);
    commit("setRadio", "review");
  }
};

const getters = {
  isPersonal: state => {
    return state.isPersonal;
  },
  isUploads: state => {
    return state.isUploads;
  },
  isReview: state => {
    return state.isReview;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
