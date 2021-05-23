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
mutation deleteUser($id: Int!){
  deleteUser(id: $id) 
  {
    id
  }
}
`;
