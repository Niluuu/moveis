import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/home";
import Nav from "./components/nav";
import Watch from "./containers/watch";
import Notfound from "./components/notFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/watch/:id" component={Watch} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
