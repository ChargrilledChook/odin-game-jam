import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Title from "./components/Title";
import Vocab from "./components/Vocab";
import Levels from "./components/Levels";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/vocab" component={Vocab} />
        <Route path="/levels" component={Levels} />
        <Route path="/play" component={Layout} />
        <Route path="/" component={Title} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
