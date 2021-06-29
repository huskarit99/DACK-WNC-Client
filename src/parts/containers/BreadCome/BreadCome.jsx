import React from 'react'
import SearchCourse from '../../components/Courses/SearchCourse'
import ShowLink from '../../components/ShowLink/ShowLink'
import Sort from '../../components/Sort/Sort'
const BreadCome = () => {
  return (
    <div className="header-advance-area">
      <div className="breadcome-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="breadcome-list">
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                    {/* SearchCourse component with user home and Search couse page */}
                    <SearchCourse />
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                    <Sort/>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                    {/* Show link */}
                    <ShowLink />
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

export default BreadCome
