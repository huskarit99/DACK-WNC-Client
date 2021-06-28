import React from 'react'

const CategoryItem = () => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
      <div className="analytics-sparkle-line reso-mg-b-30">
        <div className="analytics-content">
          <h5>Lập trình web</h5>
          <h2>$<span className="counter">5000</span> <span className="tuition-fees">Tuition Fees</span></h2>
          <span className="text-success">20%</span>
          <div className="progress m-b-0">
            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}> <span className="sr-only">20% Complete</span> </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryItem
