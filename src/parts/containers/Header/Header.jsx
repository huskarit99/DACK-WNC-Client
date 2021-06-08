import React from 'react'

const Header = () => {
  return (
    <div className="all-content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="logo-pro">
              <a href="/"><img className="main-logo" src="img/logo/logo.png" alt="a" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="header-advance-area">
        <div className="header-top-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="header-top-wraper">
                  <div className="row">
                    <div className="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                      <div className="menu-switcher-pro">
                        <button type="button" id="sidebarCollapse" className="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn">
                          <i className="educate-icon educate-nav" />
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-11 col-sm-12 col-xs-12">
                      <div className="header-right-info">
                        <ul className="nav navbar-nav mai-top-nav header-right-menu">
                          <li className="nav-item">
                            <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle">
                              <img src="/img/product/pro4.jpg" alt="" />
                              <span className="admin-name" style={{marginLeft: '5px'}}>Admin</span>
                              <i className="fa fa-angle-down edu-icon edu-down-arrow" style={{marginLeft: '5px'}}/>
                            </a>
                            <ul role="menu" className="dropdown-header-top author-log dropdown-menu animated zoomIn">
                              {/* student */}
                              <li>
                                <a href="/user-info">
                                  <span className="edu-icon edu-user-rounded author-log-ic" />Cá nhân
                                </a>
                              </li>
                              <li>
                                <a href="/user-info">
                                  <span className="edu-icon edu-user-rounded author-log-ic" />Khóa học yêu thích
                                  </a>
                              </li>
                              <li>
                                <a href="/user-info">
                                  <span className="edu-icon edu-user-rounded author-log-ic" />Khóa học đăng ký
                                  </a>
                              </li>
                              {/* teacher */}
                              <li><a href="/user-info">
                                <span className="edu-icon edu-user-rounded author-log-ic" />Khóa học đăng tải
                                </a>
                              </li>
                              {/* user, admin */}
                              <li>
                                <a href="/logout">
                                  <span className="edu-icon edu-locked author-log-ic" />Đăng xuất
                                  </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
