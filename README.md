# swapi-node

GraphQL server for Star Wars API (SWAPI)

## Setup

```
yarn install
```

or

```
npm install
```

## Test in graphiql

```
http://localhost:4000/graphql
```

## Query examples

### Return character by ID

```
query PeopleQuery($id: String!) {
  people(id: $id) {
    birthYear
    eyeColor
    gender
    hairColor
    height
    mass
    skinColor
  }
}
```

### Return film by ID

```
query FilmsQuery($id: String!) {
  films(id: $id) {
    title
  }
}
```
