const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("SWAPI GraphQL listening on localhost:4000/graphql");
});
