import React from 'react'
import { Link } from 'react-router-dom'
const Pagination = ({ page, page_number, pathName }) => {

  return (
    <div className="custom-pagination">
      <ul className="pagination">
        {page === 1 || (page_number && page > page_number.length)
          ? ''
          : <li className="page-item">
            <Link className="page-link" to={pathName + '?page=' + `${page - 1}`} >Previous</Link>
          </li>}

        {page_number && page <= page_number.length && page_number.map((item, index) => (
          <li className="page-item" key={index}>
            {page === item ?
              <Link className="page-link" to={pathName + '?page=' + item} style={{ backgroundColor: '#006DF0', color: '#fff' }}>{item}</Link> :
              <Link className="page-link" to={pathName + '?page=' + item} >{item}</Link>}
          </li>
        ))}
        {(page_number && page === page_number.length) || (page_number && page > page_number.length)
          ? ''
          : <li className="page-item">
            <Link className="page-link" to={pathName + '?page=' + `${page + 1}`}>Next</Link>
          </li>}
      </ul>
    </div>
  )
}

export default Pagination
