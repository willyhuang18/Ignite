const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type GoalsForPartner {
       _id: ID
       goalTitle: String
       userRef: Int
       LoveFilter: String 
    }

    type Query{
        GFP: [GoalsForPartner]
    }

`;

module.exports = typeDefs;