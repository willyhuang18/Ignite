const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    username2: String
    email: String!
    password: String!
    loveLanguage1: String
    loveLanguage2: String
  }

  type Auth {
    token: ID!
    user: User
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
    addUser(username: String!,username2: String! , email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addLoveLanguage(username: String, username2: String, loveLanguage1: String, loveLanguage2: String) : User
  }
`;

module.exports = typeDefs;
