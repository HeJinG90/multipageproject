import Vue from 'vue'
import Counselor from './counselor.vue'
import router from './router'

Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(Counselor)
})