import React, { Fragment } from "react";
import { useRecoilValue } from "recoil";
import { Route, Redirect, useLocation } from "react-router-dom";

import isAuthenticatedState from "../../../state/isAuthenticatedState";
import stateOfAuthentication from "../../../utils/enums/stateOfAuthentication";
import userState from "../../../state/userState";

const routeAdmin = [
  "/categories",
  "/courses",
  "/students",
  "/teachers",
  "/profile",
];
const routeTeacher = ["/profile", "/upload-course"];
const routeStudent = ["/watch-list", "/profile"];

const roleBelongToRoute = {
  teacher: routeTeacher,
  admin: routeAdmin,
  student: routeStudent,
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const user = useRecoilValue(userState);
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  if (isAuthenticated === stateOfAuthentication.PROCESSING || !user) {
    return <Fragment />;
  } else {
    if (location.pathname === "/login" || location.pathname === "/register") {
      return (
        <Route
          {...rest}
          render={() => {
            if (isAuthenticated === stateOfAuthentication.SUCCESS)
              return <Redirect to="/" />;
            else if (isAuthenticated === stateOfAuthentication.FAIL)
              return <Component />;
          }}
        />
      );
    } else {
      return (
        <Route
          {...rest}
          render={() => {
            if (isAuthenticated === stateOfAuthentication.FAIL) {
              return <Redirect to="/" />;
            } else {
              if (isAuthenticated === stateOfAuthentication.SUCCESS) {
                if (roleBelongToRoute[user.role].includes(location.pathname)) {
                  return <Component />;
                }
              }
              return <Redirect to="/" />;
            }
          }}
        />
      );
    }
  }
};

export default PrivateRoute;
