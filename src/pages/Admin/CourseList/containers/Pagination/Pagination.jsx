import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ page, page_number, pathName, teacherid, categoryid }) => {
  console.log(teacherid);
  console.log(categoryid);
  return (
    <div className="custom-pagination">
      <ul className="pagination">
        {page === 1 || (page_number && page > page_number.length)
          ? ''
          : <li className="page-item">
            {categoryid !== 'none' ?
              <Link className="page-link" to={pathName + '?categoryid=' + categoryid + '&page=' + `${page - 1}`}>Previous</Link>
              : teacherid !== 'none' ? <Link className="page-link" to={pathName + '?teacherid=' + teacherid + '&page=' + `${page - 1}`}>Previous</Link>
                : <Link className="page-link" to={pathName + '?page=' + `${page - 1}`}>Previous</Link>}
          </li>}

        {page_number && page <= page_number.length && page_number.map((item, index) => (
          <li className="page-item" key={index}>
            {page === item ?
              categoryid !== 'none' ?
                <Link className="page-link" to={pathName + '?categoryid=' + categoryid + '&page=' + item} style={{ backgroundColor: '#006DF0', color: '#fff' }}>{item}</Link>
                : teacherid !== 'none' ?
                  <Link className="page-link" to={pathName + '?teacherid=' + teacherid + '&page=' + item} style={{ backgroundColor: '#006DF0', color: '#fff' }}>{item}</Link>
                  : <Link className="page-link" to={pathName + '?page=' + item} style={{ backgroundColor: '#006DF0', color: '#fff' }}>{item}</Link>
              : categoryid !== 'none' ?
                <Link className="page-link" to={pathName + '?categoryid=' + categoryid + '&page=' + item} >{item}</Link>
                : teacherid !== 'none' ?
                  <Link className="page-link" to={pathName + '?teacherid=' + teacherid + '&page=' + item} >{item}</Link>
                  : <Link className="page-link" to={pathName + '?page=' + item} >{item}</Link>}
          </li>
        ))}
        {(page_number && page >= page_number.length) || !page || !page_number
          ? ''
          : <li className="page-item">
            {categoryid !== 'none' ?
              <Link className="page-link" to={pathName + '?categoryid=' + categoryid + '&page=' + `${page + 1}`}>Next</Link>
              : teacherid !== 'none' ? <Link className="page-link" to={pathName + '?teacherid=' + teacherid + '&page=' + `${page + 1}`}>Next</Link>
                : <Link className="page-link" to={pathName + '?page=' + `${page + 1}`}>Next</Link>}
          </li>}
      </ul>
    </div>
  )
}

export default Pagination
