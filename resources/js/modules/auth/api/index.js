import axios from 'axios'

const API_ENDPOINT = 'auth'

export default {

    verify(user, query) {
        return axios.post(`${API_ENDPOINT}/email/verify/${user}?${query}`)
    },

    resend() {
        return axios.post(`${API_ENDPOINT}/email/resend`)
    },

}
