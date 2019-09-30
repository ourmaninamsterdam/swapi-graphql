const { GraphQLObjectType, GraphQLString, GraphQLFloat } = require("graphql");

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
      type: GraphQLFloat,
      resolve({ episode_id }, args) {
        return episode_id;
      }
    },
    openingCrawl: {
      type: GraphQLString,
      resolve({ opening_crawl }, args) {
        return opening_crawl;
      }
    },
    producer: {
      type: GraphQLString
    },
    releaseDate: {
      type: GraphQLString,
      resolve({ release_date }, args) {
        return release_date;
      }
    }
  }
});
