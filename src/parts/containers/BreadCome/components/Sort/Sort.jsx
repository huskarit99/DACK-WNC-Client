import React, { Fragment } from 'react'
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
const Sort = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const params = new URLSearchParams(location.search);
  const keyword = params.get("keyword");
  const page = Number(params.get("page")) || 1;
  const [sort, setSort] = useState('Phù hợp nhất');

  return (
    <div class="button-drop-style-one">
      {!keyword ? '' : <Fragment>
        <button type="button" class="btn btn-custon-four btn-primary dropdown-toggle1" data-toggle="dropdown">{sort} <i class="fa fa-angle-down"></i>
        </button>
        <ul class="dropdown-menu btn-dropdown-menu another-drop-pro-two dropdown-toggle1 sp-btn-dp-1" role="menu">
          {sort !== 'Phù hợp nhất' && <li>
            <Link
              to={pathname + '?keyword=' + keyword + '&page=' + page} onClick={() => setSort('Phù hợp nhất')}>Phù hợp nhất
            </Link>
          </li>}
          <li>
            <Link
              to={pathname + '?keyword=' + keyword + '&sort=pointasc' + '&page=' + page} onClick={() => setSort('Điểm đánh giá tăng dần')}>Điểm đánh giá tăng dần
            </Link>
          </li>
          <li><Link
            to={pathname + '?keyword=' + keyword + '&sort=pointdesc' + '&page=' + page} onClick={() => setSort('Điểm đánh giá giảm dần')}>Điểm đánh giá giảm dần
          </Link>
          </li>
          <li><Link
            to={pathname + '?keyword=' + keyword + '&sort=priceasc' + '&page=' + page} onClick={() => setSort('Giá tăng dần')}>Giá tăng dần
          </Link>
          </li>
          <li>
            <Link
              to={pathname + '?keyword=' + keyword + '&sort=pricedesc' + '&page=' + page} onClick={() => setSort('Giá giảm dần')}>Giá giảm dần
            </Link>
          </li>
        </ul>
      </Fragment>}
    </div>
  )
}

export default Sort
