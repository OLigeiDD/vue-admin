import Vue from "vue";
import App from "./App.vue";
import router from "./routers";

// 路由守卫,权限控制
import "./permission";
import "./icons";
import "normalize/normalize.css";

// 导入elementUI
import ElementUI from "element-ui";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
