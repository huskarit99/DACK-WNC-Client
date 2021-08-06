import React, { useRef } from 'react'
import { useSetRecoilState } from 'recoil';
import { createBrowserHistory } from 'history';
import jwtEnum from '../../../../../../utils/enums/jwtEnum';
import categoryListState   from '../../../../../../state/categoryState';
import { addRootCategoryApi, getCategoriesByPageApi } from '../../../../../../services/api/categoryApi';
import messageAlertState from '../../../../../../state/messageAlertState';

const AddRootCategoryModal = ({page}) => {
  const nameRef = useRef('');
  const setCategoryList = useSetRecoilState(categoryListState);
  const setMessageAlert = useSetRecoilState(messageAlertState);
  const history = createBrowserHistory({ forceRefresh: true });
  const handleClick = () => {
    addRootCategoryApi(nameRef.current.value).then(result => {
      if (result.isSuccess) {
        getCategoriesByPageApi(page).then(result => {
          if (result.isSuccess) {
            setCategoryList(result.data);
            nameRef.current.value = '';
            setMessageAlert('');
          } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
            history.push('/login');
          }
        });
      } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
        history.push('/login');
      } else {
        setMessageAlert(result.message);
        nameRef.current.value = '';
      }
    })
  }
  const onClose = () => {
    nameRef.current.value = '';
    setMessageAlert('');
  }
  return (
    <div id="addRootCategory" className="modal modal-edu-general default-popup-PrimaryModal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-close-area modal-close-df">
            <a className="close" data-dismiss="modal" href="#"><i className="fa fa-close"></i></a>
          </div>
          <form id="acount-infor" class="acount-infor">
            <div className="modal-body">
              <h2>Thêm lĩnh vực cha</h2>
              <div className="form-group">
                <input name="name" type="text" className="form-control"
                  placeholder="Tên lĩnh vực" required ref={nameRef} />
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
                onClick={handleClick}>Thêm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddRootCategoryModal
