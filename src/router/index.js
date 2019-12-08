import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import UserCenter from "@/views/UserCenter.vue";
import ArticleSearchResult from "@/views/ArticleSearchResult";
import ArticleView from "@/views/ArticleView";
import ArticleEdit from "@/views/ArticleEdit";
import ArticleCenter from "@/views/ArticleCenter";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/UserCenter",
    name: "UserCenter",
    component: UserCenter
  },
  {
    path: "/ArticleSearchResult",
    name: "ArticleSearchResult",
    component: ArticleSearchResult
  },
  {
    path: "/ArticleView",
    name: "ArticleView",
    component: ArticleView
  },
  {
    path: "/ArticleEdit",
    name: "ArticleEdit",
    component: ArticleEdit
  },
  {
    path: "/ArticleCenter",
    name: "ArticleCenter",
    component: ArticleCenter
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
