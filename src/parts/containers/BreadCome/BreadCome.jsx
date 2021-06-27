import React from 'react'
import SearchCourse from '../../components/Courses/SearchCourse'
import ShowLink from '../../components/ShowLink/ShowLink'
const BreadCome = () => {
  return (
    <div className="header-advance-area">
      <div className="breadcome-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="breadcome-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    {/* SearchCourse component with user home and Search couse page */}
                    <SearchCourse/>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    {/* Show link */}
                    <ShowLink/>
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
