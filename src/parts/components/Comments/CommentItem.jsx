import React from 'react'
import StarRatings from 'react-star-ratings'
const CommentItem = () => {
  return (
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="user-comment user-coment2">
          <img src="img/contact/1.jpg" alt="" />
          <div class="comment-details">
            <h4>minhquoc</h4>
            <StarRatings rating={4} starRatedColor="#faca51" starDimension="25px" starSpacing="1px" />
            <p>Tạm được</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentItem
