import React from 'react'
import { useSetRecoilState } from 'recoil';
import { deleteUserByIdApi, getUsersByRoleNameApi } from '../../../../../../services/api/userApi';
import { teacherListState } from '../../../../../../state/userState';
import { createBrowserHistory } from "history";
import jwtEnum from '../../../../../../utils/enums/jwtEnum';

const DeleteTeacherModal = ({ page, teacher, index }) => {

  const setTeacherList = useSetRecoilState(teacherListState);
  const history = createBrowserHistory({ forceRefresh: true });
  const handleClick = () => {
    deleteUserByIdApi(teacher._id).then(result => {
      console.log(result.isSuccess);
      if (result.isSuccess) {
        getUsersByRoleNameApi('teacher', page).then(result => {
          if (result.isSuccess) {
            setTeacherList(result.data);
          } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
            history.push('/login');
          }
        })
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
            <p>Bạn có chắc muốn xóa giảng viên {teacher.name} này không?</p>
          </div>
          <div className="modal-footer warning-md">
            <button data-dismiss="modal" className="btn" style={{ backgroundColor: "#65b12d", color: "white", fontSize: "16px", marginRight: "10px" }}>Trở về</button>
            <button
              className="btn"
              style={{ backgroundColor: "#65b12d", color: "white", fontSize: "16px" }}
              data-dismiss="modal"
              onClick={handleClick}
            >Xóa</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteTeacherModal
