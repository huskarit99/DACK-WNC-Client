import React from 'react'

const PurchaseCourse = () => {
  return (
    <div className="shadow-inner">
      <div className="modal-area-button">
        <a className="Primary" href="#" data-toggle="modal" data-target="#PrimaryModalalert">Mua khóa học</a>
      </div>
      <div id="PrimaryModalalert" className="modal modal-edu-general default-popup-PrimaryModal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-close-area modal-close-df">
              <a className="close" data-dismiss="modal" href="#"><i className="fa fa-close"></i></a>
            </div>
            <div className="modal-body">
              <h2>Xác nhận!</h2>
              <p>Bạn có chắc muốn mua khóa học</p>
            </div>
            <div className="modal-footer">
              <a data-dismiss="modal" href="#">Trở về</a>
              <a href="#">Có</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseCourse
