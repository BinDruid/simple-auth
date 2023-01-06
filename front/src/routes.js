import { createWebHistory, createRouter } from "vue-router"
import TheHome from "./pages/TheHome.vue"
import TheProfile from "./pages/TheProfile.vue"
import UserAuth from "./pages/UserAuth.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: TheHome,
  },
  {
    path: "/profile",
    name: "Profile",
    component: TheProfile,
  },

  {
    path: "/auth",
    name: "UserAuth",
    component: UserAuth,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (
    localStorage.getItem("authToken") !== null ||
    to.path === "/auth" ||
    to.path === "/"
  )
    next()
  else next("/auth")
})

export default router
