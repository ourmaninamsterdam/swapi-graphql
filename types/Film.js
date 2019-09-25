const { GraphQLObjectType, GraphQLString } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "FilmType",
  fields: {
    title: {
      type: GraphQLString
    },
    director: {
      type: GraphQLString
    },
    episodeID: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.episode_id;
      }
    },
    openingCrawl: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.opening_crawl;
      }
    },
    producer: {
      type: GraphQLString
    },
    releaseDate: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return parentValue.release_date;
      }
    }
  }
});
