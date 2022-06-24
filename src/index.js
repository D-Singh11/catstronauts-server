//TODO
const {ApolloServer} = require('apollo-server');
const TracksAPI = require('./data-sources/track-api');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //Configuring the dataSources option for our ApolloServer to make our RestDataSource API available to all resolvers from their context paramete
  dataSources: () => {
    return {
      tracksAPI: new TracksAPI()
    }
  }
});

server.listen({port: process.env.PORT || 4000}).then(()=>{  // sets the server port from environmet variable PORT  or defaults it to 4000
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});