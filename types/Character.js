const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const FilmType = require("./Film");
const SWAPI = require("../services/swapi");
const axios = require("axios");

module.exports = new GraphQLObjectType({
  name: "CharacterType",
  fields: {
    name: {
      type: GraphQLString
    },
    id: {
      type: GraphQLString
    },
    birthYear: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.birth_year;
      }
    },
    eyeColor: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.eye_color;
      }
    },
    gender: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.gender;
      }
    },
    hairColor: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.hair_color;
      }
    },
    height: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.height;
      }
    },
    mass: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.mass;
      }
    },
    skinColor: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.skin_color;
      }
    },
    films: {
      type: new GraphQLList(FilmType),
      resolve(
        parentValue,
        args,
        context,
        {
          variableValues: { id }
        }
      ) {
        return SWAPI.getPeople(id).then(response => {
          const { films } = response;
          const filmsToFetch = films.map(film => {
            const segments = film.split("/");
            const id = segments[segments.length - 2];
            return SWAPI.getFilm(id);
          });
          return axios.all([...filmsToFetch]);
        });
        return parentValue.films;
      }
    }
  }
});
