import React, { Fragment, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

import Logo from "../Logo/Logo";
import Header from "../Header/Header";
import BreadCome from "../BreadCome/BreadCome";
import roleState from "../../../state/roleState";
import { authTokenApi } from "../../../services/api/userApi";
import isAuthenticatedState from "../../../state/isAuthenticatedState";
import stateOfAuthentication from "../../../utils/enums/stateOfAuthentication";

const defaultMenu = [
  {
    classIcon: "educate-icon educate-home icon-wrap",
    name: "Trang chủ",
    link: "/",
  },
];

const listMenu1 = [
  {
    classIcon: "educate-icon educate-professor icon-wrap",
    name: "Giáo viên",
    link: "/",
  },
  {
    classIcon: "educate-icon educate-student icon-wrap",
    name: "Học sinh",
    link: "/",
  },
];
const listMenu2 = [
  {
    classIcon: "educate-icon educate-course icon-wrap",
    name: "Khóa học",
    link: "/",
  },
];
const listMenu3 = [
  {
    classIcon: "educate-icon educate-library icon-wrap",
    name: "Lĩnh vực",
    link: "/",
  },
];
const listMenu4 = [
  {
    classIcon: "fa fa-sign-in icon-wrap",
    name: "Đăng nhập",
    link: "/login",
  },
  {
    classIcon: "fa fa-user-plus icon-wrap",
    name: "Đăng ký",
    link: "/register",
  },
];

const MenuBar = (props) => {
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);
  const setRole = useSetRecoilState(roleState);
  const [listMenu, setListMenu] = useState([]);

  useEffect(() => {
    setIsAuthenticated(stateOfAuthentication.PROCESSING);
    authTokenApi().then((result) => {
      setIsAuthenticated(result.state);
      setRole(result.role);
      if (result.state === stateOfAuthentication.SUCCESS) {
        switch (result.role) {
          case "teacher":
            setListMenu(defaultMenu.concat(listMenu2));
            break;
          case "student":
            setListMenu(defaultMenu.concat(listMenu3));
            break;
          case "admin":
            setListMenu(defaultMenu.concat(listMenu1));
            break;
          default:
        }
      } else {
        if (result.state === stateOfAuthentication.FAIL) {
          setListMenu(defaultMenu.concat(listMenu4));
        }
      }
    });
  }, [setIsAuthenticated, setRole]);

  return (
    <div style={{ backgroundColor: "rgb(240, 240, 240)", overflow: "hidden" }}>
      <div className="left-sidebar-pro">
        <nav id="sidebar" className="">
          <div className="sidebar-header">
            <a href="/">
              <img className="main-logo" src="img/logo/logo.png" alt="a" />
            </a>
            <strong>
              <a href="/">
                <img src="img/logo/logosn.png" alt="a" />
              </a>
            </strong>
          </div>
          <div className="left-custom-menu-adp-wrap comment-scrollbar">
            <nav className="sidebar-nav left-sidebar-menu-pro">
              <ul className="metismenu" id="menu1">
                {listMenu.map((row, index) => (
                  <li key={index}>
                    <a href={row.link}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          height: "21px",
                          width: "35px",
                        }}
                      >
                        <span
                          className={row.classIcon}
                          style={{ fontSize: "21px" }}
                        />
                      </div>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          height: "21px",
                        }}
                      >
                        <span className="mini-click-non">{row.name}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </nav>
      </div>
      <div className="all-content-wrapper" style={{ overflow: "hidden" }}>
        <Logo />
        <Header />
        {/* <BreadCome /> */}
        {props.children}
      </div>
    </div>
  );
};

export default MenuBar;
