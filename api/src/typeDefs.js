export default `
  type Query {
    hello(who: String): String!
    places(limit: Int): [Place!]!
    locationSuggestion(name: String!): Location
  }

  type Mutation {
    createPlace(input: CreatePlaceInput): Place!
    updatePlace(input: UpdatePlaceInput): Place!
  }

  input CreatePlaceInput {
    address: String!
  }

  input UpdatePlaceInput {
    id: ID!,
    visited: Boolean!
  }

  type Place {
    id: ID!
    name: String!
    visited: Boolean!
    location: Location!
  }

  type Location {
    latitude: Float!
    longitude: Float!
    country: String!
    countryCode: String!
    formattedAddress: String!
    weather: Weather!
  }

  type Weather {
    icon: String!
    temperature: Float!
  }
`;
