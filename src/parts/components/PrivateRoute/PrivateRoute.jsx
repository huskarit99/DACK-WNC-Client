import React, { Fragment } from "react";
import { useRecoilValue } from "recoil";
import { Route, Redirect, useLocation } from "react-router-dom";

import roleState from "../../../state/roleState";
import isAuthenticatedState from "../../../state/isAuthenticatedState";
import stateOfAuthentication from "../../../utils/enums/stateOfAuthentication";

const routeAdmin = ["/abc", "/asdff"];
const routeTeacher = ["/abasdsac", "/asdasddsd"];
const routeStudent = ["/abfdasc", "/asdasd"];

const roleBelongToRoute = {
  teacher: routeAdmin,
  admin: routeTeacher,
  student: routeStudent,
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const role = useRecoilValue(roleState);
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  if (isAuthenticated === stateOfAuthentication.PROCESSING) {
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
                if (roleBelongToRoute[role].includes(location.pathname)) {
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
