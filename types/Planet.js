const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const CharacterType = require("./Character");
const PlanetType = require("./Planet");
const SWAPI = require("../services/swapi");
const axios = require("axios");

module.exports = new GraphQLObjectType({
  name: "PlanetType",
  fields: {
    name: {
      type: GraphQLString
    },
    climate: {
      type: GraphQLString
    },
    diameter: {
      type: GraphQLString
    },
    gravity: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    orbitalPeriod: {
      type: GraphQLString,
      resolve({ orbital_period }) {
        return orbital_period;
      }
    },
    population: {
      type: GraphQLString
    },
    residents: {
      type: new GraphQLList(CharacterType),
      resolve(
        source,
        args,
        context,
        {
          variableValues: { id }
        }
      ) {
        return SWAPI.getResidentsForPlanet(id);
      }
    },
    rotationPeriod: {
      type: GraphQLString,
      resolve({ rotation_period }) {
        return rotation_period;
      }
    },
    surfaceWater: {
      type: GraphQLString,
      resolve({ surface_water }) {
        return surface_water;
      }
    },
    terrain: {
      type: GraphQLString
    }
  }
});
