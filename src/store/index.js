import { createStore } from "vuex";
import { AuthModule } from "./modules/auth";

// Create a new store instance.
const store = createStore({
  modules: {
    AuthModule,
  },
});

export default store;
