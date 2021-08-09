import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({ page_number, keyword, sort, page, pathName }) => {

  return (
    <div className="custom-pagination">
      <ul className="pagination">
        {page === 1 || (page_number && page > page_number.length)
          ? ''
          : <li className="page-item">
            {sort !== 'none' ?
              <Link className="page-link"
                to={pathName + '?keyword=' + keyword + '&sort=' + sort + '&page=' + `${page - 1}`}>Previous
              </Link>
              :
              <Link className="page-link"
                to={pathName + '?keyword=' + keyword + '&page=' + `${page - 1}`}>Previous
              </Link>}

          </li>}

        {page_number && page <= page_number.length && page_number.map((item, index) => (
          <li className="page-item" key={index}>
            {page === item ?
              sort !== 'none' ?
                <Link className="page-link"
                  to={pathName + '?keyword=' + keyword + '&sort=' + sort + '&page=' + item}
                  style={{ backgroundColor: '#006DF0', color: '#fff' }}>{item}
                </Link> :
                <Link className="page-link"
                  to={pathName + '?keyword=' + keyword + '&page=' + item}
                  style={{ backgroundColor: '#006DF0', color: '#fff' }}>{item}
                </Link> :
              sort !== 'none' ?
                <Link className="page-link"
                  to={pathName + '?keyword=' + keyword + '&sort=' + sort + '&page=' + item}>{item}</Link> :
                <Link className="page-link"
                  to={pathName + '?keyword=' + keyword + '&page=' + item}>{item}
                </Link>}
          </li>
        ))}
        {(page_number && page >= page_number.length) || !page || !page_number || !keyword
          ? ''
          : <li className="page-item">
            {sort !== 'none' ?
              <Link className="page-link"
                to={pathName + '?keyword=' + keyword + '&sort=' + sort + '&page=' + `${page + 1}`}>Next
              </Link>
              :
              <Link className="page-link"
                to={pathName + '?keyword=' + keyword + '&page=' + `${page + 1}`}>Next
              </Link>}
          </li>}
      </ul>
    </div>
  )
}

export default Pagination
