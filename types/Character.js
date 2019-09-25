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
      type: GraphQLString
    },
    hairColor: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.hair_color;
      }
    },
    height: {
      type: GraphQLString
    },
    mass: {
      type: GraphQLString
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
        return SWAPI.getFilmsForPerson(id);
      }
    }
  }
});
