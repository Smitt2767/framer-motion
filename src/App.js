import React from "react";
import { Switch, Route } from "react-router-dom";
import AccordionPage from "./pages/AccordionPage";
import CanvasPage from "./pages/CanvasPage";
import Home from "./pages/Home";
import ModalPage from "./pages/ModalPage";

const App = () => {
  return (
    <Switch>
      <Route path={["/home", "/"]} exact component={Home} />
      <Route path={"/modal"} exact component={ModalPage} />
      <Route path={"/accordion"} exact component={AccordionPage} />
      <Route path={"/canvas"} exact component={CanvasPage} />
    </Switch>
  );
};

export default App;
