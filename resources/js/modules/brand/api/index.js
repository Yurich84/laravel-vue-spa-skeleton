import axios from 'axios'

const API_ENDPOINT = '/api/brands'

export const fetchAvailable     = data              => axios.get(API_ENDPOINT, {params: data})
export const fetchBrandById     = id                => axios.get(API_ENDPOINT + '/' + id)
export const updateBrand        = (brandModel, id)  => axios.put(API_ENDPOINT + '/' + id, brandModel)
export const deleteBrand        = id                => axios.delete(API_ENDPOINT + '/' + id)
