import React from 'react'
import CategoryItem from '../../parts/components/Categories/CategoryItem'
import CourseItem from '../../parts/components/Courses/CourseItem'

const Home = () => {
  return (
    <div>
     <div className="analytics-sparkle-area">
        <div className="container-fluid">
          <div className="row">
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
          </div>
        </div>
      </div>
      <div class="admintab-area mg-b-15">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="admintab-wrap edu-tab1 mg-t-30">
                <ul class="nav nav-tabs custom-menu-wrap custon-tab-menu-style1">
                  <li class="active"><a data-toggle="tab" href="#TabProject"><span class="edu-icon edu-analytics tab-custon-ic"></span>Khóa học nổi bật</a>
                  </li>
                  <li><a data-toggle="tab" href="#TabDetails"><span class="edu-icon edu-analytics-arrow tab-custon-ic"></span>Khóa học được xem nhiều nhất</a>
                  </li>
                  <li><a data-toggle="tab" href="#TabPlan"><span class="edu-icon edu-analytics-bridge tab-custon-ic"></span>Khóa học mới nhất</a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div id="TabProject" class="tab-pane in active animated flipInX custon-tab-style1">
                    <div class="courses-area">
                      <div class="container-fluid">
                        <div class="row">
                          <CourseItem />
                          <CourseItem />
                          <CourseItem />
                          <CourseItem />
                          <CourseItem />
                          <CourseItem />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="TabDetails" class="tab-pane animated flipInX custon-tab-style1">
                    <div class="courses-area">
                      <div class="container-fluid">
                        <div class="row">
                          <CourseItem />
                          <CourseItem />
                          <CourseItem />
                          <CourseItem />
                          <CourseItem />
                          <CourseItem />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="TabPlan" class="tab-pane animated flipInX custon-tab-style1">
                    <div class="courses-area">
                      <div class="container-fluid">
                        <div class="row">
                          <CourseItem />
                          <CourseItem />
                          <CourseItem />
                          <CourseItem />
                          <CourseItem />
                          <CourseItem />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
