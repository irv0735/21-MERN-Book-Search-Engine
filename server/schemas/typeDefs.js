const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [books]
  }

  type Book {
    _id: ID!
    authors: [String!]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    user: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password, String!): User
    saveBook()
    deleteBook()
    login()
  }
`;

module.exports = typeDefs;
