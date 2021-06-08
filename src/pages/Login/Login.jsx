import React from 'react'

const Login = () => {
  return (
    <div className="error-pagewrap">
      <div className="error-page-int">
        <div className="content-error">
          <div className="hpanel">
            <div className="panel-body">
              <form action="/login" id="loginForm" method="POST">
                <div className="form-group">
                  <label className="control-label" htmlFor="username">Email</label>
                  <input type="text" placeholder="example5599@gmail.com" title="Please enter your email" required name="username" id="username" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="password">Mật khẩu</label>
                  <input type="password" title="Please enter your password" placeholder="******" required  name="password" id="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-success btn-block loginbtn">Đăng nhập</button>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center login-footer">
          <p>Copyright © 2018. All rights reserved. Template by <a href="https://colorlib.com/wp/templates/">Colorlib</a></p>
        </div>
      </div>
    </div>

  )
}

export default Login
