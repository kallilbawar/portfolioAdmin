import { gql } from "@apollo/client";

export const listContracts = gql`
  query {
    listContracts {
      number
      name
      start_date
      end_date
      userId
      user {
        name
      }
    }
  }
`;

export const Deletecontract = gql`
  mutation deletecontract($id: Int!) {
    deletecontract(id: $id) {
      id
    }
  }
`;

export const Createcontract = gql`
  mutation createContact(
    $number: Int!
    $name: String!
    $start_date: GQLDateTime!
    $end_date: GQLDateTime!
    $userId: Int!
  ) {
    createContract(
      number: $number
      name: $name
      start_date: $start_date
      end_date: $end_date
      userId: $userId
    ) {
      number
      name
      start_date
      end_date
      userId
    }
  }
`;

export const Updatecontract = gql`
  mutation updateContact(
    $id: Int!
    $number: Int!
    $name: String!
    $start_date: GQLDateTime!
    $end_date: GQLDateTime!
    $userId: Int!
  ) {
    updateContract(
      id: $id
      number: $number
      name: $name
      start_date: $start_date
      end_date: $end_date
      userId: $userId
    ) {
      id
      number
      name
      start_date
      end_date
      userId
    }
  }
`;
