import React from 'react'
import StarRatings from 'react-star-ratings'
const CommentItem = ({subscriber}) => {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="user-comment user-coment2">
          <img src="/img/contact/1.jpg" alt="" />
          <div className="comment-details">
            <h4>{subscriber.student_name}</h4>
            <StarRatings rating={subscriber.rating} starRatedColor="#faca51" starDimension="25px" starSpacing="1px" />
            <p>{subscriber.comment}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentItem
