import { useLocation } from 'react-router';
import React, { useEffect, useState, Fragment } from 'react';

import { getAllByCategoryId } from '../../services/api/courseApi';
import CourseItem from '../../parts/components/Courses/CourseItem';
import Pagination from './containers/Pagination/Pagination';

const CoursesListByCategory = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryid = params.get("categoryid");
  const page = Number(params.get("page")) || 1 ;
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    if (categoryid) {
      getAllByCategoryId({categoryid, page}).then(result => {
        setCourses(result);
      })
    }
  }, []);

  return (
    <div className="courses-area">
      <div className="container-fluid">
        <div className="row">
          {courses && courses.courses && courses.courses.map((course, index) => {
            return <CourseItem course={course} key={index} />
          })}
        </div>
        <div className="mg-b-30">
          <Pagination
            page={page}
            categoryid={categoryid}
            page_number={courses && courses.page_number} />
        </div>
      </div>
    </div>

  )
}

export default CoursesListByCategory
