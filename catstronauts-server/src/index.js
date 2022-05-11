//TODO
const {AolloServer} = require('apollo-server');
const typeDefs = require('./schema');

const server = AolloServer({typeDefs});