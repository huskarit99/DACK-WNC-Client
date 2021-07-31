import React, { useRef, useState } from 'react'
import {createBrowserHistory} from 'history'
import { useLocation } from 'react-router-dom';

const SearchCourse = () => {
  const keywordRef = useRef(null);
  const location = useLocation();
  let params = new URLSearchParams(location.search);
  const keyword = params.get("keyword");
  const history = createBrowserHistory({ forceRefresh: true });
  const search = (e) =>{
    if(e.code === 'Enter'){
      history.push(`/courses/search?keyword=${keywordRef.current.value}`)
    }

  }
  return (
    <div className="breadcome-heading">
      <input type="text" placeholder="Search..." className="search-int form-control" ref={keywordRef} defaultValue={keyword} onKeyDown={search}/>
    </div>
  )
}

export default SearchCourse
