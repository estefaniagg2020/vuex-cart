import shop from "../../../public/shop";

// initial state
const state = () => ({
  all: [],
});

// getters
const getters = {};

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts((products) => {
      commit("setProducts", products);
    });
  },
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
  },

  decrementProductInventory(state, { id }) {
    const product = state.all.find((product) => product.id === id);
    product.inventory--;
  },
  /*  incrementProductInventory (state, { id }) {//buena
    const product = state.all.find(product => product.id === id)
    product.inventory++
  } */
  incrementProductInventory(state, { id, cantidad }) {
    const product = state.all.find((product) => product.id === id);
    product.inventory += cantidad;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
