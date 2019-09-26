const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const CharacterType = require("../types/Character");
const FilmType = require("../types/Film");
const StarShipType = require("../types/StarShip");
const SWAPI = require("../services/swapi");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    character: {
      args: {
        id: { type: GraphQLString }
      },
      type: CharacterType,
      resolve(source, { id }) {
        return SWAPI.getPeople(id);
      }
    },
    films: {
      args: {
        id: { type: GraphQLString }
      },
      type: FilmType,
      resolve(source, { id }) {
        return SWAPI.getFilm(id);
      }
    },
    starships: {
      args: {
        id: { type: GraphQLString }
      },
      type: StarShipType,
      resolve(source, { id }) {
        return SWAPI.getStarship(id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
