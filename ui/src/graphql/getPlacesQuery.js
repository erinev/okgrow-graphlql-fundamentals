import gql from 'graphql-tag';

export default gql`
  query GetPlacesWthLocationAndWeatherInfo {
    places {
      id
      name
      visited
      location {
        latitude
        longitude
        country
        countryCode
        formattedAddress
        weather {
          icon
          temperature
        }
      }
    }
  }
`;
