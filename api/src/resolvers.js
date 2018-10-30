// Remove the mocks variable once we connect to the db
const mocks = [
  { id: '1', name: 'Santa Fe', visited: true },
  { id: '2', name: 'Boulder', visited: true },
  { id: '3', name: 'Yellowstone', visited: false },
];

const resolvers = {
  Query: {
    hello: (root, args, context) => `Hello ${args.who || 'world'}!`,
    places: (root, args, { Place }) => Place.all({ limit: args.limit }),
    locationSuggestion: (root, args, { Location }) => Location.get(args.name),
  },
  Mutation: {
    createPlace: async (_, { input: { address } }, { Place }) => {
      const doc = {
        name: address,
        visited: false,
      };

      const insertedId = await Place.insert(doc);
      const newPlace = await Place.findOneById(insertedId);

      return newPlace;
    },
    updatePlace: async (_, { input: { id, visited } }, { Place }) => {
      const retrievedPlace = await Place.findOneById(id);

      retrievedPlace.visited = visited;

      await Place.updateById(id, retrievedPlace);

      const updatedPlace = await Place.findOneById(id);

      return updatedPlace;
    },
  },
  Place: {
    location: (place, args, { Location }) => Location.get(place.name),
  },
  Location: {
    weather: (location, args, { Weather }) => Weather.get(location),
  },
};

export default resolvers;
