const Query = {
    budList: (root, args, context, info) => {
        return context.db.query.budTypes()
    },
    bud: (root, args, context, info) => {
    
        // console.log(args.where.id)

        return context.db.query.budType({
            where:{id: args.where.id }
        })
    }
};
    
module.exports = Query;