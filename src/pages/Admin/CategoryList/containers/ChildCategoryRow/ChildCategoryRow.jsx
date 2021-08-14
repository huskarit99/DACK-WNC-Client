import React, { Fragment } from 'react'

const ChildCategoryRow = ({ category, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{category.name}</td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        {category.status ?
          <Fragment>
            <button data-toggle="modal" title="Chỉnh sửa" className="pd-setting-ed" data-target={`#updateNameCategory` + index}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button data-toggle="modal" title="Khóa" className="pd-setting-ed" data-target={`#updateStatusCategory` + index}><i className="fa fa-unlock" aria-hidden="true"></i></button>
          </Fragment> :
          <button data-toggle="modal" title="Mở khóa" className="pd-setting-ed" data-target={`#updateStatusCategory` + index}><i className="fa fa-lock" aria-hidden="true" style={{ color: 'red' }}></i></button>
        }
      </td>
    </tr>
  )
}

export default ChildCategoryRow
