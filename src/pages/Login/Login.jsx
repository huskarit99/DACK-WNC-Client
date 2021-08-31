import { createBrowserHistory } from "history";
import React, { useRef, useState, Fragment } from "react";

import { loginApi } from "../../services/api/userApi";
import colorAlertEnum from "../../utils/enums/colorAlertEnum";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = createBrowserHistory({ forceRefresh: true });
  const [messageAlert, setMessageAlert] = useState(<Fragment />);

  const handleClick = (e) => {
    e.preventDefault();
    var format = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/? ]+/;
    if (format.test(emailRef.current.value)) {
      setMessageAlert(
        <p
          style={{
            color: colorAlertEnum.ERROR,
            marginTop: "5px",
            marginLeft: "20px",
          }}
        >
          {"Không được sử dụng kí tự đặc biệt !!!"}
        </p>
      );
    } else {
      loginApi(emailRef.current.value, passwordRef.current.value).then(
        (res) => {
          if (res.isSuccess) {
            history.push("/");
          } else {
            setMessageAlert(
              <p
                style={{
                  color: colorAlertEnum.ERROR,
                  marginTop: "5px",
                  marginLeft: "20px",
                }}
              >
                {res.message}
              </p>
            );
          }
        }
      );
    }
  };

  return (
    <div className="error-pagewrap" style={{ overflow: "hidden" }}>
      <div className="error-page-int">
        <div className="text-center custom-login">
          <h3>Đăng nhập</h3>
        </div>
        <div className="content-error">
          <div className="hpanel">
            <div className="panel-body">
              <form action="/login" id="loginForm" method="POST">
                <div className="form-group">
                  <label className="control-label" htmlFor="username">
                    Email
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="example5599@gmail.com"
                    ref={emailRef}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="password">
                    Mật khẩu
                  </label>
                  <input
                    required
                    type="password"
                    placeholder="******"
                    className="form-control"
                    ref={passwordRef}
                  />
                </div>
                {messageAlert}
                <button
                  type="submit"
                  className="btn btn-success btn-block loginbtn"
                  onClick={handleClick}
                >
                  Đăng nhập
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center login-footer">
          <p>
            Copyright © 2018. All rights reserved. Template by{" "}
            <a href="https://colorlib.com/wp/templates/">Colorlib</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
