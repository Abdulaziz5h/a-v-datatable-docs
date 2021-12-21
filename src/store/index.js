import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import app from "./app";
import auth from "./auth";

import admin from "./admin";

export default new Vuex.Store({
  modules: {
    app,
    auth,

    ...admin
  },
});