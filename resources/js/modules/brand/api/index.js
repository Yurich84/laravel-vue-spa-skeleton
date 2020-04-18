import axios from 'axios'

const API_ENDPOINT = 'brands'

export default {

    all(data) {
        return axios.get(API_ENDPOINT, {params: data})
    },

    find(id) {
        return axios.get(API_ENDPOINT + '/' + id)
    },

    update(brandModel, id) {
        return axios.put(API_ENDPOINT + '/' + id, brandModel)
    },

    delete(id) {
        return  axios.delete(API_ENDPOINT + '/' + id)
    },

}
