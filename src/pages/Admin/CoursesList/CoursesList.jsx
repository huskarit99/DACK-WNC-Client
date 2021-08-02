import React, { Fragment, useEffect } from 'react'
import { useLocation } from 'react-router';
import { useRecoilState } from 'recoil';
import { getCoursesApi } from '../../../services/api/courseApi';
import courseState from '../../../state/courseState';
import CourseRow from './containers/CourseRow.jsx/CourseRow';
import DeleteModal from './containers/Modal/DeleteModal';
import Pagination from './containers/Pagination/Pagination';

const CoursesList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page")) || 1;
  const [courses, setCourses] = useRecoilState(courseState);

  useEffect(() => {
    getCoursesApi(page).then(result => {
      setCourses(result);
      console.log(result);
    })
  }, []);
  return (
    <div className="product-status mg-b-15">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="product-status-wrap">
              <h4>Danh sách khóa học</h4>
              <div className="asset-inner">
                <table>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Khóa học</th>
                      <th>Giảng viên</th>
                      <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Cài đặt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses && courses.courses && courses.courses.map((course, index) => {
                      return <Fragment>
                        <CourseRow course={course} index={index} key={index} />
                        <DeleteModal course={course} page={page} index={index} key={index} />
                      </Fragment>
                    })}
                  </tbody>
                </table>
              </div>
              {courses && courses.page_number && <Pagination page={page} page_number={courses.page_number}/>}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesList
