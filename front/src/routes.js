import { storeToRefs } from "pinia"
import { createWebHistory, createRouter } from "vue-router"
import UserAuth from "@/pages/UserAuth.vue"
import TheHome from "@/pages/TheHome.vue"
import TheProfile from "@/pages/TheHome.vue"
import useAuthStore from "@/store/authStore"

const routes = [
  {
    path: "/profile",
    name: "profile",
    component: TheProfile,
    meta: { requiresAuth: true },
  },
  {
    path: "/",
    name: "home",
    component: TheHome,
  },

  {
    path: "/auth",
    name: "auth",
    component: UserAuth,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const { logged } = storeToRefs(useAuthStore())
  if (!logged.value && to.meta.requiresAuth) next("/auth")
  else next()
})

export default router
