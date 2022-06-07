const axios = require('axios');


const api = axios.create({
    // baseURL: process.env.PATH_BACKEND
    baseURL: 'http://127.0.0.1:8000/api/'
})

export default api