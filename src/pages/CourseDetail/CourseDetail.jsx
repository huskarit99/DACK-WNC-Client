import React, { Fragment, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import StarRatings from "react-star-ratings";
import CourseItem from "../../parts/components/CourseItem/CourseItem";
import Comment from "../../parts/components/Comments/Comment";
import CommentItem from "../../parts/components/Comments/CommentItem";
import Lesson from "../../parts/components/Lesson/Lesson";
import PurchaseCourse from "../../parts/components/Modals/PurchaseCourse";
import Heart from "react-heart";
import {
  getCourseByIdApi,
  getMostSubscribedCoursesApi,
  updateCourseViewApi,
} from "../../services/api/courseApi";
import { useParams } from "react-router-dom";
import { getSubscribersByCourseId } from "../../services/api/subscriberApi";
import { useRecoilValue } from "recoil";
import { getVideosByCourseId } from "../../services/api/videoApi";
import subscriberState from "../../state/subscriberState";
import {
  addWatchListApi,
  deleteWatchListApi,
  getWatchListApi,
} from "../../services/api/watchListApi";
import { createBrowserHistory } from "history";
import jwtEnum from "../../utils/enums/jwtEnum";
import apiStateEnum from "../../utils/enums/apiStateEnum";
import userState from "../../state/userState";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [subscribers, setSubscribers] = useRecoilState(subscriberState);
  const [videos, setVideos] = useState(null);
  const [mostSubscribedCourse, setMostSubscribedCourse] = useState(null);
  const user = useRecoilValue(userState);
  const [updateDay, setUpdateDay] = useState(new Date());
  const [watchList, setWatchList] = useState(false);
  const history = createBrowserHistory({ forceRefresh: true });
  const [messageAlert, setMessageAlert] = useState("");
  const [apiState, setApiState] = useState(apiStateEnum.PROCESSING);

  useEffect(() => {
    getCourseByIdApi(id).then((result) => {
      if (result.isSuccess) {
        setApiState(apiStateEnum.SUCCESS);
        setCourse(result.data);
        setMessageAlert("");
        if (result.data) {
          updateCourseViewApi(id);
          getWatchListApi(id).then((result) => {
            setWatchList(result);
          });
          setUpdateDay(new Date(result.data.updatedAt));
          getMostSubscribedCoursesApi({
            id: id,
            category_id: result.category_id,
          }).then((result) => {
            setMostSubscribedCourse(result);
          });
          getSubscribersByCourseId(id).then((result) => {
            setSubscribers(result);
          });
          getVideosByCourseId(id).then((result) => {
            setVideos(result);
          });
        }
      } else {
        setApiState(apiStateEnum.FAIL);
        setMessageAlert(result.message);
      }
    });
  }, []);

  const addHeart = () => {
    if (!watchList) {
      addWatchListApi(id).then((result) => {
        if (result.isSuccess) {
          setWatchList(!watchList);
        } else if (
          result.message === jwtEnum.TOKEN_IS_EXPIRED ||
          result.message === jwtEnum.NO_TOKEN
        ) {
          history.push("/login");
        }
      });
    } else {
      deleteWatchListApi(id).then((result) => {
        if (result.isSuccess) {
          setWatchList(!watchList);
        } else if (
          result.message === jwtEnum.TOKEN_IS_EXPIRED ||
          result.message === jwtEnum.NO_TOKEN
        ) {
          history.push("/login");
        }
      });
    }
  };
  return (
    <Fragment>
      {apiState === apiStateEnum.SUCCESS ? (
        <Fragment>
          <div className="blog-details-area mg-b-15">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="blog-details-inner">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="latest-blog-single blog-single-full-view">
                          <div className="blog-image">
                            {course && (
                              <img
                                src={course.image}
                                alt=""
                                style={{ width: "1920px", height: "700px" }}
                              />
                            )}

                            <div className="blog-date">
                              {updateDay && (
                                <p>
                                  <span className="blog-day">
                                    {updateDay.getDate()}
                                  </span>{" "}
                                  {updateDay.toLocaleString("en-us", {
                                    month: "short",
                                  })}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="blog-details blog-sig-details">
                            {course && (
                              <Fragment>
                                <div className="details-blog-dt blog-sig-details-dt courses-info mobile-sm-d-n">
                                  <span>
                                    <a href="#">
                                      <i className="fa fa-user"></i>{" "}
                                      <b>Khóa Học:</b> {course.name}
                                    </a>
                                  </span>
                                  <span>
                                    <a href="#">
                                      <i className="fa fa-heart"></i>{" "}
                                      <b>Giá:</b> {course.price}
                                    </a>
                                  </span>
                                  <span>
                                    <a href="#">
                                      <i className="fa fa-comments-o"></i>{" "}
                                      <b>Giảng Viên:</b> {course.teacher_name}
                                    </a>
                                  </span>
                                </div>
                                {user && user.role === "student" && (
                                  <div
                                    style={{ width: "2rem", float: "right" }}
                                  >
                                    <Heart
                                      isActive={watchList}
                                      onClick={addHeart}
                                    />
                                  </div>
                                )}
                                <h1>
                                  <a className="blog-ht" href="#">
                                    Mô tả ngắn gọn
                                  </a>
                                </h1>
                                <p>{course.description}</p>
                                <h1>
                                  <a className="blog-ht" href="#">
                                    Mô tả chi tiết
                                  </a>
                                </h1>
                                <p>{course.detail}</p>
                                <h1>
                                  <a className="blog-ht" href="#">
                                    Thông tin giảng viên
                                  </a>
                                </h1>
                                <p>Tên: {course.teacher_name}</p>
                                <p>Email: {course.teacher_email}</p>
                              </Fragment>
                            )}

                            {subscribers && (
                              <Fragment>
                                <h1>
                                  <a className="blog-ht" href="#">
                                    Điểm đánh giá
                                  </a>
                                </h1>
                                <StarRatings
                                  rating={subscribers.point}
                                  starRatedColor="#faca51"
                                  starDimension="25px"
                                  starSpacing="1px"
                                />
                                <p>
                                  ({subscribers.subscribers_rated.length} đánh
                                  giá) ({subscribers.subscribers.length} học
                                  viên)
                                </p>
                              </Fragment>
                            )}

                            {videos && videos.length > 0 && (
                              <h1>
                                <a className="blog-ht" href="#">
                                  Danh sách bài học
                                </a>
                              </h1>
                            )}
                          </div>

                          {/* Danh sách bài học */}
                          {videos && videos.length > 0 && (
                            <div className="sparkline8-list">
                              <div className="sparkline8-graph">
                                <div className="static-table-list">
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th>#</th>
                                        <th>Tên Bài</th>
                                        <th>Trạng thái</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {videos &&
                                        videos.map((video, index) => {
                                          return (
                                            <Lesson
                                              video={video}
                                              index={index}
                                              key={index}
                                            />
                                          );
                                        })}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Dialog mua khóa học */}
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        {subscribers && subscribers.is_subscribed ? (
                          ""
                        ) : (
                          <PurchaseCourse id={id} />
                        )}
                      </div>
                    </div>

                    {/* Danh sách bình luận */}
                    {subscribers &&
                      subscribers.subscribers_rated &&
                      subscribers.subscribers_rated.length > 0 && (
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="comment-head">
                              <h3>Nhận xét</h3>
                            </div>
                          </div>
                        </div>
                      )}
                    {subscribers &&
                      subscribers.subscribers_rated &&
                      subscribers.subscribers_rated.map((item, index) => {
                        return <CommentItem subscriber={item} key={index} />;
                      })}

                    {/* Viết bình luận, chỉ hiển thị khi người đó đăng nhập và chưa bình luận */}
                    {user &&
                      user.role &&
                      user.role === "student" &&
                      subscribers &&
                      subscribers.is_subscribed &&
                      !subscribers.is_rated && <Comment id={id} />}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 khóa học cùng lĩnh vực được mua nhiều nhất */}
          <div className="courses-area">
            <div className="container-fluid">
              <div className="row">
                {mostSubscribedCourse &&
                  mostSubscribedCourse.map((course, index) => {
                    return <CourseItem course={course} key={index} />;
                  })}
              </div>
            </div>
          </div>
        </Fragment>
      ) : apiState === apiStateEnum.FAIL ? (
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
              <strong>Oh!</strong> {messageAlert}.
            </p>
          </div>
        </div>
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
};

export default CourseDetail;
