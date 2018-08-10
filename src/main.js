// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import store from './store';
import "./assets/js/fitScreen750.js"
import hex_md5 from "./assets/js/hex_md5.js"
import md5 from "./assets/js/md5.js"
import toMap from "./assets/js/toMap.js"
import "qiniu/dist/qiniu.min"
import Qs from 'qs'


Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.prototype.$qs = Qs;
Vue.prototype.toMap = toMap;
Vue.prototype.md5 = md5;
Vue.prototype.hex_md5 = hex_md5;
Vue.prototype.public_key = "918edda1812f4203368792e0ac32df72";
Vue.prototype.base_url = "/api/front";



import './assets/css/public/base.css'/*引入公共样式*/
import './assets/css/public/normalize.css'/*引入公共样式*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
