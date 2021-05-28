import {
  SideBarContainer,
  TopBarContainer,
  ContentContainer,
} from "containers";
import { Wraper } from "components";
import { useEffect, useState } from "react";
import { Login } from "pages/login/Login";

export function Session() {

  const etat = JSON.parse(localStorage.getItem("user"));
  const [session, setSession] = useState(false);

  useEffect(() => {

    if(etat)
    {
      setSession(true)
    }
    
    if(!etat){

      setSession(false)
    }

  }, [etat]);
  
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
