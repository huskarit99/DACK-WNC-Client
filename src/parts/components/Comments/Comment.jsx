import React from 'react'
import StarRatings from 'react-star-ratings'
const Comment = () => {
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
          <form id="comment" action="#" className="comment">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <StarRatings rating={5} starRatedColor="#faca51" starDimension="18px" starSpacing="1px" />
              <div className="form-group">
                <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
              </div>
              <div className="payment-adress comment-stn">
                <button type="submit" className="btn btn-primary waves-effect waves-light">Gửi</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Comment
