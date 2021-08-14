import React from 'react'
import { createBrowserHistory } from 'history';
import jwtEnum from '../../../../../../utils/enums/jwtEnum';
import { updateStatusRootCategoryApi } from '../../../../../../services/api/categoryApi';
const UpdateStatusRootCategoryModal = ({ root_category, index, setMessageAlert, forceUpdate }) => {
  const history = createBrowserHistory({ forceRefresh: true });
  const handleClick = () => {
    updateStatusRootCategoryApi(root_category._id, !root_category.status).then(result => {
      if (result.isSuccess) {
        forceUpdate();
      } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
        history.push('/login');
      }else{
        setMessageAlert(result.message);
      }
    })
  }
  return (
    <div id={`updateStatusRootCategory` + index} className="modal modal-edu-general Customwidth-popup-WarningModal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-close-area modal-close-df">
            <a className="close" data-dismiss="modal" href="#"><i className="fa fa-close"></i></a>
          </div>
          <div className="modal-body">
            <span className="educate-icon educate-warning modal-check-pro information-icon-pro"></span>
            <h2>Cảnh báo!</h2>
            {root_category.status ? <p>Bạn có chắc muốn khóa lĩnh vực cha {root_category.name} này không?</p> :
              <p>Bạn có chắc muốn mở khóa lĩnh vực cha {root_category.name} này không?</p>}

          </div>
          <div className="modal-footer warning-md">
            <button data-dismiss="modal"
              className="btn"
              style={{ backgroundColor: "#65b12d", color: "white", fontSize: "16px", marginRight: "10px" }}
            >Đóng
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "#65b12d", color: "white", fontSize: "16px" }}
              data-dismiss="modal"
              onClick={handleClick}
            >{root_category.status ? 'Khóa' : 'Mở khóa'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateStatusRootCategoryModal
