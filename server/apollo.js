const { gql } = require('apollo-server-fastify');

const typeDefs = gql`
  type Film {
    id: ID!
    image: String
    title: String
  }
  type Query {
    films: [Film]
  }
`;

const resolvers = {
  Query: {
    films: () => [
      {
        id: '1',
        image:
          'https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        title: 'Braveheart',
      },
    ],
  },
};

module.exports = { typeDefs, resolvers };
