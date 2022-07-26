import { createRouter, createWebHashHistory } from "vue-router";
//import Home from "@/views/Home";

const routes = [
  {
    name: "HomePage",
    path: "/",
    //component: Home
    component: () => import("@/views/MeHome"),
  },
  {
    name: "AboutPage",
    path: "/hakkimda",
    component: () => import("@/views/MeAbout"),
  },
  {
    name: "DetailPage",
    path: "/detay/:userID",
    component: () => import("@/views/MeDetails"),
  },
];

const router = createRouter({
  routes,
  //history: createWebHistory(),
  history: createWebHashHistory(),
});

export default router;
