import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './style/tailwind.css';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GMAPS_KEY,
  },
  installComponents: true,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
