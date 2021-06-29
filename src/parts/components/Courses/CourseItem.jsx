import React from 'react'
import StarRatings from 'react-star-ratings'

const CourseItem = () => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
      <div className="courses-inner mg-b-15">
        <div className="courses-title">
          <a href="#"><img src="img/courses/1.jpg" alt="" /></a>
          <h2>Lập trình React</h2>
        </div>
        <div className="courses-alaltic">
          <span className="cr-ic-r"><span className="course-icon"><i className="fa fa-dollar"></i></span> 500</span>
        </div>
        <div className="course-des">
          <p><span><i className="fa fa-clock"></i></span> <b>Lĩnh vực:</b> Lập trình web</p>
          <p><span><i className="fa fa-clock"></i></span> <b>Giảng viên:</b> Ngô Ngọc Đăng Khoa</p>
          <StarRatings rating={4} starRatedColor="#faca51" starDimension="25px" starSpacing="1px" />
          <p style={{ float: 'right' }}>(100)</p>
        </div>
        <div className="product-buttons">
          <button type="button" className="button-default cart-btn">Chi tiết</button>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
