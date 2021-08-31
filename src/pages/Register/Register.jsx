import { createBrowserHistory } from "history";
import React, { useRef, useState, Fragment } from "react";

import { registerApi } from "../../services/api/userApi";
import colorAlertEnum from "../../utils/enums/colorAlertEnum";

const Register = () => {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);
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
      registerApi(
        emailRef.current.value,
        nameRef.current.value,
        passwordRef.current.value,
        rePasswordRef.current.value
      ).then((res) => {
        if (res.isSuccess) {
          setMessageAlert(
            <p
              style={{
                color: colorAlertEnum.SUCCESS,
                marginTop: "5px",
                marginLeft: "20px",
              }}
            >
              {"You'll generally receive the code within a few seconds"}
            </p>
          );
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
      });
    }
  };

  return (
    <div className="error-pagewrap" style={{ overflow: "hidden" }}>
      <div className="error-page-int" style={{ overflow: "hidden" }}>
        <div className="text-center custom-login">
          <h3>Đăng ký</h3>
        </div>
        <div className="content-error">
          <div className="hpanel">
            <div className="panel-body">
              <form action="#" id="loginForm">
                <div className="row">
                  <div className="form-group col-lg-12">
                    <label>Email</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      ref={emailRef}
                      placeholder="example5599@gmail.com"
                    />
                  </div>
                  <div className="form-group col-lg-12">
                    <label>Name</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      ref={nameRef}
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Password</label>
                    <input
                      required
                      type="password"
                      placeholder="******"
                      ref={passwordRef}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Repeat Password</label>
                    <input
                      required
                      type="password"
                      ref={rePasswordRef}
                      placeholder="******"
                      className="form-control"
                    />
                  </div>
                </div>
                {messageAlert}
                <div className="text-center">
                  <button
                    className="btn btn-success loginbtn"
                    style={{ marginRight: "5px" }}
                    onClick={handleClick}
                  >
                    Register
                  </button>
                  <button
                    className="btn btn-default"
                    style={{ marginLeft: "5px" }}
                    onClick={() => history.push("/login")}
                  >
                    Cancel
                  </button>
                </div>
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

export default Register;
