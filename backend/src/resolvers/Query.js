const Query = {
    budList: (root, args, context, info) => {
        return context.prisma.budTypes()
    }
};
    
module.exports = Query;