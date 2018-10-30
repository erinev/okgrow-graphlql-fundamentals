import React from 'react';
import { Mutation } from 'react-apollo';

import Input from './Input';
import createPlaceMutation from '../../../graphql/createPlaceMutation';
import getPlacesQuery from '../../../graphql/getPlacesQuery';

const AddPlace = () => {
  return (
    <Mutation
      mutation={createPlaceMutation}
      update={(cache, { data: { createPlace } }) => {
        console.log('updating', createPlace);
        const { places } = cache.readQuery({
          query: getPlacesQuery,
        });
        cache.writeQuery({
          query: getPlacesQuery,
          data: { places: places.concat([createPlace]) },
        });
      }}
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
