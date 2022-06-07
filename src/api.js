const axios = require('axios');


const api = axios.create({
    baseURL: 'https://fkaveiculos-backend.herokuapp.com/api/'
})

export default api