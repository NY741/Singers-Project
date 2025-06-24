import { createStore } from "vuex";

import singersModule from "./modules/singers";
import bandsModule from "./modules/bands";

const store = createStore({
  modules: {
    singers: singersModule,
    bands: bandsModule,
  },
});

export default store;
