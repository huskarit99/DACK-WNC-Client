import React from 'react'
import StarRatings from 'react-star-ratings'
import CourseItem from '../../parts/components/Courses/CourseItem'
import Comment from '../../parts/components/Comments/Comment'
import CommentItem from '../../parts/components/Comments/CommentItem'
import Lesson from '../../parts/components/Lesson/Lesson'
const CourseDetail = () => {
  return (
    <div>
      <div className="blog-details-area mg-b-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="blog-details-inner">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="latest-blog-single blog-single-full-view">
                      <div className="blog-image">
                        <a href="#"><img src="img/blog-details/1.jpg" alt="" />
                        </a>
                        <div className="blog-date">
                          <p><span className="blog-day">20</span> May</p>
                        </div>
                      </div>
                      <div className="blog-details blog-sig-details">
                        <div className="details-blog-dt blog-sig-details-dt courses-info mobile-sm-d-n">
                          <span><a href="#"><i className="fa fa-user"></i> <b>Khóa Học:</b> Web Development</a></span>
                          <span><a href="#"><i className="fa fa-heart"></i> <b>Giá:</b> $3000</a></span>
                          <span><a href="#"><i className="fa fa-comments-o"></i> <b>Giảng Viên:</b> Alva Adition</a></span>
                        </div>
                        <h1><a className="blog-ht" href="#">Mô tả ngắn gọn</a></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <h1><a className="blog-ht" href="#">Mô tả chi tiết</a></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <h1><a className="blog-ht" href="#">Thông tin giảng viên</a></h1>
                        <p>Tên: Ngô Ngọc Đăng Khoa</p>
                        <p>Email: nndkhoa@fit.hcmus.edu.vn</p>
                        <h1><a className="blog-ht" href="#">Điểm đánh giá</a></h1>
                        <StarRatings rating={4} starRatedColor="#faca51" starDimension="18px" starSpacing="1px" />
                        <p>(3 đánh giá) (3 học viên)</p>
                        <h1><a className="blog-ht" href="#">Danh sách bài học</a></h1>
                      </div>

                      {/* Danh sách bài học */}
                      <div className="sparkline8-list">
                        <div className="sparkline8-graph">
                          <div className="static-table-list">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Tên Bài</th>
                                  <th>Trạng thái</th>
                                  <th>Thời lượng</th>
                                </tr>
                              </thead>
                              <tbody>
                                <Lesson/>
                                <Lesson/>
                                <Lesson/>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Danh sách bình luận */}
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="comment-head">
                      <h3>Nhận xét</h3>
                    </div>
                  </div>
                </div>
                <CommentItem/>
                <CommentItem/>

                {/* Viết bình luận, chỉ hiển thị khi người đó đăng nhập và chưa bình luận */}
                <Comment/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5 khóa học cùng lĩnh vực được mua nhiều nhất */}
      <div className="courses-area">
        <div className="container-fluid">
          <div className="row">
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
