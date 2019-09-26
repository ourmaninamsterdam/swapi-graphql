const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
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
      type: GraphQLString,
      resolve(source) {
        return source.cargo_capacity;
      }
    },
    consumables: {
      type: GraphQLString
    },
    costInCredits: {
      type: GraphQLString,
      resolve(source) {
        return source.cost_in_credits;
      }
    },
    crew: {
      type: GraphQLString
    },
    hyperdriveRating: {
      type: GraphQLString,
      resolve(source) {
        return source.hyperdrive_rating;
      }
    },
    length: {
      type: GraphQLString
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
      type: GraphQLString
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
