const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://swapi.co/api"
});

module.exports = {
  getFilm(id) {
    return axiosInstance.get(`/films/${id}`).then(response => response.data);
  },
  getPeople(id) {
    return axiosInstance.get(`/people/${id}`).then(response => response.data);
  }
};
