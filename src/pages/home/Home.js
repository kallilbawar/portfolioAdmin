import {
    SideBarContainer,
    TopBarContainer,
    ContentContainer,
  } from "containers";
  import { Wraper } from "components";

export function Home() {
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
