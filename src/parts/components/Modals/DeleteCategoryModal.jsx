import React from 'react'

const DeleteCategoryModal = () => {
  /*
  id: delRootCategory, delCategory
  */
  return (
    <div id="WarningModalalert" className="modal modal-edu-general Customwidth-popup-WarningModal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-close-area modal-close-df">
            <a className="close" data-dismiss="modal" href="#"><i className="fa fa-close"></i></a>
          </div>
          <div className="modal-body">
            <span class="educate-icon educate-warning modal-check-pro information-icon-pro"></span>
            <h2>Cảnh báo!</h2>
            <p>Bạn có chắc muốn xóa lĩnh vực này không?</p>
          </div>
          <div className="modal-footer warning-md">
            <a data-dismiss="modal" href="#">Đóng</a>
            <a href="#">Xóa</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteCategoryModal
