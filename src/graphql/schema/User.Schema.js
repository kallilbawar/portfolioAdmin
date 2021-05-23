import { gql } from '@apollo/client';

export const Users = gql`
query {
     listUsers {
       id
       name
       email

     }
   }
`

