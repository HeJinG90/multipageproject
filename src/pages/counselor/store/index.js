import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
import subComponentState from './modules/subComponentState.js' // 引入单个子组件的状态管理js文件
export default new Vuex.Store({
    modules: {
        subComponentState,
    },
})