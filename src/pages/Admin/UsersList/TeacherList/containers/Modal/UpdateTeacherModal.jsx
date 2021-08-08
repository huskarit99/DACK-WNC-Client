import React, { useState, Fragment } from 'react'
import { updateUserByIdApi } from '../../../../../../services/api/userApi';
import { createBrowserHistory } from "history";
import jwtEnum from '../../../../../../utils/enums/jwtEnum';

const UpdateTeacherModal = ({ teacher, index, forceUpdate }) => {
  const history = createBrowserHistory({ forceRefresh: true });
  const handleClick = () => {
    updateUserByIdApi(teacher._id, !teacher.status).then(result => {
      if (result.isSuccess) {
        forceUpdate();
      } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
        history.push('/login');
      }
    })
  }
  return (
    <div id={`del` + index} className="modal modal-edu-general Customwidth-popup-WarningModal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-close-area modal-close-df">
            <a className="close" data-dismiss="modal" href="#"><i className="fa fa-close"></i></a>
          </div>
          <div className="modal-body">
            <span className="educate-icon educate-warning modal-check-pro information-icon-pro"></span>
            <h2>Cảnh báo!</h2>
            {teacher.status ? <p>Bạn có chắc muốn khóa giảng viên {teacher.name} này không?</p>
              : <p>Bạn có chắc muốn mở khóa giảng viên {teacher.name} này không?</p>}
          </div>
          <div className="modal-footer warning-md">
            <button data-dismiss="modal" className="btn" style={{ backgroundColor: "#65b12d", color: "white", fontSize: "16px", marginRight: "10px" }}>Trở về</button>
            <button
              className="btn"
              data-dismiss="modal"
              style={{ backgroundColor: "#65b12d", color: "white", fontSize: "16px" }}
              onClick={handleClick}
            >{teacher.status ? 'Khóa' : 'Mở khóa'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateTeacherModal
