const { ApolloServer, gql } = require('apollo-server');

// GraphQL schema
const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    releaseDate: String!
    overview: String!
    poster: String!
    rating: Float!
  }

  type Query {
    movies: [Movie!]!
  }
`;

// Dummy data
const moviesData = [
  {
    id: "1",
    title: "The Matrix",
    releaseDate: "1999-03-31",
    overview: "A computer hacker learns about the true nature of his reality.",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: 8.7
  },
  {
    id: "2",
    title: "Inception",
    releaseDate: "2010-07-16",
    overview: "A thief who steals corporate secrets through dream-sharing technology.",
    poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    rating: 8.8
  },
  {
    id: "3",
    title: "Interstellar",
    releaseDate: "2014-11-07",
    overview: "A team travels through a wormhole in space to save humanity.",
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    rating: 8.6
  }
];

// Resolvers
const resolvers = {
  Query: {
    movies: () => moviesData,
  },
};

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start server
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
