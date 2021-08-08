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
        <Route path="/word-jamble/vocab" component={Vocab} />
        <Route path="/word-jamble/levels" component={Levels} />
        <Route path="/word-jamble/play" component={Layout} />
        <Route path="/word-jamble" component={Title} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
