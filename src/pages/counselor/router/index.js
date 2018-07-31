import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['../component/home'], resolve)
const Index = resolve => require(['../component/index'], resolve)
const VuexDemo = resolve => require(['../component/demo/vuexDemo'], resolve)
Vue.use(Router)
const router = new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home

        },
        {
            path: '/index',
            name: 'Index',
            component: Index,
            children: [{
                path: 'vuexDemo',
                name: 'VuexDemo',
                component: VuexDemo
            }],
        },

    ]
})


export default router;