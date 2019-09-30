const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLFloat
} = require("graphql");
const FilmType = require("./Film");
const SWAPI = require("../../services/swapi");
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
      resolve({ birth_year }, args) {
        return birth_year;
      }
    },
    eyeColor: {
      type: GraphQLString,
      resolve({ eye_color }, args) {
        return eye_color;
      }
    },
    gender: {
      type: GraphQLString
    },
    hairColor: {
      type: GraphQLString,
      resolve({ hair_color }, args) {
        return hair_color;
      }
    },
    height: {
      type: GraphQLFloat
    },
    mass: {
      type: GraphQLFloat
    },
    skinColor: {
      type: GraphQLString,
      resolve({ skin_color }, args) {
        return skin_color;
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
        return SWAPI.getFilmsForPerson(id);
      }
    }
  }
});
