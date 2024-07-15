import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import HomeDetailView from "@/views/HomeDetailView.vue";
import ReviewView from "@/views/ReviewView.vue";
import ProfileView from "@/views/ProfileView.vue";
import HistoryView from "@/views/HistoryView.vue";
import AllHistoryView from "@/views/AllHistoryView.vue";
import BorrowHistoryView from "@/views/BorrowHistoryView.vue";
import ReturnHistoryView from "@/views/ReturnHistoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home/detail/:id",
      name: "detail",
      component: HomeDetailView,
    },
    {
      path: "/review/:id",
      name: "review",
      component: ReviewView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      children: [
        {
          path: "profile",
          name: "profile",
          component: ProfileView,
        },
        {
          path: "history",
          name: "history",
          component: HistoryView,
          children: [
            {
              path: "all",
              name: "all",
              component: AllHistoryView,
            },
            {
              path: "borrow",
              name: "borrow",
              component: BorrowHistoryView,
            },
            {
              path: "return",
              name: "return",
              component: ReturnHistoryView,
            },
          ],
        },
      ],
    },
  ],
});

export default router;
