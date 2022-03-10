const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type GoalsForPartner {
       _id: ID
       goalTitle: String
       loveFilter: String 
       userRef: Int
    }

    type Query{
        GFP: [GoalsForPartner]
    }

`;

module.exports = typeDefs;