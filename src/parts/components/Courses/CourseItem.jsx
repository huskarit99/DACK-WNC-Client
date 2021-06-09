import React from 'react'
import StarRatings from 'react-star-ratings'

const CourseItem = () => {
  return (
    <div class="courses-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="courses-inner res-mg-b-30">
              <div class="courses-title">
                <a href="#"><img src="img/courses/1.jpg" alt="" /></a>
                <h2>Lập trình React</h2>
              </div>
              <div class="courses-alaltic">
                <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-dollar"></i></span> 500</span>
              </div>
              <div class="course-des">
                <p><span><i class="fa fa-clock"></i></span> <b>Lĩnh vực:</b> Lập trình web</p>
                <p><span><i class="fa fa-clock"></i></span> <b>Giảng viên:</b> Ngô Ngọc Đăng Khoa</p>
                <StarRatings rating={4} starRatedColor="#faca51" starDimension="25px" starSpacing="1px"/>
                <p style={{float:'right'}}>(100)</p>
              </div>
              <div class="product-buttons">
                <button type="button" class="button-default cart-btn">Chi tiết</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
