const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const CharacterType = require("./types/Character");
const FilmType = require("./types/Film");
const StarShipType = require("./types/StarShip");
const VehicleType = require("./types/Vehicle");
const PlanetType = require("./types/Planet");
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
    },
    vehicles: {
      args: {
        id: { type: GraphQLString }
      },
      type: VehicleType,
      resolve(source, { id }) {
        return SWAPI.getVehicle(id);
      }
    },
    planets: {
      args: {
        id: { type: GraphQLString }
      },
      type: PlanetType,
      resolve(source, { id }) {
        return SWAPI.getPlanet(id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
