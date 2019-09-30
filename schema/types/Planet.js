const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLFloat,
  GraphQLInt
} = require("graphql");
const CharacterType = require("./Character");
const PlanetType = require("./Planet");
const SWAPI = require("../../services/swapi");
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
      type: GraphQLFloat
    },
    gravity: {
      type: GraphQLFloat
    },
    name: {
      type: GraphQLString
    },
    orbitalPeriod: {
      type: GraphQLInt,
      resolve({ orbital_period }) {
        return orbital_period;
      }
    },
    population: {
      type: GraphQLInt
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
      type: GraphQLFloat,
      resolve({ rotation_period }) {
        return rotation_period;
      }
    },
    surfaceWater: {
      type: GraphQLFloat,
      resolve({ surface_water }) {
        return surface_water;
      }
    },
    terrain: {
      type: GraphQLString
    }
  }
});
