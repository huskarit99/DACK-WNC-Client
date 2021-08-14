import React from 'react'
import { createBrowserHistory } from "history";
import { useRecoilValue } from 'recoil';
import { subscribeApi } from '../../../../services/api/subscriberApi';
import roleState from '../../../../state/roleState';
import jwtEnum from '../../../../utils/enums/jwtEnum';
const PurchaseCourse = ({ id, subscribers, setSubscribers }) => {
  const history = createBrowserHistory({ forceRefresh: true });
  const role = useRecoilValue(roleState);
  const handleClick = () => {
    subscribeApi(id).then(result => {
      if (result.isSuccess) {
        let tmp = JSON.parse(JSON.stringify(subscribers));
        tmp.is_subscribed = result.is_subscribed;
        tmp.subscribers.push(result.subscriber);
        setSubscribers(tmp);
      } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
        history.push('/login');
      }
    })
  }
  return (
    <div className="shadow-inner">
      <div className="modal-area-button">
        {role && role === 'student'
          // ? <a className="Primary" href="#" data-toggle="modal" data-target="#PrimaryModalalert">Mua khóa học</a>: 
          // <a className="Primary" href="/login">Mua khóa học</a>}
          ? <button
            className="btn"
            data-toggle="modal" data-target="#PrimaryModalalert"
            style={{ backgroundColor: "#006DF0", color: "white", fontSize: "16px" }}
          >Mua khoá học</button> :
          <button
            className="btn"
            style={{ backgroundColor: "#006DF0", color: "white", fontSize: "16px" }}
            onClick={() => history.push("/login")}
          >Mua khoá học</button>
        }
      </div>
      <div id="PrimaryModalalert" className="modal modal-edu-general default-popup-PrimaryModal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-close-area modal-close-df">
              <a className="close" data-dismiss="modal" href="#"><i className="fa fa-close"></i></a>
            </div>
            <div className="modal-body">
              <h2>Xác nhận!</h2>
              <p>Bạn có chắc muốn mua khóa học</p>
            </div>
            <div className="modal-footer">
              <button data-dismiss="modal" className="btn" style={{ backgroundColor: "#006DF0", color: "white", fontSize: "16px", marginRight: "10px" }}>Trở về</button>
              <button
                className="btn"
                style={{ backgroundColor: "#006DF0", color: "white", fontSize: "16px" }}
                onClick={handleClick} data-dismiss="modal"
              >Có</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseCourse