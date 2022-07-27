//所有跟路由相关的代码
//根路径默认跳转home
import Vue from "vue";
import VueRouter from "vue-router";

//展示页面引入
import Home from "@/views/Home";
import Layout from "@/views/layout";
import Info from "@/views/Info";
import My from "@/views/My";
import Search from "@/views/Search";

Vue.use(VueRouter);
//配置规则
const routes = [
  {
    path: "/",
    redirect: "/layout",
  },
  {
    path: "/layout",
    redirect: "/layout/home",
    component: Layout,
    children: [
      {
        path: "home",
        component: Home,
      },
      {
        path: "search", //layout/search
        component: Search,
      },
      {
        path: "my", //layout/my
        component: My,
      },
      {
        path: "info",
        component: Info,
      },
    ],
  },
];

export default new VueRouter({
  routes,
});
