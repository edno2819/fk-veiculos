const axios = require('axios');

axios.get('http://127.0.0.1:8000/contatos/')
.then(response => {
    console.log(response.data)
})
.catch(function (error) {
    console.log(error);
})