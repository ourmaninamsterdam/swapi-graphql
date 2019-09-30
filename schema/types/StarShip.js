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
  name: "StarshipType",
  fields: {
    MGLT: {
      type: GraphQLString
    },
    cargoCapacity: {
      type: GraphQLFloat,
      resolve(source) {
        return source.cargo_capacity;
      }
    },
    consumables: {
      type: GraphQLString
    },
    costInCredits: {
      type: GraphQLInt,
      resolve(source) {
        return source.cost_in_credits;
      }
    },
    crew: {
      type: GraphQLInt
    },
    hyperdriveRating: {
      type: GraphQLFloat,
      resolve(source) {
        return source.hyperdrive_rating;
      }
    },
    length: {
      type: GraphQLFloat
    },
    manufacturer: {
      type: GraphQLString
    },
    maxAtmospheringSpeed: {
      type: GraphQLString
    },
    model: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    passengers: {
      type: GraphQLInt
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
        return SWAPI.getFilmsForStarship(id);
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
        return SWAPI.getPilotsForStarship(id);
      }
    },
    starshipClass: {
      type: GraphQLString
    }
  }
});
