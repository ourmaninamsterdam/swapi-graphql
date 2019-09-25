const { GraphQLObjectType, GraphQLString } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "FilmType",
  fields: {
    title: {
      type: GraphQLString
    }
  }
});
