import '../../assets/css/global.css'
import '../../assets/js/rem'
import Vue from 'vue'
import Counselor from './counselor.vue'
import router from './router'
import store from './store';
Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Counselor)
})