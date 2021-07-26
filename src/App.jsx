import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MenuBar from "./parts/containers/MenuBar/MenuBar";
import PrivateRoute from "./parts/components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <MenuBar>
        <Switch>
          {/* <PrivateRoute exact path="/room" component={Room} />
          <PrivateRoute exact path="/lobby" component={Lobby} />
          
          <PrivateRoute exact path="/profile" component={Profile} /> */}
          <PrivateRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </MenuBar>
    </BrowserRouter>
  );
};

export default App;
