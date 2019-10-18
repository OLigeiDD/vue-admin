import router from "./routers";
import { getToken } from "./utils/auth";

const whiteList = ["/login"];
const hasToken = getToken();
// 路由守卫
router.beforeEach((to, from, next) => {
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 白名单，不需要验证token
      next();
    } else {
      next({ path: `/login?redirect=${to.path}` });
    }
  }
});
