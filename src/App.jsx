import React, {useEffect} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MenuBar from "./parts/containers/MenuBar/MenuBar";
import PrivateRoute from "./parts/components/PrivateRoute/PrivateRoute";
import { appendScript } from './utils/appendScripts';

const App = () => {
  useEffect(() => {
    appendScript('js/jquery-price-slider.js');
    appendScript('js/counterup/jquery.counterup.min.js');
    appendScript('js/counterup/waypoints.min.js');
    appendScript('js/counterup/counterup-active.js');
    appendScript('js/metisMenu/metisMenu.min.js');
    appendScript('js/metisMenu/metisMenu-active.js');
    appendScript('js/morrisjs/raphael-min.js');
    appendScript('js/morrisjs/morris.js');
    appendScript('js/morrisjs/morris-active.js');
    appendScript('js/sparkline/jquery.sparkline.min.js');
    appendScript('js/sparkline/jquery.charts-sparkline.js');
    appendScript('js/sparkline/sparkline-active.js');
    appendScript('js/calendar/moment.min.js');
    appendScript('js/calendar/fullcalendar.min.js');
    appendScript('js/calendar/fullcalendar-active.js');
    appendScript('js/jquery.maskedinput.min.js');
    appendScript('js/masking-active.js');
    appendScript('js/datepicker/jquery-ui.min.js');
    appendScript('js/datepicker/datepicker-active.js');
    appendScript('js/form-validation/jquery.form.min.js');
    appendScript('js/form-validation/jquery.validate.min.js');
    appendScript('js/form-validation/form-active.js');
    appendScript('js/dropzone/dropzone.js');
    appendScript('js/summernote/summernote.min.js');
    appendScript('js/summernote/summernote-active.js');
    appendScript('js/icheck/icheck.min.js');
    appendScript('js/icheck/icheck-active.js');
    appendScript('js/main.js');
  }, []);
  return (
    <BrowserRouter>
      <MenuBar>
        <Switch>
          {/* <PrivateRoute exact path="/room" component={Room} />
          <PrivateRoute exact path="/lobby" component={Lobby} />
          
          <PrivateRoute exact path="/profile" component={Profile} /> */}
          <PrivateRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/register" component={Register} />
          <Route exact path="/courses" component={Home} />
          <Route exact path="/courses/search" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </MenuBar>
    </BrowserRouter>
  );
};

export default App;
