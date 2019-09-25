const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const PersonType = require("../types/Person");
const axios = require("axios");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    people: {
      args: {
        id: { type: GraphQLString }
      },
      type: PersonType,
      resolve(parentValue, { id }) {
        return axios
          .get(`https://swapi.co/api/people/${id}`)
          .then(response => response.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
