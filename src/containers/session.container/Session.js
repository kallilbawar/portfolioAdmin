import {
    SideBarContainer,
    TopBarContainer,
    ContentContainer,
  } from "containers";
  import { Wraper } from "components";
  import { useState } from "react";
  import { Login } from "pages/login/Login";
  
  export function Session() {
    const [session, setSession] = useState(true);
  
    return session === true ? (
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
  