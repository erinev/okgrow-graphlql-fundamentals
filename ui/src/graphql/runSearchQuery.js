import gql from 'graphql-tag';

export default gql`
  query($search: String!) {
    locationSuggestion(name: $search) {
      formattedAddress
    }
  }
`;
