import * as types from './types'

let collapsed = false
if (window.innerWidth < 768) {
    collapsed = true;
}

export const store = {
    state: {
        isCollapsed: collapsed
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
