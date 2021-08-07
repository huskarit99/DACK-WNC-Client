import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router';
import React, { useEffect, useState, Fragment } from 'react';
import { getCoursesBySearchApi } from '../../services/api/courseApi';
import CourseItem from '../../parts/components/Courses/CourseItem';
import Pagination from './containers/Pagination/Pagination';
import { coursesBySearchState } from '../../state/courseState';

const CoursesListByCategory = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const keyword = params.get("keyword");
  const sort = params.get('sort') || 'none';
  const page = Number(params.get("page")) || 1 ;
  const [courses, setCourses] = useRecoilState(coursesBySearchState);

  useEffect(() => {
    if (keyword) {
      getCoursesBySearchApi({keyword, sort, page}).then(result => {
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
            page_number={courses && courses.page_number} />
        </div>
      </div>
    </div>

  )
}

export default CoursesListByCategory
