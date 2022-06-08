const axios = require('axios');

axios.get('https://fkaveiculos-backend.herokuapp.com/api/contatos/')
.then(response => {
    console.log(response.data)
})
.catch(function (error) {
    console.log(error);
})