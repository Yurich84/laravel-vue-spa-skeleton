import * as brandTypes from './types'
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
        [brandTypes.BRAND_OBTAIN_ALL](state, brands) {
            state.availableBrands = state.availableBrands.concat(brands)
        },
        [brandTypes.BRAND_CLEAR](state) {
            state.availableBrands = []
        },
        [brandTypes.BRAND_META](state, meta) {
            state.brandsMeta = meta
        },
        [brandTypes.BRAND_SORT](state, sort) {
            state.brandSort = sort
        },
        [brandTypes.BRAND_FILTER](state, filter) {
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
