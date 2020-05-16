import axios from 'axios'

const API_ENDPOINT = 'settings'

export default {

    update(model) {
        return axios.patch(API_ENDPOINT + '/profile', model)
    },

}
