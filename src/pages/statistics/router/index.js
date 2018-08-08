import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['../component/home'], resolve)
const VuexDemo = resolve => require(['../component/demo/vuexDemo'], resolve)
Vue.use(Router)


const router = new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/vuexDemo',
            name: 'VuexDemo',
            component: VuexDemo
        },


    ]
})


export default router;