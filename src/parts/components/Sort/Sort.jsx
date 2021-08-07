import React, { Fragment } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { getCoursesBySearchApi } from '../../../services/api/courseApi';
import { coursesBySearchState } from '../../../state/courseState';
const Sort = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const params = new URLSearchParams(location.search);
  const keyword = params.get("keyword");
  const page = Number(params.get("page")) || 1;
  const setCourses = useSetRecoilState(coursesBySearchState);

  const handleClick = (sort) => {
    if (keyword) {
      getCoursesBySearchApi({ keyword, sort, page }).then(result => {
        setCourses(result);
      })
    }
  }
  return (
    <div class="button-drop-style-one">
      {!keyword ? '' : <Fragment>
        <button type="button" class="btn btn-custon-four btn-primary dropdown-toggle1" data-toggle="dropdown">Sắp xếp <i class="fa fa-angle-down"></i>
        </button>
        <ul class="dropdown-menu btn-dropdown-menu another-drop-pro-two dropdown-toggle1 sp-btn-dp-1" role="menu">
          <li>
            <Link
              to={pathname + '?keyword=' + keyword + '&sort=pointasc' + '&page=' + page}
              onClick={() => handleClick('pointasc')}>Điểm đánh giá tăng dần
            </Link>
          </li>
          <li><Link
            to={pathname + '?keyword=' + keyword + '&sort=pointdesc' + '&page=' + page}
            onClick={() => handleClick('pointdesc')}>Điểm đánh giá giảm dần
          </Link>
          </li>
          <li><Link
            to={pathname + '?keyword=' + keyword + '&sort=priceasc' + '&page=' + page}
            onClick={() => handleClick('priceasc')}>Giá tăng dần
          </Link>
          </li>
          <li>
            <Link
              to={pathname + '?keyword=' + keyword + '&sort=pricedesc' + '&page=' + page}
              onClick={() => handleClick('pricedesc')}>Giá giảm dần
            </Link>
          </li>
        </ul>
      </Fragment>}

    </div>
  )
}

export default Sort
