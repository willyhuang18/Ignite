import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_questionOfTheDay = gql`
  query questionOfTheDay {
    _id
    question
  }
 `;

 export const QUERY_GoalsForPartner= gql`
 query GFP {
  _id
  goalTitle
  loveFilter
 }
 `;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;

