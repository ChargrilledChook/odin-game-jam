import React from "react";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import Layout from "./Layout";
import Title from "./components/Title";
import Vocab from "./components/Vocab";
import Levels from "./components/Levels";

const Routes = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
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
