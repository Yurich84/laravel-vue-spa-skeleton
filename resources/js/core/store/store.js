import * as types from './types'

export const store = {
    state: {
        isCollapsed: false
    },
    mutations: {
        [types.TOGGLE_COLLAPSE](state) {
            state.isCollapsed = !state.isCollapsed
        },
    },
    getters: {
        coreIsCollapsed: state => state.isCollapsed
    }
}
