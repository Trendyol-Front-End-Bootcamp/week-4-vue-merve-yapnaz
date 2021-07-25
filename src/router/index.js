import Vue from "vue";
import VueRouter from "vue-router";
import StarWars from "../views/StarWars.vue";
import CardDetail from "../components/card-detail/CardDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "StarWars",
    component: StarWars,
  },
  {
    path: "/cardDetail",
    name: "CardDetail",
    component: CardDetail,
    props: (route) => ({
      ...route.params,
    }),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
