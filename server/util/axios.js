import axios from 'axios'

class HttpRequest {
    constructor(url) {
        this.baseUrl = url
    }

    getConfig() {
        return {
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 50000,
            withCredentials: false,
            baseURL: this.baseUrl ? this.baseUrl : ''
        }
    }

    interceptors(Ajax) {
        Ajax.interceptors.request.use(config => {
            return config
        }, err => {
            console.log(err, 'axios request err');
            return Promise.reject(err)
        })

        Ajax.interceptors.response.use(async res => {
            return Promise.resolve(res.data)
        }, err => {
            console.log(err, 'axios response err');
            return Promise.reject(err)
        })
    }

    request(options) {
        const Ajax = axios.create();

        options = Object.assign({}, this.getConfig(), options);

        this.interceptors(Ajax);

        return Ajax(options)
    }
}

export default new HttpRequest()
