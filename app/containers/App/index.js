import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../../containers/Dashboard/Loadable";
import UsefullTools from "../../containers/UsefullTools/Loadable";
import NotFoundPage from "../../containers/NotFoundPage/Loadable";
import AppLayout from "../AppLayout/AppLayout";

export default function App() {
  return (
    <div>
        <Switch>
        <Route exact path="/" component={Dashboard} />
      	<AppLayout>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Home" component={Dashboard} />
          <Route exact path="/UsefullTools" component={UsefullTools} />
          <Route exact path="/Results" component={NotFoundPage} />
      	</AppLayout>
        </Switch>
    </div>
  );
}
