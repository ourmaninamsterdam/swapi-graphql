const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://swapi.co/api"
});

module.exports = {
  getPeople(id) {
    return axiosInstance.get(`/people/${id}`).then(response => response.data);
  }
};
