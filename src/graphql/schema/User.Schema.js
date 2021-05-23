import { gql } from "@apollo/client";

export const Users = gql`
  query {
    listUsers {
      id
      name
      email
    }
  }
`;

export const DeleteUser = gql`
  mutation deleteUser($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const CreateUSer = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      name
      email
      password
    }
  }
`;

export const UpdateUSer = gql`
  mutation updateUser(
    $id: Int!
    $name: String!
    $email: String!
    $password: String!
  ) {
    updateUser(id: $id, name: $name, email: $email, password: $password) {
      id
      name
      email
      password
    }
  }
`;
