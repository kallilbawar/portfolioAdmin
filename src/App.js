import {
  SideBarContainer,
  TopBarContainer,
  ContentContainer,
} from "./containers";
import "normalize.css";
import { Wraper } from "components";
import { Router } from "react-router";

export default function App() {
  return (
    <>
      <TopBarContainer />
      <Wraper>
        <SideBarContainer />
        <Router>
          <ContentContainer />
        </Router>
      </Wraper>
    </>
  );
}
