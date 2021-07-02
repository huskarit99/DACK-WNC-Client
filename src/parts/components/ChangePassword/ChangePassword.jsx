import React from 'react'

const ChangePassword = () => {
  return (
    <div className="product-tab-list tab-pane fade" id="password">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="review-content-section">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="devit-card-custom">
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="OldPassword"/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Confirm Password"/>
                  </div>
                  <a href="#!" className="btn btn-primary waves-effect waves-light">Thay đổi</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
