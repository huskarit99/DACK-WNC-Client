import React from 'react'

const Pagination = ({page, categoryid, page_number }) => {

  return (
      <div className="custom-pagination">
      <ul className="pagination">
        {page === 1 || (page_number && page > page_number.length)
          ? ''
          : <li className="page-item">
              <a className="page-link" href={'/courses?'+ 'page='+`${page-1}`}>Previous</a>
            </li>}

        {page_number && page <= page_number.length && page_number.map((item, index) => (
          <li className="page-item" key={index}>
            {page === item ?
              <a className="page-link" href={'/courses?'+ 'page='+item} style={{ backgroundColor: '#006DF0', color: '#fff' }}>{item}</a> :
              <a className="page-link" href={'/courses?'+ 'page='+item}>{item}</a>}
          </li>
        ))}
        {(page_number && page === page_number.length) || (page_number && page > page_number.length)
          ? ''
          : <li className="page-item">
              <a className="page-link" href={'/courses?'+ 'page='+`${page+1}`}>Next</a>
            </li>}
      </ul>
    </div>
  )
}

export default Pagination
