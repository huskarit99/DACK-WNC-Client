import React from 'react'
import StarRatings from 'react-star-ratings'
import Heart from 'react-heart'
import { useLocation } from 'react-router-dom'
import { deleteWatchListApi } from '../../../services/api/watchListApi'
import jwtEnum from '../../../utils/enums/jwtEnum'
import { createBrowserHistory } from "history";
import { useRecoilValue } from "recoil";
import roleState from '../../../state/roleState'
const CourseItem = ({ course, forceUpdate }) => {
  const location = useLocation();
  const history = createBrowserHistory({ forceRefresh: true });
  const role = useRecoilValue(roleState);
  const handleClick = () => {
    deleteWatchListApi(course._id).then(result => {
      if (result.isSuccess) {
        forceUpdate();
      } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
        history.push('/login');
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
          {course && course.newest && <p style={{ float: 'right', color: 'green' }}>Mới nhất</p>}
          {course && course.best_seller && <p style={{ float: 'right', color: 'red' }}>Bán chạy</p>}
          {location.pathname.includes('/subscribed-courses') ?
            course.is_completed ? <p style={{ float: 'right', color: 'green' }}>Hoàn thành</p>
              : <p style={{ float: 'right', color: 'red' }}>Chưa hoàn thành</p>
            : ''}
        </div>
      </div>
    </div>
  )
}

export default CourseItem
