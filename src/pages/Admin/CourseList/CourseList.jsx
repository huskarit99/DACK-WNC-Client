import React, { Fragment, useEffect } from 'react'
import { useLocation } from 'react-router';
import { useRecoilState } from 'recoil';
import { getCoursesApi } from '../../../services/api/courseApi';
import {coursesState} from '../../../state/courseState';
import CourseRow from './containers/CourseRow.jsx/CourseRow';
import DeleteModal from './containers/Modal/DeleteModal';
import Pagination from './containers/Pagination/Pagination';
import { createBrowserHistory } from "history";
import jwtEnum from '../../../utils/enums/jwtEnum';

const CourseList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page")) || 1;
  const [courses, setCourses] = useRecoilState(coursesState);
  const history = createBrowserHistory({ forceRefresh: true });
  
  useEffect(() => {
    getCoursesApi(page).then(result => {
      if(result.isSuccess){
        setCourses(result.data);
      }else if(result.message === jwtEnum.TOKEN_IS_EXPIRED ||result.message === jwtEnum.NO_TOKEN){
        history.push('/login');
      }
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
                      return <Fragment key={index}>
                        <CourseRow course={course} index={index + 1 + (page - 1) * 5}  />
                        <DeleteModal course={course} page={page} index={index + 1 + (page - 1) * 5}  />
                      </Fragment>
                    })}
                  </tbody>
                </table>
              </div>
              {courses && courses.page_number && <Pagination page={page} page_number={courses.page_number} />}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseList
