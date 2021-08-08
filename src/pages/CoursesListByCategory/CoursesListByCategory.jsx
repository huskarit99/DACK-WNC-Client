import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { getCoursesByCategoryIdApi } from "../../services/api/courseApi";
import CourseItem from "../../parts/components/Courses/CourseItem";
import Pagination from "./containers/Pagination/Pagination";
import { useRecoilState } from "recoil";
import { coursesByCategoryIdState } from "../../state/courseState";
import messageAlertState from "../../state/messageAlertState";
const CoursesListByCategory = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryid = params.get("categoryid");
  const page = Number(params.get("page")) || 1;
  const [courses, setCourses] = useRecoilState(coursesByCategoryIdState);
  const [messageAlert, setmessageAlert] = useRecoilState(messageAlertState);

  useEffect(() => {
    if (categoryid) {
      getCoursesByCategoryIdApi({ categoryid, page }).then((result) => {
        if (result.isSuccess) {
          setCourses(result.data);
          setmessageAlert("");
        } else {
          setmessageAlert(result.message);
        }
      });
    }
  }, []);

  return (
    <div>
      {messageAlert === "" ? (
        <div className="courses-area">
          <div className="container-fluid">
            <div className="row">
              {courses &&
                courses.courses &&
                courses.courses.map((course, index) => {
                  return <CourseItem course={course} key={index} />;
                })}
            </div>
            <div className="mg-b-30">
              <Pagination page_number={courses && courses.page_number} />
            </div>
          </div>
        </div>
      ) : (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div
            className="alert alert-danger alert-mg-b alert-st-four"
            role="alert"
          >
            <i
              className="fa fa-times edu-danger-error admin-check-pro admin-check-pro-none"
              aria-hidden="true"
            ></i>
            <p className="message-mg-rt message-alert-none">
              <strong>Oh!</strong> {messageAlert}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesListByCategory;
