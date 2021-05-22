import { RouterContentContainer } from "./containers";
import "normalize.css";
import { BrowserRouter as Router } from "react-router-dom";
import {ApolloClientProvider} from "graphql/ApolloClientContext"

//import { gql } from "@apollo/client";

// const client = ...

// client
//   .query({
//     query: gql`
//       query {
//         listUsers {
//           name
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

export default function App() {
  return (
    <ApolloClientProvider>
      <Router>
      <RouterContentContainer />
    </Router>
    </ApolloClientProvider>
    
  );
}
