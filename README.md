# swapi-graphql

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
    name
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

### Return character by ID with populated films

```
query PeopleQuery($id: String!) {
  people(id: $id) {
    name
    films {
      title
    }
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
