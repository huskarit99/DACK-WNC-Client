import React from 'react'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { getCoursesBySearchApi } from '../../../../services/api/courseApi';
import { coursesBySearchState } from '../../../../state/courseState';
const Pagination = ({ page_number }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const keyword = params.get("keyword");
  const sort = params.get('sort') || 'none';
  const page = Number(params.get("page")) || 1;
  const pathName = location.pathname;
  const setCourses = useSetRecoilState(coursesBySearchState);

  const handleClick = (page) => {
    if (keyword) {
      getCoursesBySearchApi({ keyword, sort, page }).then(result => {
        setCourses(result);
      })
    }
  }
  return (
    <div className="custom-pagination">
      <ul className="pagination">
        {page === 1 || (page_number && page > page_number.length)
          ? ''
          : <li className="page-item">
            {sort !== 'none' ?
              <Link className="page-link"
                to={pathName + '?keyword=' + keyword + '&sort=' + sort + '&page=' + `${page - 1}`}
                onClick={() => handleClick(page - 1)}>Previous
              </Link>
              :
              <Link className="page-link"
                to={pathName + '?keyword=' + keyword + '&page=' + `${page - 1}`}
                onClick={() => handleClick(page - 1)}>Previous
              </Link>}

          </li>}

        {page_number && page <= page_number.length && page_number.map((item, index) => (
          <li className="page-item" key={index}>
            {page === item ?
              sort !== 'none' ?
                <Link className="page-link"
                  to={pathName + '?keyword=' + keyword + '&sort=' + sort + '&page=' + item}
                  style={{ backgroundColor: '#006DF0', color: '#fff' }}
                  onClick={() => handleClick(item)}>{item}
                </Link> :
                <Link className="page-link"
                  to={pathName + '?keyword=' + keyword + '&page=' + item}
                  style={{ backgroundColor: '#006DF0', color: '#fff' }}
                  onClick={() => handleClick(item)}>{item}
                </Link> :
              sort !== 'none' ?
                <Link className="page-link"
                  to={pathName + '?keyword=' + keyword + '&sort=' + sort + '&page=' + item}
                  onClick={() => handleClick(item)}>{item}</Link> :
                <Link className="page-link"
                  to={pathName + '?keyword=' + keyword + '&page=' + item}
                  onClick={() => handleClick(item)}>{item}
                </Link>}
          </li>
        ))}
        {(page_number && page === page_number.length) || (page_number && page > page_number.length) || !keyword
          ? ''
          : <li className="page-item">
            {sort !== 'none' ?
              <Link className="page-link"
                to={pathName + '?keyword=' + keyword + '&sort=' + sort + '&page=' + `${page + 1}`}
                onClick={() => handleClick(page + 1)}>Next
              </Link>
              :
              <Link className="page-link"
                to={pathName + '?keyword=' + keyword + '&page=' + `${page + 1}`}
                onClick={() => handleClick(page + 1)}>Next
              </Link>}
          </li>}
      </ul>
    </div>
  )
}

export default Pagination
