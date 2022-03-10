const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    questionnaire: [Questionnaire]
  }

  type QuestionOfTheDay {
    _id: ID!
    question: String!
  }

  type GoalsForPartner {
       _id: ID
       goalTitle: String
       loveFilter: String 
       userRef: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    questionOfTheDay: [QuestionOfTheDay]
    me: User
    GFP: [GoalsForPartner]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

