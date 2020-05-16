import * as types from './types'
import tagApi from '../api'

export const actions = {
    async [types.TAG_FETCH]({commit}, data = null) {
        commit(types.TAG_SET_LOADING, true)
        const response = await tagApi.all(data)
        commit(types.TAG_OBTAIN, response.data.data)
        commit(types.TAG_META, response.data.meta)
        commit(types.TAG_SET_LOADING, false)
    },
}
