import React from 'react';
import { Mutation } from 'react-apollo';

import Input from './Input';
import createPlaceMutation from '../../../graphql/createPlaceMutation';

const AddPlace = () => {
  return (
    <Mutation
      mutation={createPlaceMutation}
      refetchQueries={['GetPlacesWthLocationAndWeatherInfo']}
    >
      {createPlace => {
        const addPlace = address => {
          createPlace({
            variables: {
              input: { address },
            },
          });
        };

        return <Input addPlace={addPlace} />;
      }}
    </Mutation>
  );
};

export default AddPlace;
