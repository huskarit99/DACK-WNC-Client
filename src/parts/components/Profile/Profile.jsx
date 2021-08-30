import { useRecoilState } from "recoil";
import React, { useRef, Fragment, useState } from "react";

import userState from "../../../state/userState";
import { updateUserApi } from "../../../services/api/userApi";
import colorAlertEnum from "../../../utils/enums/colorAlertEnum";

const Profile = () => {
  const [user, setUser] = useRecoilState(userState);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const [messageAlert, setMessageAlert] = useState(<Fragment />);

  const handleClick = (e) => {
    e.preventDefault();
    updateUserApi(
      user.email,
      passwordRef.current.value,
      nameRef.current.value
    ).then((res) => {
      if (res.isSuccess) {
        setUser({
          role: user.role,
          email: user.email,
          name: nameRef.current.value,
        });
        setMessageAlert(
          <p
            style={{
              color: colorAlertEnum.SUCCESS,
            }}
          >
            {res.message}
          </p>
        );
      } else {
        setMessageAlert(
          <p
            style={{
              color: colorAlertEnum.ERROR,
            }}
          >
            {res.message}
          </p>
        );
      }
    });
  };

  return (
    <div className="product-tab-list tab-pane fade active in" id="info">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="review-content-section">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div
                  className="devit-card-custom"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      defaultValue={user ? user.email : ""}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      ref={nameRef}
                      className="form-control"
                      placeholder="Name"
                      defaultValue={user ? user.name : ""}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      ref={passwordRef}
                      type="password"
                      placeholder="********"
                      className="form-control"
                    />
                  </div>
                  {messageAlert}
                  <a
                    href="#!"
                    onClick={handleClick}
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Chỉnh sửa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
