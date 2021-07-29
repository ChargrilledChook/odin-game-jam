import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import Title from "./components/Title";
import MainBoard from "./components/MainBoard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/play" component={Layout} />
        <Route path="/" component={Title} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
