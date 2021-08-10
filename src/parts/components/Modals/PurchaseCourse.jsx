import React from "react";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import { subscribe } from "../../../services/api/subscriberApi";
import { useRecoilState } from "recoil";
import subscriberState from "../../../state/subscriberState";
import userState from "../../../state/userState";

const PurchaseCourse = ({ id }) => {
  const [subscribers, setSubscribers] = useRecoilState(subscriberState);
  let history = useHistory();
  const user = useRecoilValue(userState);
  const handleClick = () => {
    subscribe(id).then((result) => {
      if (result.isSuccess) {
        let tmp = JSON.parse(JSON.stringify(subscribers));
        tmp.is_subscribed = result.is_subscribed;
        tmp.subscribers.push(result.subscriber);
        setSubscribers(tmp);
      }
    });
  };
  return (
    <div className="shadow-inner">
      <div className="modal-area-button">
        {user && user.role && user.role === "student" ? (
          // ? <a className="Primary" href="#" data-toggle="modal" data-target="#PrimaryModalalert">Mua khóa học</a>:
          // <a className="Primary" href="/login">Mua khóa học</a>}
          <button
            className="btn"
            data-toggle="modal"
            data-target="#PrimaryModalalert"
            style={{
              backgroundColor: "#006DF0",
              color: "white",
              fontSize: "16px",
            }}
          >
            Mua khoá học
          </button>
        ) : (
          <button
            className="btn"
            style={{
              backgroundColor: "#006DF0",
              color: "white",
              fontSize: "16px",
            }}
            onClick={() => history.push("/login")}
          >
            Mua khoá học
          </button>
        )}
      </div>
      <div
        id="PrimaryModalalert"
        className="modal modal-edu-general default-popup-PrimaryModal fade"
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-close-area modal-close-df">
              <a className="close" data-dismiss="modal" href="#">
                <i className="fa fa-close"></i>
              </a>
            </div>
            <div className="modal-body">
              <h2>Xác nhận!</h2>
              <p>Bạn có chắc muốn mua khóa học</p>
            </div>
            <div className="modal-footer">
              <button
                data-dismiss="modal"
                className="btn"
                style={{
                  backgroundColor: "#006DF0",
                  color: "white",
                  fontSize: "16px",
                  marginRight: "10px",
                }}
              >
                Trở về
              </button>
              <button
                className="btn"
                style={{
                  backgroundColor: "#006DF0",
                  color: "white",
                  fontSize: "16px",
                }}
                onClick={handleClick}
                data-dismiss="modal"
              >
                Có
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCourse;
