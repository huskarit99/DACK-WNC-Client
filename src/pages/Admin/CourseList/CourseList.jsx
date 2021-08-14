import React, { Fragment, useEffect, useState, useReducer } from 'react'
import { useLocation } from 'react-router';
import { getCoursesApi } from '../../../services/api/courseApi';
import CourseRow from './containers/CourseRow.jsx/CourseRow';
import UpdateCourseModal from './containers/Modal/UpdateCourseModal';
import Pagination from './containers/Pagination/Pagination';
import { createBrowserHistory } from "history";
import jwtEnum from '../../../utils/enums/jwtEnum';
import apiStateEnum from '../../../utils/enums/apiStateEnum';

const CourseList = () => {
  const location = useLocation();
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const pathName = location.pathname;
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page")) || 1;
  const [courses, setCourses] = useState(null);
  const history = createBrowserHistory({ forceRefresh: true });
  const [messageAlert, setMessageAlert] = useState('');
  const [apiState, setApiState] = useState(apiStateEnum.PROCESSING);

  useEffect(() => {
    getCoursesApi(page).then(result => {
      if (result.isSuccess) {
        setCourses(result.data);
        setMessageAlert('');
        setApiState(apiStateEnum.SUCCESS);
      } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
        history.push('/login');
      } else {
        setMessageAlert(result.message);
        setApiState(apiStateEnum.FAIL);
      }
    })
  }, [useLocation(), ignored]);
  return (
    <Fragment>
      {apiState === apiStateEnum.SUCCESS ?
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
                          return <Fragment key={course._id}>
                            <CourseRow course={course} index={index + 1 + (page - 1) * 5} />
                            <UpdateCourseModal course={course} index={index + 1 + (page - 1) * 5} forceUpdate={forceUpdate} />
                          </Fragment>
                        })}
                      </tbody>
                    </table>
                  </div>
                  <Pagination page={page} page_number={courses && courses.page_number} pathName={pathName} />

                </div>
              </div>
            </div>
          </div>
        </div> : apiState === apiStateEnum.FAIL ?
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="alert alert-danger alert-mg-b alert-st-four" role="alert">
              <i className="fa fa-times edu-danger-error admin-check-pro admin-check-pro-none" aria-hidden="true" />
              <p className="message-mg-rt message-alert-none"><strong>Oh!</strong> {messageAlert}</p>
            </div>
          </div> :
          <Fragment />
      }
    </Fragment>
  )
}

export default CourseList
