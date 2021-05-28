import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BasicTextFields, ContainedButtons } from "components";
import { userLogin } from "graphql/schema/User.Schema";
import { useState, useCallback } from "react";

import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
}));

export function Login() {
  const classes = useStyles();

  const [ getToken, {loading, error, data } ] = useLazyQuery(userLogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {

    // Login error
    if (error)
    {
      console.log('Receive response error');
      console.log(error);
      return;
    }

    // Login loading
    if (loading)
    {
      console.log('Loading login response...');
      return ;
    }

    // Login ok
    if (data)
    {
      console.log('Receive response data ok');
      console.log('Data : ', data);
      localStorage.setItem("user", JSON.stringify(true));
    }

  }, [data, loading, error]);

  const handleButtonClicked = useCallback(() => {
  
    console.log('Send request');
    console.log(password)
    console.log(email)

    // Execute login request
    getToken({variables:{email: email, password: password}})
  }, [email, password]);

  return (
    <div
      className={classes.root}
      noValidate
      autoComplete="off"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8rem",
      }}
    >
      <BasicTextFields
        id="login"
        label="Login"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <BasicTextFields
        id="password"
        label="Password"
        type ="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <ContainedButtons
        type="button"
        variant="contained"
        color="primary"
        onClick={handleButtonClicked}
      >
        <span>Login</span>
      </ContainedButtons>
    </div>
  );
}
