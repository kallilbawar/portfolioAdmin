import {
  SideBarContainer,
  TopBarContainer,
  ContentContainer,
} from "containers";
import { Wraper } from "components";
import { useState } from "react";
import { Login } from "pages/login/Login";

export function Home() {
  const [userSession, setuserSession] = useState(true);

  return userSession === true ? (
    <>
      <TopBarContainer />
      <Wraper>
        <SideBarContainer />
        <ContentContainer />
      </Wraper>
    </>
  ) : (
    <Login />
  );
}
