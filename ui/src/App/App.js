import React from 'react';
import { Query } from 'react-apollo';

import Routes from './Routes';
import getPlacesQuery from '../graphql/getPlacesQuery';
import LoaderComponent from './Loading';
import ErrorComponent from './Error';

const App = () => {
  return (
    <Query query={getPlacesQuery}>
      {({ loading, error, data }) => {
        if (loading) return LoaderComponent();
        if (error) return ErrorComponent();

        return <Routes places={data.places} />;
      }}
    </Query>
  );
};

export default App;
