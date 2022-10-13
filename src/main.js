import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import _ from "lodash";
import apis from "@/api";

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$apis = apis;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
