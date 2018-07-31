import * as types from '../mutation-types'

export default {
    namespaced: true,
    state: {
        flag: false,
    },
    getters: {

    },
    mutations: {
        [types.MUTATIONNUMADD](state, status) {
            if (status) {
                state.flag = true;
            } else {
                state.flag = false;
            }
        }
    },
    actions: {
        actionNumAdd(context) { //context 与 store 实例具有相同方法和属性的 context 对象  但不是 store 实例本身了
            context.commit(types.MUTATIONNUMADD, false);
        }

    }


}