import React from 'react'
import { useSetRecoilState } from 'recoil';
import { deleteCourseApi, getCoursesApi } from '../../../../../services/api/courseApi';
import courseState from '../../../../../state/courseState';
const DeleteModal = ({ page, course, index }) => {

  const setCourses = useSetRecoilState (courseState);
  const handleClick = () => {
    deleteCourseApi(course._id).then(result => {
      if (result.isSucess) {
        getCoursesApi(page).then(result =>{
          setCourses(result);
        });
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
            <span class="educate-icon educate-warning modal-check-pro information-icon-pro"></span>
            <h2>Cảnh báo!</h2>
            <p>Bạn có chắc muốn xóa khóa học {course.name} này không?</p>
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

export default DeleteModal
