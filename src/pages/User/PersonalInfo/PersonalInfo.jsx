import React from 'react'
import EditInfo from '../../../parts/components/EditInfo/EditInfo'
import ChangePassword from '../../../parts/components/ChangePassword/ChangePassword'

const PersonalInfo = () => {
  return (
    <div className="single-pro-review-area mt-t-30 mg-b-15">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="product-payment-inner-st">
              <ul id="myTabedu1" className="tab-review-design">
                <li className="active"><a href="#info">Thông tin cá nhân</a></li>
                <li><a href="#password">Đổi mật khẩu</a></li>
              </ul>
              <div id="myTabContent" className="tab-content custom-product-edit">
                <EditInfo/>
                <ChangePassword/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
