import '../../assets/css/global.css'
import '../../assets/js/rem'
import "babel-polyfill"
import Vue from 'vue'
import Counselor from './counselor.vue'
import router from './router'
import store from './store';
import Axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$ajax = Axios;
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Counselor)
})