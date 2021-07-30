import React from 'react'
import CourseItem from '../../parts/components/Courses/CourseItem'
import Pagination from '../../parts/components/Pagination/Pagination'

const CoursesListByCategory = () => {

  
  return (
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

  )
}

export default CoursesListByCategory
