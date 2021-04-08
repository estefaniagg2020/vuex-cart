import Vue from 'vue'
import Vuex from 'vuex'
import cart from "./modules/cart";
import products from "./modules/products";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { ToastPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Vuex)
Vue.use(BootstrapVue);
Vue.use(ToastPlugin);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cart,
    products,
  },
});
