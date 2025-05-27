const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

// ✅ GraphQL schema
const schema = buildSchema(`
  type Movie {
    id: ID
    title: String
    releaseDate: String
    overview: String
    poster: String
    rating: Float
  }

  type Query {
    movies: [Movie]
  }
`);

// ✅ Static movie data
const moviesData = [
  {
    id: "1",
    title: "Inception",
    releaseDate: "2010-07-16",
    overview: "A thief with the ability to enter people's dreams and steal their secrets.",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    rating: 8.8,
  },
  {
    id: "2",
    title: "Interstellar",
    releaseDate: "2014-11-07",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.6,
  },
  {
    id: "3",
    title: "The Dark Knight",
    releaseDate: "2008-07-18",
    overview: "When the menace known as the Joker wreaks havoc and chaos on Gotham, Batman must accept one of the greatest psychological and physical tests.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
  },
];

// ✅ Resolvers
const root = {
  movies: () => moviesData,
};

// ✅ Express app
const app = express();
app.use(cors()); // Enable CORS

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true, // Enable GraphiQL UI
}));

// ✅ Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
});
