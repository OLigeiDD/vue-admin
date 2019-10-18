import Vue from "vue";
import SvgIcon from "@/components/SvgIcon.vue";

// 全局注册
Vue.component("svg-icon", SvgIcon);
const req = require.context("./svg", false, /\.svg$/);
console.log(req.keys()[0]);

const requireAll = requireContext => requireContext.keys().map(requireContext);

requireAll(req);
