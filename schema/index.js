const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const PersonType = require("../types/Person");
const SWAPI = require("../services/swapi");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    people: {
      args: {
        id: { type: GraphQLString }
      },
      type: PersonType,
      resolve(parentValue, { id }) {
        return SWAPI.getPeople(id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
