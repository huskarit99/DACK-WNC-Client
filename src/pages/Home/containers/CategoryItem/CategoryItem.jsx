import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({category}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
      <div className="analytics-sparkle-line reso-mg-b-30">
        <div className="analytics-content">
          <Link to={"/courses/category?categoryid="+category._id}><h5>{category.name}</h5></Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryItem
