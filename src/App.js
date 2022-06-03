import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AccordionPage from "./pages/AccordionPage";
import Animations from "./pages/Animations";
import CanvasPage from "./pages/CanvasPage";
import Home from "./pages/Home";
import ModalPage from "./pages/ModalPage";
import SwitchPage from "./pages/SwitchPage";
import TabsPage from "./pages/TabsPage";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path={["/home", "/"]} exact component={Home} />
        <Route path={"/animations"} exact component={Animations} />
        <Route path={"/modal"} exact component={ModalPage} />
        <Route path={"/accordion"} exact component={AccordionPage} />
        <Route path={"/canvas"} exact component={CanvasPage} />
        <Route path={"/switch"} exact component={SwitchPage} />
        <Route path={"/tabs"} exact component={TabsPage} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
