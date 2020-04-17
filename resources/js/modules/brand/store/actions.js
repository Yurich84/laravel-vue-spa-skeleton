import * as fromBrandTypes from './types'
import * as fromNotificationTypes from '../../notification/store/types'
import * as brandApi from '../api'

export const actions = {
    async [fromBrandTypes.BRAND_FETCH_AVAILABLE]({commit}, data = null) {
        try {
            const response = await brandApi.fetchAvailable(data)
            commit(fromBrandTypes.BRAND_OBTAIN_ALL, response.data.data)
            commit(fromBrandTypes.BRAND_META, response.data.meta)
        } catch (e) {
            commit(fromNotificationTypes.RAISE_ERROR, e.message)
        }
    },
}
