const axios = require('axios');


const api = axios.create({
    // baseURL: process.env.PATH_BACKEND
    baseURL: 'https://fkaveiculos-backend.herokuapp.com/api/'
})

export default api