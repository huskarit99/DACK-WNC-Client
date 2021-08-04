import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSetRecoilState } from 'recoil';
import { getCoursesApi } from '../../../../../services/api/courseApi';
import { coursesState } from '../../../../../state/courseState';
import { createBrowserHistory } from "history";

const Pagination = ({ page, page_number }) => {
  const setCourses = useSetRecoilState(coursesState);
  const history = createBrowserHistory({ forceRefresh: true });
  const location = useLocation();
  const pathName = location.pathname;
  const handleClick = (page) => {
    getCoursesApi(page).then(result => {
      if (result.isSucess) {
        setCourses(result.data);
      } else {
        history.push("/");
      }
    });
  }
  return (
    <div className="custom-pagination">
      <ul className="pagination">
        {page === 1 || (page_number && page > page_number.length)
          ? ''
          : <li className="page-item">
            <Link className="page-link" to={pathName + '?page=' + `${page - 1}`} onClick={() => handleClick(page - 1)}>Previous</Link>
          </li>}

        {page_number && page <= page_number.length && page_number.map((item, index) => (
          <li className="page-item" key={index}>
            {page === item ?
              <Link className="page-link" to={pathName + '?page=' + item} onClick={() => handleClick(item)} style={{ backgroundColor: '#006DF0', color: '#fff' }}>{item}</Link> :
              <Link className="page-link" to={pathName + '?page=' + item} onClick={() => handleClick(item)}>{item}</Link>}
          </li>
        ))}
        {(page_number && page === page_number.length) || (page_number && page > page_number.length)
          ? ''
          : <li className="page-item">
            <Link className="page-link" to={pathName + '?page=' + `${page + 1}`} onClick={() => handleClick(page + 1)}>Next</Link>
          </li>}
      </ul>
    </div>
  )
}

export default Pagination
