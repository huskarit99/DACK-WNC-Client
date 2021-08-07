import React from 'react'

const RootCategoryRow = ({ root_category, index, page }) => {
  return (
    <tr>
      <td>{index + 1 + (page - 1) * 5}</td>
      <td>{root_category.name}</td>
      {/* Xem danh sách lĩnh vực con với href chính là index của lĩnh vực cha*/}
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <a role="button" data-toggle="collapse" data-parent="#accordion"
          href={`#` + index} aria-expanded="true" aria-controls="collapse0">
          <i className="fa fa-eye" aria-hidden="true"></i>
        </a>
      </td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <button data-toggle="modal" title="Edit" className="pd-setting-ed" data-target={`#editRootCategory` + index}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
        <button data-toggle="modal" title="Trash" className="pd-setting-ed" data-target={`#delRootCategory` + index}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
      </td>
    </tr>
  )
}

export default RootCategoryRow
