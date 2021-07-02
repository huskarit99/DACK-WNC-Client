import React from 'react'

const EditInfo = () => {
  return (
    <div className="product-tab-list tab-pane fade active in" id="info">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="review-content-section">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="devit-card-custom">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" value="Admin@gmail.com" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" value="Ngô Ngọc Đăng Khoa" />
                  </div>
                  <a href="#!" className="btn btn-primary waves-effect waves-light">Chỉnh sửa</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditInfo
