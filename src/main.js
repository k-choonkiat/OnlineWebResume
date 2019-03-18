import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import photo from "@/assets/ck.jpg";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
