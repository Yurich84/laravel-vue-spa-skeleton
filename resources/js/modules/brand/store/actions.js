import * as fromBrandTypes from './types'
import brandApi from '../api'

export const actions = {
    async [fromBrandTypes.BRAND_FETCH_AVAILABLE]({commit}, data = null) {
        const response = await brandApi.all(data)
        commit(fromBrandTypes.BRAND_OBTAIN_ALL, response.data.data)
        commit(fromBrandTypes.BRAND_META, response.data.meta)
    },
}
