const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Book {
    _id: ID!
    title: String
    description: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getSingleUser: User
  }

  input bookInput {
    title: String
    description: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }

  type Mutation {
    createUser(username: String!, email: String!, password, String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(input: bookInput): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
