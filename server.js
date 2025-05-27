const { ApolloServer, gql } = require('apollo-server');

// Schema define karo
const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    releaseDate: String!
    overview: String!
  }

  type Query {
    movies: [Movie!]!
  }
`;

// Dummy movies data
const moviesData = [
  {
    id: "1",
    title: "The Matrix",
    releaseDate: "1999-03-31",
    overview: "A computer hacker learns about the true nature of his reality."
  },
  {
    id: "2",
    title: "Inception",
    releaseDate: "2010-07-16",
    overview: "A thief who steals corporate secrets through dream-sharing technology."
  },
  {
    id: "3",
    title: "Interstellar",
    releaseDate: "2014-11-07",
    overview: "A team travels through a wormhole in space to save humanity."
  }
];

// Resolver define karo
const resolvers = {
  Query: {
    movies: () => moviesData,
  },
};

// Apollo Server banayenge
const server = new ApolloServer({ typeDefs, resolvers });

// Server start karo
server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
