import React from 'react'

const AddEditCategoryModal = () => {  // truyền id để mở modal, tên lĩnh vực nếu chỉnh sửa
  /*
  id: addRootCategory, addCategory, editRootCategory, editCategory
  */
  return (
    <div id="PrimaryModalalert" className="modal modal-edu-general default-popup-PrimaryModal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-close-area modal-close-df">
            <a className="close" data-dismiss="modal" href="#"><i className="fa fa-close"></i></a>
          </div>
          <form id="acount-infor" class="acount-infor">
            <div className="modal-body">
              <h2>Thêm lĩnh vực</h2>
              {/* <h2>Chỉnh sửa lĩnh vực</h2> */}
              <div className="form-group">
                <input name="name" type="text" className="form-control"
                  placeholder="Tên lĩnh vực" required />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary"
                data-dismiss="modal">Đóng</button>
              <button type="submit" className="btn btn-primary">Thêm</button>
              {/* <button type="submit" className="btn btn-primary">Chỉnh sửa</button> */}
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default AddEditCategoryModal
