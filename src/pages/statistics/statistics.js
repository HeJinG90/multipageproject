import '../../assets/css/global.css'
import '../../assets/js/rem'
import Vue from 'vue'
import Statistics from './statistics.vue'
import router from './router'

Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    render: h => h(Statistics)
})