import { createBrowserHistory } from "history";
import { Avatar, Typography } from "@material-ui/core";
import { useRecoilState, useRecoilValue } from "recoil";
import React, { useEffect, useState, Fragment } from "react";

import useStyles from "./style";
import userState from "../../../state/userState";
import isAuthenticatedState from "../../../state/isAuthenticatedState";
import { getSelfInfoApi, logoutApi } from "../../../services/api/userApi";
import stateOfAuthentication from "../../../utils/enums/stateOfAuthentication";

const Header = () => {
  const classes = useStyles();
  const [user, setUser] = useRecoilState(userState);
  const history = createBrowserHistory({ forceRefresh: true });
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  const [listMenu, setlistMenu] = useState([]);

  useEffect(() => {
    if (isAuthenticated === stateOfAuthentication.SUCCESS) {
      getSelfInfoApi().then((result) => {
        setUser(result);
        switch (result.role) {
          case "teacher":
            setlistMenu(listMenu1.concat(listMenu3));
            break;
          case "admin":
            setlistMenu(listMenu1.concat(listMenu3));
            break;
          case "student":
            setlistMenu(listMenu1.concat(listMenu2, listMenu3));
            break;
          default:
            break;
        }
      });
    }
  }, [isAuthenticated]);

  const handleLogOut = () => {
    logoutApi().then((res) => {
      if (res.isSuccess) {
        history.push("/");
      }
    });
  };

  const listMenu1 = [
    <li>
      <a href="/profile">
        <span className="edu-icon edu-user-rounded author-log-ic" />
        Cá nhân
      </a>
    </li>,
  ];

  const listMenu2 = [
    <li>
      <a href="/watch-list">
        <span className="edu-icon edu-user-rounded author-log-ic" />
        Khóa học yêu thích
      </a>
    </li>,
    <li>
      <a href="/user-info">
        <span className="edu-icon edu-user-rounded author-log-ic" />
        Khóa học đăng ký
      </a>
    </li>,
  ];

  const listMenu3 = [
    <li onClick={handleLogOut}>
      <a href="/">
        <span className="edu-icon edu-locked author-log-ic" />
        Đăng xuất
      </a>
    </li>,
  ];

  return (
    <div className="header-advance-area">
      <div className="header-top-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="header-top-wraper">
                <div className="row">
                  <div className="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                    <div className="menu-switcher-pro">
                      <button
                        type="button"
                        id="sidebarCollapse"
                        className="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn"
                      >
                        <i className="educate-icon educate-nav" />
                      </button>
                    </div>
                  </div>
                  {isAuthenticated === stateOfAuthentication.SUCCESS && (
                    <div className="col-lg-10 col-md-11 col-sm-12 col-xs-12">
                      <div className="header-right-info">
                        <ul className="nav navbar-nav mai-top-nav header-right-menu">
                          <li className="nav-item">
                            <a
                              href="#"
                              data-toggle="dropdown"
                              role="button"
                              aria-expanded="false"
                              className="nav-link dropdown-toggle"
                              style={{ minWidth: "280px" }}
                            >
                              <div className={classes.div1}>
                                <div className={classes.div2}>
                                  <Avatar
                                    varient="rounded"
                                    className={classes.avatar}
                                  >
                                    {user ? user.email[0] + user.email[1] : ""}
                                  </Avatar>
                                </div>
                                <div className={classes.div3}>
                                  <Typography className={classes.typography}>
                                    {user && user.name}
                                    {" - "}
                                    {user && user.role}
                                  </Typography>
                                </div>
                                <div className={classes.div4}>
                                  <i className="fa fa-angle-down edu-icon edu-down-arrow" />
                                </div>
                              </div>
                            </a>
                            <ul
                              role="menu"
                              className="dropdown-header-top author-log dropdown-menu animated zoomIn"
                            >
                              {listMenu.map((row, index) => (
                                <Fragment key={index}>{row}</Fragment>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
