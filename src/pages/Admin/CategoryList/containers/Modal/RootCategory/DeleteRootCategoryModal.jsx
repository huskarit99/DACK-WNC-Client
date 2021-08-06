import React from 'react'
import { useSetRecoilState } from 'recoil';
import { createBrowserHistory } from 'history';
import jwtEnum from '../../../../../../utils/enums/jwtEnum';
import categoryListState   from '../../../../../../state/categoryState';
import { deleteRootCategoryApi, getCategoriesByPageApi } from '../../../../../../services/api/categoryApi';
import messageAlertState from '../../../../../../state/messageAlertState';
const DeleteRootCategoryModal = ({ root_category, index, page }) => {

  const setMessageAlert = useSetRecoilState(messageAlertState);
  const setCategoryList = useSetRecoilState(categoryListState);
  const history = createBrowserHistory({ forceRefresh: true });
  const handleClick = () => {
    deleteRootCategoryApi(root_category._id).then(result => {
      if (result.isSuccess) {
        getCategoriesByPageApi(page).then(result => {
          if (result.isSuccess) {
            setCategoryList(result.data);
            setMessageAlert('');
          } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
            history.push('/login');
          }
        })
      } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
        history.push('/login');
      } else {
        setMessageAlert(result.message);
      }
    })
  }
  return (
    <div id={`delRootCategory` + index} className="modal modal-edu-general Customwidth-popup-WarningModal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-close-area modal-close-df">
            <a className="close" data-dismiss="modal" href="#"><i className="fa fa-close"></i></a>
          </div>
          <div className="modal-body">
            <span className="educate-icon educate-warning modal-check-pro information-icon-pro"></span>
            <h2>Cảnh báo!</h2>
            <p>Bạn có chắc muốn xóa lĩnh vực cha {root_category.name} này không?</p>
          </div>
          <div className="modal-footer warning-md">
            <button data-dismiss="modal" className="btn" style={{ backgroundColor: "#65b12d", color: "white", fontSize: "16px", marginRight: "10px" }}>Trở về</button>
            <button
              className="btn"
              style={{ backgroundColor: "#65b12d", color: "white", fontSize: "16px" }}
              data-dismiss="modal"
              onClick={handleClick}>Xóa</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteRootCategoryModal
