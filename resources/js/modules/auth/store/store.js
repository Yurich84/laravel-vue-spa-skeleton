import * as types from './types'

export const store = {
    state: {
        isAuth: false,
    },
    mutations: {
        [types.SET_AUTH](state, isAuth) {
            state.isAuth = isAuth
        },
    }
}
