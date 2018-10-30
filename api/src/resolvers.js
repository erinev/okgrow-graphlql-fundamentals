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
  Place: {
    location: (place, args, { Location }) => Location.get(place.name),
  },
  Location: {
    weather: (location, args, { Weather }) => Weather.get(location),
  },
};

export default resolvers;
