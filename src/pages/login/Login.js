import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BasicTextFields, ContainedButtons} from 'components'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30ch',
        display: 'flex',
        flexDirection: 'column'
      },
    },
  }));

export function Login (){
    const classes = useStyles();
    return(
        <form className={classes.root} noValidate autoComplete="off">
            <BasicTextFields id="login"  label="Login" />
            <BasicTextFields id="password"  label="Password" />
            <ContainedButtons type="button" variant="contained" color="primary">
                <span>Login</span>
            </ContainedButtons>

        </form>
    )
}