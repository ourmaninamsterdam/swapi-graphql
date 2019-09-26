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

const getStarship = async id => {
  if (!id) {
    throw new Error("SWAPI.getStarship: Invalid 'id' supplied");
  }
  return fetchSWAPIData(`/starships/${id}`);
};

const getMultiple = async (id, rootAttr, entryResolver, targetResolver) => {
  const result = await entryResolver(id);
  const requestPromises = buildRequestPromises(
    result[rootAttr],
    targetResolver
  );
  try {
    return await axios.all([...requestPromises]);
  } catch (error) {
    throw new Error(error);
  }
};

const getFilmsForPerson = async id => {
  return getMultiple(id, "films", getPeople, getFilm);
};

const getFilmsForStarship = async id => {
  const { starships } = await getStarship(id);
  const requestPromises = buildRequestPromises(starships, getFilm);

  try {
    return await axios.all([...requestPromises]);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getFilm,
  getPeople,
  getStarship,
  getFilmsForPerson,
  getFilmsForStarship
};
