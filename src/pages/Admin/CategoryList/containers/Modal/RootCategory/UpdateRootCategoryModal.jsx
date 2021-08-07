import React, { useRef } from 'react'
import { useSetRecoilState } from 'recoil';
import { createBrowserHistory } from 'history';
import jwtEnum from '../../../../../../utils/enums/jwtEnum';
import categoryListState   from '../../../../../../state/categoryState';
import { updateRootCategoryApi, getCategoriesByPageApi } from '../../../../../../services/api/categoryApi';
import messageAlertState from '../../../../../../state/messageAlertState';

const UpdateRootCategoryModal = ({ root_category, index, page }) => {
  const nameRef = useRef('');
  const setCategoryList = useSetRecoilState(categoryListState);
  const setMessageAlert = useSetRecoilState(messageAlertState);
  const history = createBrowserHistory({ forceRefresh: true });
  const handleClick = () => {
    if(nameRef.current.value !== root_category.name){
      updateRootCategoryApi(root_category._id, nameRef.current.value).then(result => {
        if (result.isSuccess) {
          getCategoriesByPageApi(page).then(result => {
            if (result.isSuccess) {
              setCategoryList(result.data);
              const rootCategory = result.data.root_categories.find(t => t._id === root_category._id);
              nameRef.current.value = rootCategory.name;
              setMessageAlert('');
            } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
              history.push('/login');
            }
          });
        } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
          history.push('/login');
        } else {
          setMessageAlert(result.message);
          nameRef.current.value = root_category.name;
        }
      })
    }else{
      setMessageAlert('Tên danh mục cha không thay đổi !!!');
    }
  }
  const onClose = () => {
    nameRef.current.value = root_category.name;
    setMessageAlert('');
  }
  return (
    <div id={`editRootCategory` + index} className="modal modal-edu-general default-popup-PrimaryModal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-close-area modal-close-df">
            <a className="close" data-dismiss="modal" href="#"><i className="fa fa-close"></i></a>
          </div>
          <form id="acount-infor" class="acount-infor">
            <div className="modal-body">
              <h2>Chỉnh sửa lĩnh vực</h2>
              <div className="form-group">
                <input name="name" type="text" className="form-control"
                  placeholder="Tên lĩnh vực" required ref={nameRef} defaultValue={root_category.name} />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn"
                data-dismiss="modal"
                style={{ backgroundColor: "#006DF0", color: "white", fontSize: "16px", marginRight: "10px" }}
                onClick={onClose}>Đóng</button>
              <button className="btn"
                style={{ backgroundColor: "#006DF0", color: "white", fontSize: "16px", marginRight: "10px" }}
                data-dismiss="modal"
                onClick={handleClick}>Chỉnh sửa</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateRootCategoryModal
