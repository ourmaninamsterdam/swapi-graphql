const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://swapi.co/api"
});

const getFilm = id => {
  return axiosInstance.get(`/films/${id}`).then(response => response.data);
};

const getPeople = id => {
  return axiosInstance.get(`/people/${id}`).then(response => response.data);
};

const getFilmsForPerson = async id => {
  const { films } = await getPeople(id);
  const filmPromises = films.map(film => {
    const segments = film.split("/");
    const id = segments[segments.length - 2];
    return getFilm(id);
  });
  return axios.all([...filmPromises]);
};

module.exports = {
  getFilm,
  getPeople,
  getFilmsForPerson
};
