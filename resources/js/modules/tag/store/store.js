import * as types from './types'
import {actions} from './actions'

export const store = {
    state: {
        tags: [],
        tagsMeta: [],
        tagSort: {
            field: 'id',
            direction: 'asc'
        },
        tagFilter: {
            group: '',
            select: ''
        },
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
        [types.TAG_SORT](state, sort) {
            state.tagSort = sort
        },
        [types.TAG_FILTER](state, filter) {
            state.tagFilter = filter
        },
    },
    getters: {
        tags: state => state.tags,
        tagsMeta: state => state.tagsMeta,
        tagSort: state => state.tagSort,
        tagFilter: state => state.tagFilter,
    },
    actions
}
