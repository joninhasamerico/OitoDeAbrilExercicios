const axios = require('axios');

//https://economia.awesomeapi.com.br/json/list/USD-BRL/30


axios.get('https://economia.awesomeapi.com.br/all')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
