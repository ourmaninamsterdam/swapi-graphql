const { GraphQLObjectType, GraphQLString } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "PersonType",
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
    }
  }
});
