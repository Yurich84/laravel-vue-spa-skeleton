import * as types from './types'
import {actions} from './actions'

export const store = {
    state: {
        availableBrands: [],
        brandsMeta: [],
        brandSort: {
            field: 'id',
            direction: 'asc'
        },
        brandFilter: {
            group: '',
            select: ''
        },
    },
    mutations: {
        [types.BRAND_OBTAIN_ALL](state, brands) {
            state.availableBrands = state.availableBrands.concat(brands)
        },
        [types.BRAND_CLEAR](state) {
            state.availableBrands = []
        },
        [types.BRAND_META](state, meta) {
            state.brandsMeta = meta
        },
        [types.BRAND_SORT](state, sort) {
            state.brandSort = sort
        },
        [types.BRAND_FILTER](state, filter) {
            state.brandFilter = filter
        },
    },
    getters: {
        availableBrands: state => state.availableBrands,
        brandsMeta: state => state.brandsMeta,
        brandSort: state => state.brandSort,
        brandFilter: state => state.brandFilter,
    },
    actions
}
