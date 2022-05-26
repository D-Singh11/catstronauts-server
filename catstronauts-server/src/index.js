//TODO
const {ApolloServer} = require('apollo-server');
const TracksAPI = require('./data-sources/track-api');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //Configuring the dataSources option for our ApolloServer to make our RestDataSource API available to all resolvers from their context parameter
  dataSources: () => {
    return {
      tracksAPI: new TracksAPI()
    }
  }
});

server.listen().then(()=>{
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});