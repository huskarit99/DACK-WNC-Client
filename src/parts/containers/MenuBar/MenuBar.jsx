import React from 'react'

const MenuBar = () => {
  return (
    <div className="left-sidebar-pro">
      <nav id="sidebar" className="">
        <div className="sidebar-header">
          <a href="index.html"><img className="main-logo" src="img/logo/logo.png" alt="a" /></a>
          <strong><a href="index.html"><img src="img/logo/logosn.png" alt="a" /></a></strong>
        </div>
        <div className="left-custom-menu-adp-wrap comment-scrollbar">
          <nav className="sidebar-nav left-sidebar-menu-pro">
            <ul className="metismenu" id="menu1">
              {/* admin */}
              <li>
                <a href="/">
                  <span className="educate-icon educate-home icon-wrap" />
                  <span className="mini-click-non">Trang chủ</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="educate-icon educate-professor icon-wrap" />
                  <span className="mini-click-non">Giáo viên</span></a>
              </li>
              <li>
                <a href="/">
                  <span className="educate-icon educate-student icon-wrap" />
                  <span className="mini-click-non">Học viên</span></a>
              </li>
              <li>
                <a href="/">
                  <span className="educate-icon educate-library icon-wrap" />
                  <span className="mini-click-non">Lĩnh vực</span></a>
              </li>
              <li>
                <a href="/">
                  <span className="educate-icon educate-home icon-wrap" />
                  <span className="mini-click-non">Trang chủ</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="educate-icon educate-professor icon-wrap" />
                  <span className="mini-click-non">Giáo viên</span></a>
              </li>
              <li>
                <a href="/">
                  <span className="educate-icon educate-student icon-wrap" />
                  <span className="mini-click-non">Học viên</span></a>
              </li>
              <li>
                <a href="/">
                  <span className="educate-icon educate-library icon-wrap" />
                  <span className="mini-click-non">Lĩnh vực</span></a>
              </li>
              {/* teacher, admin */}
              <li>
                <a href="/">
                  <span className="educate-icon educate-course icon-wrap" />
                  <span className="mini-click-non">Khóa học</span></a>
              </li>

              {/* user */}
              <li>
                <a className="has-arrow" href="/" aria-expanded="false">
                  <span className="educate-icon educate-library icon-wrap"></span>
                  <span className="mini-click-non">Lĩnh vực</span></a>
                <ul className="submenu-angle" aria-expanded="false">
                  <li>
                    <a className="has-arrow" href="/" aria-expanded="false">
                      <span className="mini-sub-pro">Lập trình</span>
                    </a>
                    <ul className="submenu-angle" aria-expanded="false">
                      <li><a href="/"><span className="mini-sub-pro">Lập trình mobile</span></a></li>
                      <li><a href="/"><span className="mini-sub-pro">Lập trình web</span></a></li>
                    </ul>
                  </li>
                  <li><a href="/"><span className="mini-sub-pro">Khoa học tự nhiên</span></a></li>
                  <li><a href="/"><span className="mini-sub-pro">Khoa học xã hội</span></a></li>
                </ul>
              </li>
              <li id="removable">
                <a href="/logout"><span
                  className="fa fa-sign-in icon-wrap" />
                  <span className="mini-click-non">Đăng nhập</span></a>
              </li>
              <li id="removable">
                <a href="/logout"><span
                  className="fa fa-user-plus icon-wrap" />
                  <span className="mini-click-non">Đăng ký</span></a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  )
}

export default MenuBar
