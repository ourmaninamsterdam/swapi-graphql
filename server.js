const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

const DEFAULT_PORT = 4000;
const port = process.env.PORT || DEFAULT_PORT;
const environment = process.env.NODE_ENV || "development";
const isDevEnvironment = environment === "development";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    customFormatErrorFn: isDevEnvironment
      ? error => ({
          message: error.message,
          locations: error.locations,
          stack: error.stack ? error.stack.split("\n") : [],
          path: error.path
        })
      : null
  })
);

app.listen(port, () => {
  console.log(`SWAPI GraphQL listening on localhost:${port}/graphql`);
});
