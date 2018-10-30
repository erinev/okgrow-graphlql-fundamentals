export default `
  type Query {
    hello(who: String): String!
    places(limit: Int): [Place]
  }

  type Place {
    id: ID!
    name: String!
    visited: Boolean!
  }
`;
