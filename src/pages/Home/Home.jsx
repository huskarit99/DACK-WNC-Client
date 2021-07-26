import React from "react";
import { Redirect } from "react-router-dom";

import CourseItem from "../../parts/components/Courses/CourseItem";
import CategoryItem from "../../parts/components/Categories/CategoryItem";

const Home = (props) => {
  if (props.location.pathname !== props.match.path) return <Redirect to="/" />;

  return (
    <div>
      <div className="analytics-sparkle-area">
        <div className="container-fluid">
          <div className="row">
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </div>
        </div>
      </div>
      <div className="admintab-area mg-b-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="admintab-wrap edu-tab1 mg-t-30">
                <ul className="nav nav-tabs custom-menu-wrap custon-tab-menu-style1">
                  <li className="active">
                    <a data-toggle="tab" href="#TabProject">
                      <span className="edu-icon edu-analytics tab-custon-ic"></span>
                      Khóa học nổi bật
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#TabDetails">
                      <span className="edu-icon edu-analytics-arrow tab-custon-ic"></span>
                      Khóa học được xem nhiều nhất
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#TabPlan">
                      <span className="edu-icon edu-analytics-bridge tab-custon-ic"></span>
                      Khóa học mới nhất
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    id="TabProject"
                    className="tab-pane in active animated flipInX custon-tab-style1"
                  >
                    <div className="courses-area">
                      <div className="container-fluid">
                        <div className="row">
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
                  <div
                    id="TabDetails"
                    className="tab-pane animated flipInX custon-tab-style1"
                  >
                    <div className="courses-area">
                      <div className="container-fluid">
                        <div className="row">
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
                  <div
                    id="TabPlan"
                    className="tab-pane animated flipInX custon-tab-style1"
                  >
                    <div className="courses-area">
                      <div className="container-fluid">
                        <div className="row">
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
  );
};

export default Home;
