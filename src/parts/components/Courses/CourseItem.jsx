import React from 'react'
import StarRatings from 'react-star-ratings'
import { Link } from 'react-router-dom'

const CourseItem = ({course}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
      <div className="courses-inner mg-b-15">
        <div className="courses-title">
          <Link to={`/course/`+ course._id}><img src={course.image} alt="" style={{width: 300, height: 211}}/></Link>
          <h2>{course.name}</h2>
        </div>
        <div className="courses-alaltic">
          {course.price}
        </div>
        <div className="course-des">
          <p><b>Lĩnh vực:</b> {course.category_name}</p>
          <p><b>Giảng viên:</b> {course.teacher_name}</p>
          <StarRatings rating={course.point} starRatedColor="#faca51" starDimension="25px" starSpacing="1px" />
          <p style={{ float: 'right' }}>{course.number_of_subscribers ===0 ? '': `(${course.number_of_subscribers})`}</p>
        </div>
        <div className="product-buttons">
        <Link to={`/course/`+ course._id}><button type="button" className="button-default cart-btn">Chi tiết</button></Link>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
