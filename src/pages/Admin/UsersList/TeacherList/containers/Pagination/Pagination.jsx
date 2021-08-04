import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSetRecoilState } from 'recoil';
import { createBrowserHistory } from "history";
import { teacherListState } from '../../../../../../state/userState';
import { getUsersByRoleNameApi } from '../../../../../../services/api/userApi';
import jwtEnum from '../../../../../../utils/enums/jwtEnum';

const Pagination = ({ page, page_number }) => {
  const setTeacherList = useSetRecoilState(teacherListState);
  const history = createBrowserHistory({ forceRefresh: true });
  const location = useLocation();
  const pathName = location.pathname;
  const handleClick = (page) => {
    if (location.pathname === '/teachers') {
      getUsersByRoleNameApi('teacher', page).then(result => {
        if (result.isSuccess) {
          setTeacherList(result.data);
        } else if(result.message === jwtEnum.TOKEN_IS_EXPIRED ||result.message === jwtEnum.NO_TOKEN){
          history.push('/login');
        }
      });
    }
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
