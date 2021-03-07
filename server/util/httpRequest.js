import axios from './axios'

class Http {
    get(url = '', params = {}, options = {}) {
        return axios.request({
            url: url,
            method: 'get',
            params: params,
            headers: options
        })
    }
    post(url = '', params = {}, options = {}) {
        return axios.request({
            url: url,
            method: 'post',
            data: params,
            headers: options
        })
    }
    put(url = '', params = {}, options = {}) {
        return axios.request({
            url: url,
            method: 'put',
            data: params,
            headers: options
        })
    }
    delete(url = '', params = {}, options = {}) {
        return axios.request({
            url: url,
            method: 'delete',
            data: params,
            headers: options
        })
    }
}

export default new Http()
