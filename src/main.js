import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./libs/i18n";

import VueCompositionAPI from '@vue/composition-api'
import bootstrapVue from 'bootstrap-vue'

import "./global-components";
import "./libs/vue-datepicker";

// plugins
import "./plugins/bootstrap-vue";

import "@mdi/font/css/materialdesignicons.min.css";
import "vue-select/dist/vue-select.css";

import "./assets/scss/style.scss";

Vue.config.productionTip = false;

Vue.use(bootstrapVue)
Vue.use(VueCompositionAPI)

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");