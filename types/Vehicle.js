const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const FilmType = require("./Film");
const CharacterType = require("./Character");
const SWAPI = require("../services/swapi");
const axios = require("axios");

module.exports = new GraphQLObjectType({
  name: "VehicleType",
  fields: {
    name: {
      type: GraphQLString
    },
    cargoCapacity: {
      type: GraphQLString,
      resolve(source) {
        return source.cargo_capacity;
      }
    },
    consumables: {
      type: GraphQLString,
      resolve(source) {
        return source.consumables;
      }
    },
    costInCredits: {
      type: GraphQLString,
      resolve(source) {
        return source.cost_in_credits;
      }
    },
    created: {
      type: GraphQLString,
      resolve(source) {
        return source.created;
      }
    },
    crew: {
      type: GraphQLString,
      resolve(source) {
        return source.crew;
      }
    },
    edited: {
      type: GraphQLString,
      resolve(source) {
        return source.edited;
      }
    },
    length: {
      type: GraphQLString,
      resolve(source) {
        return source.length;
      }
    },
    manufacturer: {
      type: GraphQLString,
      resolve(source) {
        return source.manufacturer;
      }
    },
    maxAtmospheringSpeed: {
      type: GraphQLString,
      resolve(source) {
        return source.max_atmosphering_speed;
      }
    },
    model: {
      type: GraphQLString,
      resolve(source) {
        return source.model;
      }
    },
    passengers: {
      type: GraphQLString,
      resolve(source) {
        return source.passengers;
      }
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
