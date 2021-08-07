import React, { useRef } from 'react'
import { useSetRecoilState } from 'recoil';
import { createBrowserHistory } from 'history';
import jwtEnum from '../../../../../../utils/enums/jwtEnum';
import categoryListState   from '../../../../../../state/categoryState';
import { updateCategoryApi, getCategoriesByPageApi } from '../../../../../../services/api/categoryApi';
import messageAlertState from '../../../../../../state/messageAlertState';

const UpdateCategoryModal = ({ category, index, page }) => {
  const nameRef = useRef('');
  const setCategoryList = useSetRecoilState(categoryListState);
  const setMessageAlert = useSetRecoilState(messageAlertState);
  const history = createBrowserHistory({ forceRefresh: true });
  const handleClick = () => {
    if (nameRef.current.value !== category.name) {
      updateCategoryApi(category._id, nameRef.current.value).then(result => {
        if (result.isSuccess) {
          getCategoriesByPageApi(page).then(result => {
            if (result.isSuccess) {
              setCategoryList(result.data);
              const rootCategory = result.data.root_categories.find(t => t._id === category.root_category_id);
              const newCategory = rootCategory.categories.find(t => t._id === category._id);
              nameRef.current.value = newCategory.name;
              setMessageAlert('');
            } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
              history.push('/login');
            }
          });
        } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
          history.push('/login');
        } else {
          setMessageAlert(result.message);
          nameRef.current.value = category.name;
        }
      })
    } else {
      setMessageAlert('Tên danh mục con không thay đổi');
    }
  }
  const onClose = () => {
    nameRef.current.value = category.name;
    setMessageAlert('');
  }
  return (
    <div id={`editCategory` + index} className="modal modal-edu-general default-popup-PrimaryModal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-close-area modal-close-df">
            <a className="close" data-dismiss="modal" href="#"><i className="fa fa-close"></i></a>
          </div>
          <form id="acount-infor" class="acount-infor">
            <div className="modal-body">
              <h2>Chỉnh sửa lĩnh vực con</h2>
              <div className="form-group">
                <input name="name" type="text" className="form-control"
                  placeholder="Tên lĩnh vực" required ref={nameRef} defaultValue={category.name} />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn"
                data-dismiss="modal"
                style={{ backgroundColor: "#006DF0", color: "white", fontSize: "16px", marginRight: "10px" }}
                onClick={onClose}>Đóng</button>
              <button className="btn" style={{ backgroundColor: "#006DF0", color: "white", fontSize: "16px", marginRight: "10px" }}
                data-dismiss="modal"
                onClick={handleClick}>Chỉnh sửa</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateCategoryModal
