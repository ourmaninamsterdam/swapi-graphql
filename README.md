# swapi-graphql [![Build Status](https://travis-ci.org/ourmaninamsterdam/swapi-graphql.svg?branch=master)](https://travis-ci.org/ourmaninamsterdam/swapi-graphql)

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

## Types

Support for

* Characters
* Films
* Vehicles
* Planets
* Starships
* _TODO Species_

## Query examples

### Return character

```
query CharacterQuery($id: String!) {
  character(id: $id) {
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

### Return character with populated films

```
query CharacterQuery($id: String!) {
  character(id: $id) {
    name
    films {
      title
    }
  }
}
```

### Return film

```
query FilmsQuery($id: String!) {
  films(id: $id) {
    title
    releaseDate
    director
    episodeID
    openingCrawl
    producer
  }
}
```
