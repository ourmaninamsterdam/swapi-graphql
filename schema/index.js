const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType"
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
