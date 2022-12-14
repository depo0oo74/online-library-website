import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import store file
import store from "./store/index";

// import css files
import "./assets/css/style.css";
import "./assets/css/responsiveStyle.css";

// Vuetify imports
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify).mount("#app");
