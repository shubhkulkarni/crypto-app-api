const axios = require("axios");

const _getData = request => (...params) =>
  request(...params).then(res => res.data);
const request = {
  get: _getData(axios.get)
};

module.exports = request;
