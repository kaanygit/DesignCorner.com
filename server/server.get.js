import { setData } from './data.js';

var axios = require('axios');
var data = JSON.stringify({
    "collection": "Products",
    "database": "Category",
    "dataSource": "DesignCorner",
    "projection": {
        "_id": 1,
    }
});


var config = {
    method: 'post',
    url: 'https://eu-central-1.aws.data.mongodb-api.com/app/data-tgfst/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.DATA_API,
      'Accept': 'application/ejson'
    },
    data: data
};
            
axios(config)
.then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
    
    require('dotenv').config();
