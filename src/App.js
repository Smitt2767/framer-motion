import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ModalPage from "./pages/ModalPage";

const App = () => {
  return (
    <Switch>
      <Route path={["/home", "/"]} exact component={Home} />
      <Route path={"/modal"} exact component={ModalPage} />
    </Switch>
  );
};

export default App;
