import React from "react";

const Register = () => {
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
                      placeholder="example5599@gmail.com"
                    />
                  </div>
                  <div className="form-group col-lg-12">
                    <label>Name</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Password</label>
                    <input
                      required
                      type="password"
                      placeholder="******"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Repeat Password</label>
                    <input
                      required
                      type="password"
                      placeholder="******"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-success loginbtn"
                    style={{ marginRight: "5px" }}
                  >
                    Register
                  </button>
                  <button
                    className="btn btn-default"
                    style={{ marginLeft: "5px" }}
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
