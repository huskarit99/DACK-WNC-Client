import React from 'react'
import { Fragment } from 'react'

const RootCategoryRow = ({ root_category, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{root_category.name}</td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <a role="button" data-toggle="collapse" data-parent="#accordion"
          href={`#` + index} aria-expanded="true" aria-controls="collapse0">
          <i className="fa fa-eye" aria-hidden="true"></i>
        </a>
      </td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        {root_category.status ?
          <Fragment>
            <button data-toggle="modal" title="Chỉnh sửa" className="pd-setting-ed" data-target={`#updateNameRootCategory` + index}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button data-toggle="modal" title="Khóa" className="pd-setting-ed" data-target={`#updateStatusRootCategory` + index}><i className="fa fa-unlock" aria-hidden="true"></i></button>
          </Fragment> :
           <button data-toggle="modal" title="Mở khóa" className="pd-setting-ed" data-target={`#updateStatusRootCategory` + index}><i className="fa fa-lock" aria-hidden="true" style={{color: 'red'}}></i></button>
        }

      </td>
    </tr>
  )
}

export default RootCategoryRow
