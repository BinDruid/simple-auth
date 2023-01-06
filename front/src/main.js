import { createApp } from "vue"
import App from "./App.vue"

import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

import router from "./routes"
import "@mdi/font/css/materialdesignicons.css"
import "./assets/styles/rtl.css"

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: "fa",
  },
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount("#app")
