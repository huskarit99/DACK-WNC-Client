import React, { useState, useRef } from 'react'
import StarRatings from 'react-star-ratings'
import { createBrowserHistory } from "history";
import { ratingApi } from '../../../../services/api/subscriberApi';
import jwtEnum from '../../../../utils/enums/jwtEnum';
const Comment = ({ id, subscribers, setSubscribers }) => {
  const history = createBrowserHistory({ forceRefresh: true });
  const commentRef = useRef(null);
  const [star, setStar] = useState(0);
  const changeRating = (number) => {
    setStar(number);
  }
  const handleClick = () => {
    ratingApi({ course_id: id, rating: star, comment: commentRef.current.value }).then(result => {
      if (result.isSuccess) {
        let tmp = JSON.parse(JSON.stringify(subscribers));
        tmp.is_rated = result.is_rated;
        tmp.subscribers_rated.push(result.subscriber);
        let point = 0;
        if (tmp.subscribers_rated.length > 0) {
          for (var i = 0; i < tmp.subscribers_rated.length; i++) {
            point = point + tmp.subscribers_rated[i].rating;
          }
          point = point / tmp.subscribers_rated.length;
        }
        tmp.point = point;
        setSubscribers(tmp);
      } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
        history.push('/login');
      }
    })
  }

  return (
    <div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="lead-head">
            <h3>Để lại nhận xét</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="coment-area">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 comment">
            <StarRatings rating={star} changeRating={changeRating} starHoverColor='#faca51' starRatedColor="#faca51" starDimension="25px" starSpacing="1px" />
            <div className="form-group">
              <textarea name="message" cols="30" rows="10" placeholder="Message" ref={commentRef}></textarea>
            </div>
            <div className="payment-adress comment-stn">
              {star > 0 && <button onClick={handleClick} className="btn btn-primary waves-effect waves-light">Gửi</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment
