import {
  SideBarContainer,
  TopBarContainer,
  ContentContainer,
} from "./containers";
import "normalize.css";
import { Wraper } from "components";

export default function App() {
  return (
    <>
      <TopBarContainer />
      <Wraper>
        <SideBarContainer />
        <ContentContainer />
      </Wraper>
    </>
  );
}
