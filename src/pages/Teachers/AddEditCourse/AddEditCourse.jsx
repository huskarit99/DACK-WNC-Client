import React from 'react'

const AddEditCourse = () => {
  return (
    <div className="single-pro-review-area mt-t-30 mg-b-15">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="product-payment-inner-st">
              <ul id="myTabedu1" className="tab-review-design">
                <li className="active"><a href="#description">Chi tiết khóa học</a></li>
              </ul>
              <div id="myTabContent" className="tab-content custom-product-edit">
                <div className="product-tab-list tab-pane fade active in" id="description">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="review-content-section">
                        <form action="/upload">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <input name="coursename" type="text" className="form-control" placeholder="Tên khóa học" />
                              </div>
                              <div className="form-group">
                                <div className="form-select-list">
                                  <select className="form-control custom-select-value" name="account">
                                    <option>Lập trình Web</option>
                                    <option>Lập trình Android</option>
                                    <option>Lập trình Ios</option>
                                    <option>Select 4</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group">
                                <input name="price" type="number" className="form-control" placeholder="Giá khóa học" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <textarea name="description" placeholder="Mô tả ngắn gọn"></textarea>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="tinymce-single responsive-mg-b-30">
                              <div className="alert-title">
                                <h2>Mô tả chi tiết khóa học</h2>
                              </div>
                              <div id="summernote1">
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="alert-title">
                              <h2>Đăng bài giảng</h2>
                            </div>

                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="payment-adress">
                                <button type="submit" className="btn btn-primary waves-effect waves-light">Submit</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEditCourse
