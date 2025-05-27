const { ApolloServer, gql } = require('apollo-server');

// Schema define karo
const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    releaseDate: String!
    overview: String!
    poster: String
    rating: Float
  }

  type Query {
    movies: [Movie!]!
  }
`;

// Unique movies data with poster & rating
const moviesData = [
  {
    id: "1",
    title: "Blade Runner 2049",
    releaseDate: "2017-10-06",
    overview: "A young blade runner uncovers a secret that leads him to Rick Deckard, a former blade runner missing for thirty years.",
    poster: "https://image.tmdb.org/t/p/w500/aMpyrCaxJXO6HmVGx6e4J8DYYzl.jpg",
    rating: 8.0
  },
  {
    id: "2",
    title: "The Prestige",
    releaseDate: "2006-10-20",
    overview: "After a tragic accident, two magicians engage in a battle to create the ultimate illusion while sacrificing everything.",
    poster: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
    rating: 8.5
  },
  {
    id: "3",
    title: "Arrival",
    releaseDate: "2016-11-11",
    overview: "A linguist works with the military to communicate with alien lifeforms after mysterious spacecraft appear around the world.",
    poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    rating: 7.9
  },
  {
    id: "4",
    title: "Dune",
    releaseDate: "2021-10-22",
    overview: "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset in the galaxy.",
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    rating: 8.2
  }
];

const resolvers = {
  Query: {
    movies: () => moviesData,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
