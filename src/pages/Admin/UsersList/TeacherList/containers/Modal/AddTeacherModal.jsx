import React, { useState, useRef, Fragment } from 'react'
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { addTeacherApi, getUsersByRoleNameApi } from '../../../../../../services/api/userApi';
import { messageAlertState, teacherListState } from '../../../../../../state/userState';
const AddTeacherModal = ({ page }) => {
  const emailRef = useRef('');
  const nameRef = useRef('');
  const location = useLocation();
  const setTeacherList = useSetRecoilState(teacherListState);
  const setMessageAlert = useSetRecoilState(messageAlertState);
  const handleClick = () => {
    addTeacherApi(emailRef.current.value, nameRef.current.value).then(result => {
      if (result.isSuccess) {
        if (location.pathname === '/teachers') {
          getUsersByRoleNameApi('teacher', page).then(result => {
            setTeacherList(result.data)
            emailRef.current.value = '';
            nameRef.current.value = '';
            setMessageAlert('');
          });
        }
      } else {
        setMessageAlert(result.message);
        emailRef.current.value = '';
        nameRef.current.value = '';
      }
    })
  }
  const onClose = () => {
    emailRef.current.value = '';
    nameRef.current.value = '';
  }
  return (
    <div id="addTeacher" className="modal modal-edu-general default-popup-PrimaryModal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-close-area modal-close-df">
            <a className="close" data-dismiss="modal" href="#"><i className="fa fa-close"></i></a>
          </div>
          <div className="modal-body">
            <h2>Thêm giảng viên</h2>
            <div className="form-group">
              <input name="name" type="text" className="form-control"
                placeholder="Email" required ref={emailRef} />
            </div>
            <div className="form-group">
              <input name="name" type="text" className="form-control"
                placeholder="Tên giảng viên" required ref={nameRef} />
            </div>
          </div>
          <div className="modal-footer">
            <button class="btn"
              data-dismiss="modal"
              style={{ backgroundColor: "#006DF0", color: "white", fontSize: "16px", marginRight: "10px" }}
              onClick={onClose}>Đóng
            </button>
            <button className="btn"
              data-dismiss="modal"
              style={{ backgroundColor: "#006DF0", color: "white", fontSize: "16px", marginRight: "10px" }}
              onClick={handleClick}>Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTeacherModal
