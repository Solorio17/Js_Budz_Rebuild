const Mutation = {
    createBud: (root, args, context, info) => {
        return context.prisma.createBudType({
            ...args
        })
    }
};
    
module.exports = Mutation;