import React from 'react'

const SearchCourse = () => {
  return (
    <div className="breadcome-heading">
      <form role="search" className="sr-input-func">
        <input type="text" placeholder="Search..." className="search-int form-control" />
        <a href="#"><i className="fa fa-search"></i></a>
      </form>
    </div>
  )
}

export default SearchCourse
