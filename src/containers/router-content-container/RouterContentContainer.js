import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import {Content} from 'components';
import {ErrorPage} from 'pages';

export function RouterContentContainer() {

    return (

        <Content>
            
                <Switch >
                    <Route key="/" exact path="/" />
                    <Route exact path="/Home" />
                    <Route path="/Users" />
                    <Route path="/Contrat" />
                    <Route path="/Projet" />
                    <Route component={ErrorPage}/>
                </Switch>
        

        </Content>

    )
}