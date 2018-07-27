import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['../component/home'], resolve)
Vue.use(Router)
const router = new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },


    ]
})


export default router;