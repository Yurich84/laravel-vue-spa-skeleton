import * as types from './types'
import {actions} from './actions'

export const store = {
    state: {
        tags: [],
        tagsMeta: [],
    },
    mutations: {
        [types.TAG_OBTAIN](state, tags) {
            state.tags = tags
        },
        [types.TAG_CLEAR](state) {
            state.tags = []
        },
        [types.TAG_META](state, meta) {
            state.tagsMeta = meta
        },
    },
    getters: {
        tags: state => state.tags,
        tagsMeta: state => state.tagsMeta,
    },
    actions
}
