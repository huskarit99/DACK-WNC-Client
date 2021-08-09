import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MenuBar from "./parts/containers/MenuBar/MenuBar";
import PrivateRoute from "./parts/components/PrivateRoute/PrivateRoute";
import { appendScript } from "./utils/appendScripts";
import CoursesListByCategory from "./pages/CoursesListByCategory/CoursesListByCategory";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import CoursesListBySearch from "./pages/CoursesListBySearch/CoursesListBySearch";
import CourseList from "./pages/Admin/CourseList/CourseList";
import StudentList from "./pages/Admin/UsersList/StudentList/StudentList";
import TeacherList from "./pages/Admin/UsersList/TeacherList/TeacherList";
import CategoryList from "./pages/Admin/CategoryList/CategoryList";
import WatchList from "./pages/Students/WatchList/WatchList";

const App = () => {
  useEffect(() => {
    appendScript("/js/jquery-price-slider.js");
    appendScript("/js/counterup/jquery.counterup.min.js");
    appendScript("/js/counterup/waypoints.min.js");
    appendScript("/js/counterup/counterup-active.js");
    appendScript("/js/metisMenu/metisMenu.min.js");
    appendScript("/js/metisMenu/metisMenu-active.js");
    appendScript("/js/morrisjs/raphael-min.js");
    appendScript("/js/morrisjs/morris.js");
    appendScript("/js/morrisjs/morris-active.js");
    appendScript("/js/sparkline/jquery.sparkline.min.js");
    appendScript("/js/sparkline/jquery.charts-sparkline.js");
    appendScript("/js/sparkline/sparkline-active.js");
    appendScript("/js/calendar/moment.min.js");
    appendScript("/js/calendar/fullcalendar.min.js");
    appendScript("/js/calendar/fullcalendar-active.js");
    appendScript("/js/jquery.maskedinput.min.js");
    appendScript("/js/masking-active.js");
    appendScript("/js/datepicker/jquery-ui.min.js");
    appendScript("/js/datepicker/datepicker-active.js");
    appendScript("/js/form-validation/jquery.form.min.js");
    appendScript("/js/form-validation/jquery.validate.min.js");
    appendScript("/js/form-validation/form-active.js");
    appendScript("/js/dropzone/dropzone.js");
    appendScript("/js/summernote/summernote.min.js");
    appendScript("/js/summernote/summernote-active.js");
    appendScript("/js/icheck/icheck.min.js");
    appendScript("/js/icheck/icheck-active.js");
    appendScript("/js/main.js");
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
          {/* admin */}
          <PrivateRoute exact path="/categories" component={CategoryList}/>
          <PrivateRoute exact path="/courses" component={CourseList}/>
          <PrivateRoute exact path="/students" component={StudentList}/>
          <PrivateRoute exact path="/teachers" component={TeacherList}/>
          {/* user */}
          <PrivateRoute exact path="/watch-list" component={WatchList}/>
          <Route exact path="/courses/category" component={CoursesListByCategory} />
          <Route exact path="/course/:id" component={CourseDetail} />
          <Route exact path="/courses/search" component={CoursesListBySearch} />
          <Route path="/" component={Home} />
        </Switch>
      </MenuBar>
    </BrowserRouter>
  );
};

export default App;
