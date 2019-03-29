const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs: './src/generated/prisma.graphql',
    endpoint: `https://us1.prisma.sh/jason-solorio-828c3c/js-inventory/dev`,
    debug: false
})

module.exports = db;
