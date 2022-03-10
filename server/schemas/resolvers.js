const { GoalsForPartner } = require('../models');

const resolvers = {
    Query:{
        GFP: async ()=> {
            return await GoalsForPartner.find({});
        }
    }
};

module.exports = resolvers;