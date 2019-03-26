const Mutation = {
    createBud: (root, args, context, info) => {
        return context.prisma.createBudType({
            ...args
        })
    },
    deleteBud: (root, args, context, info) => {
        return context.prisma.deleteBudType({
            ...args
        })
    },
    updateBud: (root, args, context, info) => {
        const updates = {...args};
        delete updates.id;
        return context.prisma.updateBudType({
            data: updates,
            where: {
                id: args.id
            }
        }, info)
    }
};
    
module.exports = Mutation;