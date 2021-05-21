import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BasicTextFields, ContainedButtons } from "components";
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
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "8rem",
      }}
    >
      <BasicTextFields id="login" label="Login" />
      <BasicTextFields id="password" label="Password" />
      <ContainedButtons type="button" variant="contained" color="primary">
        <span>Login</span>
      </ContainedButtons>
    </form>
  );
}
