import * as types from './types'
import {actions} from './actions'

export const store = {
    state: {
        tags: [],
        tagsMeta: [],
        tagsLoading: true,
    },
    getters: {
        tags: state => state.tags,
        tagsMeta: state => state.tagsMeta,
        tagsLoading: state => state.tagsLoading,
    },
    mutations: {
        [types.TAG_OBTAIN](state, tags) {
            state.tags = tags
        },
        [types.TAG_CLEAR](state) {
            state.tags = []
        },
        [types.TAG_SET_LOADING](state, loading) {
            state.tagsLoading = loading
        },
        [types.TAG_META](state, meta) {
            state.tagsMeta = meta
        },
    },
    actions
}
