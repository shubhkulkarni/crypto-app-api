const axios = require("axios");
// axios.interceptors.request.use(request => {
//   console.log("Starting Request", request);
//   return request;
// });

// axios.interceptors.response.use(response => {
//   console.log("Response:", response);
//   return response;
// });

const _getData = request => (...params) =>
  request(...params).then(res => res.data);
const request = {
  get: _getData(axios.get)
};

module.exports = request;
