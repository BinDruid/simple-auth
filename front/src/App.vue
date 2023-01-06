<template>
  <v-locale-provider rtl>
    <v-app :theme="theme">
      <v-app-bar density="compact" title="ناحیه کاربری">
        <v-spacer></v-spacer>

        <v-btn :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="changeTheme"></v-btn>
        <router-link v-if="!logged" to="/auth" class="no-dec">
          <v-btn prepend-icon="mdi-login">ورود</v-btn> </router-link>
        <v-btn prepend-icon="mdi-logout" v-if="logged" @click="logout">خروج</v-btn>
      </v-app-bar>
      <v-main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const theme = ref('dark')

const changeTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const logged = computed(() => {
  return localStorage.getItem("authToken") !== null
})

const logout = () => {
  localStorage.removeItem("authToken")
  localStorage.removeItem("username")
  router.go({ path: '/' })

}
</script>

<style scoped>
.no-dec {
  text-decoration: none;
}
</style>