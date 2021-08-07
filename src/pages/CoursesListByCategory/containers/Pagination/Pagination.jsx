import React from 'react'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { getCoursesByCategoryIdApi } from '../../../../services/api/courseApi';
import { coursesByCategoryIdState } from '../../../../state/courseState';
import messageAlertState from '../../../../state/messageAlertState';
const Pagination = ({ page_number }) => {
  const location = useLocation();
  const pathName = location.pathname;
  const params = new URLSearchParams(location.search);
  const categoryid = params.get("categoryid");
  const page = Number(params.get("page")) || 1;
  const setCourses = useSetRecoilState(coursesByCategoryIdState);
  const setmessageAlert = useSetRecoilState(messageAlertState);

  const handleClick = (page) => {
    if (categoryid) {
      getCoursesByCategoryIdApi({ categoryid, page }).then(result => {
        if (result.isSuccess) {
          setCourses(result.data);
          setmessageAlert('');
        } else {
          setmessageAlert(result.message);
        }
      })
    }
  }
  return (
    <div className="custom-pagination">
      <ul className="pagination">
        {page === 1 || (page_number && page > page_number.length)
          ? ''
          :
          <li className="page-item">
            <Link className="page-link"
              to={pathName + '?categoryid=' + categoryid + '&page=' + `${page - 1}`}
              onClick={() => handleClick(page - 1)}>Previous
            </Link>
          </li>}

        {page_number && page <= page_number.length && page_number.map((item, index) => (
          <li className="page-item" key={index}>
            {page === item ?
              <Link className="page-link"
                to={pathName + '?categoryid=' + categoryid + '&page=' + item}
                style={{ backgroundColor: '#006DF0', color: '#fff' }}
                onClick={() => handleClick(item)}>{item}
              </Link> :
              <Link className="page-link"
                to={pathName + '?categoryid=' + categoryid + '&page=' + item}
                onClick={() => handleClick(item)}>{item}
              </Link>}
          </li>
        ))}
        {(page_number && page === page_number.length) || (page_number && page > page_number.length) || !categoryid
          ? ''
          :
          <li className="page-item">
            <Link className="page-link"
              to={pathName + '?categoryid=' + categoryid + '&page=' + `${page + 1}`}
              onClick={() => handleClick(page + 1)}>Next
            </Link>
          </li>}
      </ul>
    </div>
  )
}

export default Pagination
