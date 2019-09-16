import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Router from './router/'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

Vue.config.productionTip = false
new Vue({
  router:Router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
