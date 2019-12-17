import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

export const serverBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
