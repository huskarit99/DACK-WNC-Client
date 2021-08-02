import React from 'react'
import { useLocation } from 'react-router';
const Pagination = ({ page, keyword, sort, page_number }) => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className="custom-pagination">
      <ul className="pagination">
        {page === 1 || (page_number && page > page_number.length)
          ? ''
          : <li className="page-item">
            {sort !== 'none' ?
              <a className="page-link" href={pathName + '?keyword=' + keyword + '&sort=' + sort + '&page=' + `${page - 1}`}>Previous</a>
              : <a className="page-link" href={pathName + '?keyword=' + keyword + '&page=' + `${page - 1}`}>Previous</a>}

          </li>}

        {page_number && page <= page_number.length && page_number.map((item, index) => (
          <li className="page-item" key={index}>
            {page === item ?
              sort !== 'none' ?
                <a className="page-link" href={pathName + '?keyword=' + keyword + '&sort=' + sort + '&page=' + item} style={{ backgroundColor: '#006DF0', color: '#fff' }}>{item}</a> :
                <a className="page-link" href={pathName + '?keyword=' + keyword + '&page=' + item} style={{ backgroundColor: '#006DF0', color: '#fff' }}>{item}</a> :
              sort !== 'none' ?
                <a className="page-link" href={pathName + '?keyword=' + keyword + '&sort=' + sort + '&page=' + item}>{item}</a> :
                <a className="page-link" href={pathName + '?keyword=' + keyword + '&page=' + item}>{item}</a>}
          </li>
        ))}
        {(page_number && page === page_number.length) || (page_number && page > page_number.length) || !keyword
          ? ''
          : <li className="page-item">
            {sort !== 'none' ?
              <a className="page-link" href={pathName + '?keyword=' + keyword + '&sort=' + sort + '&page=' + `${page + 1}`}>Next</a>
              : <a className="page-link" href={pathName + '?keyword=' + keyword + '&page=' + `${page + 1}`}>Next</a>}
          </li>}
      </ul>
    </div>
  )
}

export default Pagination
