import { useLocation } from 'react-router';
import React, { useEffect, useState, Fragment } from 'react';
import { getCoursesBySearchApi } from '../../services/api/courseApi';
import CourseItem from '../../parts/components/CourseItem/CourseItem';
import Pagination from './containers/Pagination/Pagination';
import apiStateEnum from '../../utils/enums/apiStateEnum';

const CoursesListByCategory = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const params = new URLSearchParams(location.search);
  const keyword = params.get("keyword");
  const sort = params.get('sort') || 'none';
  const page = Number(params.get("page")) || 1;
  const [courses, setCourses] = useState(null);
  const [messageAlert, setMessageAlert] = useState('');
  const [apiState, setApiState] = useState(apiStateEnum.PROCESSING);
  
  useEffect(() => {
    if (keyword) {
      getCoursesBySearchApi({ keyword, sort, page }).then(result => {
        if (result.isSuccess) {
          setCourses(result.data);
          setMessageAlert('');
          setApiState(apiStateEnum.SUCCESS)
        } else {
          setMessageAlert(result.message);
          setApiState(apiStateEnum.FAIL);
        }
      })
    }
  }, [useLocation()]);

  return (
    <Fragment>
      {apiState === apiStateEnum.SUCCESS ?
        <div className="courses-area">
          <div className="container-fluid">
            <div className="row">
              {courses && courses.courses && courses.courses.map((course, index) => {
                return <CourseItem course={course} key={index} />
              })}
            </div>
            <div className="mg-b-30">
              <Pagination
                page_number={courses && courses.page_number}
                pathName={pathName}
                keyword={keyword}
                sort={sort}
                page={page} />
            </div>
          </div>
        </div> : apiState === apiStateEnum.FAIL ?
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="alert alert-danger alert-mg-b alert-st-four" role="alert">
              <i className="fa fa-times edu-danger-error admin-check-pro admin-check-pro-none" aria-hidden="true" />
              <p className="message-mg-rt message-alert-none"><strong>Oh!</strong> {messageAlert}</p>
            </div>
          </div> : <Fragment />
      }
    </Fragment>
  )
}

export default CoursesListByCategory
