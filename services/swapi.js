const axios = require("axios");

const createFetchSWAPIData = (baseURL, fetchFn) => {
  return url => fetchFn(baseURL, url);
};

const buildRequestPromises = (urls, get) =>
  urls.map(url => {
    const segments = url.split("/");
    const id = segments[segments.length - 2];
    return get(id);
  });

const fetchSWAPIData = createFetchSWAPIData(
  "https://swapi.co/api",
  (baseURL, url) =>
    axios
      .get(`${baseURL}${url}`)
      .then(response => response.data)
      .catch(error => {
        throw new Error(error);
      })
);

const getFilm = async id => {
  if (!id) {
    throw new Error("SWAPI.getFilm: Invalid 'id' supplied");
  }
  return fetchSWAPIData(`/films/${id}`);
};

const getPeople = async id => {
  if (!id) {
    throw new Error("SWAPI.getPeople: Invalid 'id' supplied");
  }
  return fetchSWAPIData(`/people/${id}`);
};

const getFilmsForPerson = async id => {
  const { films } = await getPeople(id);
  const requestPromises = buildRequestPromises(films, getFilm);

  try {
    return await axios.all([...requestPromises]);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getFilm,
  getPeople,
  getFilmsForPerson
};
