const Mutation = {
    createBud: (root, args, context, info) => {
        const budData = {...args};

        return context.db.mutation.createBudType({
            data: budData
        })
    },
    deleteBud: (root, args, context, info) => {
        return context.db.mutation.deleteBudType({
            where: {id: args.where.id}
        })
    },
    updateBud: (root, args, context, info) => {
        const updates = {...args};
        delete updates.id;
        return context.db.mutation.updateBudType({
            data: updates,
            where: {
                id: args.id
            }
        }, info)
    }
};
    
module.exports = Mutation;