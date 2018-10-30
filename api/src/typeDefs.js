export default `
  type Query {
    hello(who: String): String!
    places(limit: Int): [Place!]!
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
  }
`;
