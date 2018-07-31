import * as types from '../mutation-types'

export default {
    namespaced: true,
    state: {
        count: 0,
    },
    getters: {

    },
    mutations: {
        [types.MUTATIONNUMADD](state, num) {
            state.count = state.count + num;
        }
    },
    actions: {
        actionNumAdd(context) { //context 与 store 实例具有相同方法和属性的 context 对象  但不是 store 实例本身了
            context.commit(types.MUTATIONNUMADD, 10);
        }

    }


}