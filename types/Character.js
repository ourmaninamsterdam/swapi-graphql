const { GraphQLObjectType, GraphQLString } = require("graphql");

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
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.gender;
      }
    },
    hairColor: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.hair_color;
      }
    },
    height: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.height;
      }
    },
    mass: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.mass;
      }
    },
    skinColor: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.skin_color;
      }
    }
  }
});
