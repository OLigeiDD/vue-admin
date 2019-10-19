import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./store";

// 路由守卫,权限控制
import "./permission";
import "./icons";
import "normalize.css/normalize.css";
import "@/styles/index.scss";

// 导入elementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
