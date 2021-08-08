import React from 'react'
import StarRatings from 'react-star-ratings'
import Heart from 'react-heart'
import { useLocation } from 'react-router-dom'
import { getWatchListByStudentIdApi, deleteWatchListApi } from '../../../services/api/watchListApi'
import { createBrowserHistory } from "history";
import jwtEnum from '../../../utils/enums/jwtEnum';
const CourseItem = ({ course, setMessageAlert, setWatchList }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page")) || 1;
  const history = createBrowserHistory({ forceRefresh: true });
  const handleClick = () => {
    deleteWatchListApi(course._id).then(result => {
      if (result.isSuccess) {
        getWatchListByStudentIdApi(page).then(result => {
          if (result.isSuccess) {
            setWatchList(result.data);
            console.log(result.data);
            setMessageAlert('');
          } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
            history.push('/login');
          } else {
            setMessageAlert(result.message);
          }
        });
      }
    });
  }
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >

      <div className="courses-inner mg-b-15">

        <div className="courses-title">
          <a href={`/course/` + course._id}><img src={course.image} alt="" style={{ width: 300, height: 211 }} /></a>
          {location.pathname.includes("/watch-list") &&
            <Heart isActive={true} style={{ width: "1.7rem", float: 'right', marginTop: '10px' }} onClick={handleClick} />}
          <h2>{course.name}</h2>
        </div>
        <div className="courses-alaltic">
          {course.price}
        </div>
        <div className="course-des">
          <p><b>Lĩnh vực:</b> {course.category_name}</p>
          <p><b>Giảng viên:</b> {course.teacher_name}</p>
          <StarRatings rating={course.point} starRatedColor="#faca51" starDimension="25px" starSpacing="1px" />
          <p style={{ float: 'right' }}>{course.number_of_subscribers === 0 ? '' : `(${course.number_of_subscribers})`}</p>
        </div>
        <div className="product-buttons">
          <a href={`/course/` + course._id}><button type="button" className="button-default cart-btn">Chi tiết</button></a>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
