const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat
} = require("graphql");
const FilmType = require("./Film");
const CharacterType = require("./Character");
const SWAPI = require("../../services/swapi");
const axios = require("axios");

module.exports = new GraphQLObjectType({
  name: "VehicleType",
  fields: {
    name: {
      type: GraphQLString
    },
    cargoCapacity: {
      type: GraphQLInt,
      resolve(source) {
        return source.cargo_capacity;
      }
    },
    consumables: {
      type: GraphQLString
    },
    costInCredits: {
      type: GraphQLFloat,
      resolve(source) {
        return source.cost_in_credits;
      }
    },
    crew: {
      type: GraphQLInt
    },
    length: {
      type: GraphQLFloat
    },
    manufacturer: {
      type: GraphQLString
    },
    maxAtmospheringSpeed: {
      type: GraphQLFloat,
      resolve(source) {
        return source.max_atmosphering_speed;
      }
    },
    model: {
      type: GraphQLString
    },
    passengers: {
      type: GraphQLInt
    },
    pilots: {
      type: new GraphQLList(CharacterType),
      resolve(
        source,
        args,
        context,
        {
          variableValues: { id }
        }
      ) {
        return SWAPI.getPilotsForVehicle(id);
      }
    },
    films: {
      type: new GraphQLList(FilmType),
      resolve(
        source,
        args,
        context,
        {
          variableValues: { id }
        }
      ) {
        return SWAPI.getFilmsForVehicle(id);
      }
    },
    vehicleClass: {
      type: GraphQLString,
      resolve(source) {
        return source.vehicle_class;
      }
    }
  }
});
