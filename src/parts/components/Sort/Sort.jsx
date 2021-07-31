import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom';
const Sort = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const params = new URLSearchParams(location.search);
  const keyword = params.get("keyword");
  const page = Number(params.get("page")) || 1 ;
  return (
    <div class="button-drop-style-one">
      {!keyword? '': <Fragment>
      <button type="button" class="btn btn-custon-four btn-primary dropdown-toggle1" data-toggle="dropdown">Sắp xếp <i class="fa fa-angle-down"></i>
      </button>
      <ul class="dropdown-menu btn-dropdown-menu another-drop-pro-two dropdown-toggle1 sp-btn-dp-1" role="menu">
        <li><a href={pathname + '?keyword=' + keyword + '&sort=pointasc' + '&page=' + page}>Điểm đánh giá tăng dần</a>
        </li>
        <li><a href={pathname + '?keyword=' + keyword + '&sort=pointdesc' + '&page=' + page}>Điểm đánh giá giảm dần</a>
        </li>
        <li><a href={pathname + '?keyword=' + keyword + '&sort=priceasc' + '&page=' + page}>Giá tăng dần</a>
        </li>
        <li><a href={pathname + '?keyword=' + keyword + '&sort=pricedesc' + '&page=' + page}>Giá giảm dần</a>
        </li>
      </ul>
        </Fragment>}
      
    </div>
  )
}

export default Sort
