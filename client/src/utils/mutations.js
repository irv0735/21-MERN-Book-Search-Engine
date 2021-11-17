import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;

export const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input:bookInput!) {
	saveBook(input:$input) {
		username
    savedBooks {
      title
      description
      bookId
      image
      link
      authors
    }
  }
}
`;

export const DELETE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      username
      savedBooks {
        title
        description
        bookId
        image
        link
        authors
      }
    }
  }
`;
