import { Content } from "components";
import { UserTable, ErrorPage, ContractTable } from "pages";
import { Switch, Route } from "react-router-dom";

export function ContentContainer() {
  return (
    <Content>
      <Switch>
        <Route path="/users" component={UserTable} />
        <Route path="/contracts" component={ContractTable} />
        <Route component={ErrorPage} />
      </Switch>
    </Content>
  );
}
