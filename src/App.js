import React from "react";
import { Switch, Route } from "react-router-dom";
import AccordionPage from "./pages/AccordionPage";
import Home from "./pages/Home";
import ModalPage from "./pages/ModalPage";

const App = () => {
  return (
    <Switch>
      <Route path={["/home", "/"]} exact component={Home} />
      <Route path={"/modal"} exact component={ModalPage} />
      <Route path={"/accordion"} exact component={AccordionPage} />
    </Switch>
  );
};

export default App;
