import React from 'react'
import CourseItem from '../../../parts/components/Courses/CourseItem'
import Pagination from '../../../parts/components/Pagination/Pagination'
const WatchList = () => {
  return (
    <div>
      <div className="login-form-area edu-pd mg-b-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="tab-content-details shadow-reset">
                <h2>Danh sách khóa học yêu thích</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses-area">
      <div className="container-fluid">
        <div className="row">
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </div>
        <div className="mg-b-30">
          <Pagination/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WatchList
