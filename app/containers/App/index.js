import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../../containers/Dashboard/Loadable";
import UsefullTools from "../../containers/UsefullTools/Loadable";
import AppLayout from "../AppLayout/AppLayout";

export default function App() {
  return (
    <div>
        <Switch>
        <Route exact path="/" component={Dashboard} />
      	<AppLayout>
          <Route path="/Home" component={Dashboard} />
          <Route path="/UsefullTools" component={UsefullTools} />
      	</AppLayout>
        </Switch>
    </div>
  );
}
