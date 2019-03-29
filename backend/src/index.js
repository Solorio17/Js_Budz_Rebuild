const { GraphQLServer} = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');
require('dotenv').config({path: 'variables.env'});

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers:{
        Mutation: Mutation,
        Query: Query
    },
    context: req => ({ ...req, db })
})

server.start(() => console.log(`Server is running on port http://localhost:4000`))