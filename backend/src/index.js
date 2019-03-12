const { GraphQLServer} = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
require('dotenv').config({path: 'variables.env'});

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers:{
        Mutation: Mutation,
        Query: Query
    },
    context: {prisma}
})

server.start(() => console.log(`Server is running on port http://localhost:4000`))