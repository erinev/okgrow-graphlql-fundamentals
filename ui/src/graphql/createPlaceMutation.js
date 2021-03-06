import gql from 'graphql-tag';

export default gql`
  mutation createPlace($input: CreatePlaceInput!) {
    createPlace(input: $input) {
      id
      name
      visited
      location {
        latitude
        longitude
        formattedAddress
        weather {
          icon
          temperature
        }
      }
    }
  }
`;
