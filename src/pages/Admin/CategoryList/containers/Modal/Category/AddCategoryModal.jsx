import React, { useRef, useState, Fragment } from 'react'
import { createBrowserHistory } from 'history';
import jwtEnum from '../../../../../../utils/enums/jwtEnum';
import { addCategoryApi } from '../../../../../../services/api/categoryApi';

const AddCategoryModal = ({ root_category_id, index, forceUpdate }) => {
  const nameRef = useRef('');
  const history = createBrowserHistory({ forceRefresh: true });
  const [messageAlert, setMessageAlert] = useState(<Fragment />);
  const handleClick = () => {
    addCategoryApi(root_category_id, nameRef.current.value).then(result => {
      if (result.isSuccess) {
        nameRef.current.value = '';
        setMessageAlert(<p style={{ color: 'green' }}>{result.message}</p>);
        forceUpdate();
      } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
        history.push('/login');
      } else {
        setMessageAlert(<p style={{ color: 'red' }}>{result.message}</p>);
      }
    })
  }

  const onClose = () =>{
    setMessageAlert('');
  }

  return (
    <div id={`addCategory` + index} className="modal modal-edu-general default-popup-PrimaryModal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-close-area modal-close-df">
            <a className="close" data-dismiss="modal" href="#" onClick={onClose}><i className="fa fa-close"></i></a>
          </div>
          <div className="modal-body" style={{ padding: "50px 70px 5px 70px" }}>
            <h2>Thêm lĩnh vực con</h2>
            <div className="form-group">
              <input name="name" type="text" className="form-control"
                placeholder="Tên lĩnh vực con" required ref={nameRef} />
            </div>
            <div className="form-group" style={{ textAlign: "left" }}>
              {messageAlert}
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn"
              data-dismiss="modal"
              style={{ backgroundColor: "#006DF0", color: "white", fontSize: "16px", marginRight: "10px" }}
              onClick={onClose}>Đóng
            </button>
            <button className="btn"
              style={{ backgroundColor: "#006DF0", color: "white", fontSize: "16px", marginRight: "10px" }}
              onClick={handleClick}>Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCategoryModal
