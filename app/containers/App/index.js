import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../../containers/HomePage/Loadable";
import NotFoundPage from "../../containers/NotFoundPage/Loadable";

import AppLayout from "../AppLayout/AppLayout";

export default function App() {
  return (
    <div>
      <AppLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </AppLayout>
    </div>
  );
}
