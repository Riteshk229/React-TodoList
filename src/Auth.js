var axios = require("axios").default;

var options = {
  method: 'PATCH',
  url: 'https://dev-ijkuzfimp1b5u4ij.us.auth0.com/api/v2/clients//OOopzlQvntQ8sAgd64Zq1KysIdCSdcKY',
  headers: {
    'content-type': 'application/json',
    authorization: 'Bearer API2_ACCESS_TOKEN',
    'cache-control': 'no-cache'
  },
  data: {initiate_login_uri: 'https://reacttodolistbyritesh.onrender.com'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});