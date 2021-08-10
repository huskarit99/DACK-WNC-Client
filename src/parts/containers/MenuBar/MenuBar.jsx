import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import React, { Fragment, useEffect, useState } from "react";

import Logo from "../Logo/Logo";
import Header from "../Header/Header";
import BreadCome from "../BreadCome/BreadCome";
import { authTokenApi } from "../../../services/api/userApi";
import { getCategoriesApi } from "../../../services/api/categoryApi";
import isAuthenticatedState from "../../../state/isAuthenticatedState";
import stateOfAuthentication from "../../../utils/enums/stateOfAuthentication";

const defaultMenu = [
  {
    classIcon: "educate-icon educate-home icon-wrap",
    name: "Trang chủ",
    link: "/",
  },
];

// admin
const listMenu1 = [
  {
    classIcon: "educate-icon educate-library icon-wrap",
    name: "Lĩnh vực",
    link: "/categories",
  },
  {
    classIcon: "educate-icon educate-course icon-wrap",
    name: "Khóa học",
    link: "/courses",
  },
  {
    classIcon: "educate-icon educate-professor icon-wrap",
    name: "Giảng viên",
    link: "/teachers",
  },
  {
    classIcon: "educate-icon educate-student icon-wrap",
    name: "Học sinh",
    link: "/students",
  },
];

// admin: table, giáo viên: table=> edit
const listMenu2 = [
  {
    classIcon: "educate-icon educate-course icon-wrap",
    name: "Khóa học",
    link: "/upload-course",
  },
];
const listMenu3 = [];
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
  const location = useLocation();
  const [role, setRole] = useState(null);
  const [listMenu, setListMenu] = useState([]);
  const [rootCategories, setRootCategories] = useState(null);
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);

  useEffect(() => {
    setIsAuthenticated(stateOfAuthentication.PROCESSING);
    authTokenApi().then((result) => {
      setIsAuthenticated(result.state);
      if (result.state === stateOfAuthentication.SUCCESS) {
        setRole(result.role);
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
    getCategoriesApi().then((result) => {
      setRootCategories(result);
    });
  }, [setIsAuthenticated, setRootCategories, setRole]);
  return (
    <div style={{ backgroundColor: "rgb(237, 237, 237)", overflow: "hidden" }}>
      <div className="left-sidebar-pro">
        <nav id="sidebar" className="">
          <div className="sidebar-header">
            <a href="/">
              <img className="main-logo" src="/img/logo/logo.png" alt="a" />
            </a>
            <strong>
              <a href="/">
                <img src="/img/logo/logosn.png" alt="a" />
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
                          style={{ fontSize: "20px" }}
                        />
                      </div>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          height: "20px",
                        }}
                      >
                        <span className="mini-click-non">{row.name}</span>
                      </div>
                    </a>
                  </li>
                ))}

                {role && role !== "teacher" && role !== "admin" && (
                  <li>
                    <a className="has-arrow" href="/" aria-expanded="false">
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          height: "21px",
                          width: "35px",
                        }}
                      >
                        <span className="educate-icon educate-library icon-wrap"></span>
                      </div>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          height: "20px",
                        }}
                      >
                        <span className="mini-click-non">Lĩnh vực</span>
                      </div>
                    </a>
                    <ul
                      className="submenu-angle"
                      aria-expanded="false"
                      style={{ marginLeft: "10px" }}
                    >
                      {rootCategories &&
                        rootCategories.root_categories &&
                        rootCategories.root_categories.map(
                          (root_category, index) => (
                            <li key={index}>
                              {root_category &&
                              root_category.categories.length > 0 ? (
                                <Fragment>
                                  <a
                                    className="has-arrow"
                                    data-toggle="collapse"
                                    href={"#" + index}
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls={index}
                                  >
                                    <span className="mini-sub-pro">
                                      {root_category.name}
                                    </span>
                                  </a>
                                  <ul
                                    className="submenu-angle"
                                    id={index}
                                    className="collapse"
                                  >
                                    {root_category &&
                                      root_category.categories &&
                                      root_category.categories.map(
                                        (category, index) => (
                                          <li key={index}>
                                            <a
                                              href={
                                                "/courses/category?categoryid=" +
                                                category._id
                                              }
                                            >
                                              <span className="mini-sub-pro">
                                                {category.name}
                                              </span>
                                            </a>
                                          </li>
                                        )
                                      )}
                                  </ul>
                                </Fragment>
                              ) : (
                                <a>
                                  <span className="mini-sub-pro">
                                    {root_category.name}
                                  </span>
                                </a>
                              )}
                            </li>
                          )
                        )}
                    </ul>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </nav>
      </div>
      <div className="all-content-wrapper" style={{ overflow: "hidden" }}>
        <Logo />
        <Header />
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && <BreadCome />}
        {props.children}
      </div>
    </div>
  );
};

export default MenuBar;
