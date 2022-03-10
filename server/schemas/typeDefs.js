const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type GoalsForPartner {
       _id: ID
       goalTitle: String
       userRef: [User]
       LoveFilter: String 
    }



`;

module.exports = typeDefs;