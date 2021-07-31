import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Title from "./components/Title";
import Vocab from "./components/Vocab";
import Levels from "./components/Levels";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/vocab" component={Vocab} />
        <Route path="/levels" component={Levels} />
        <Route path="/play/:level" component={Layout} />
        <Route path="/" component={Title} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
