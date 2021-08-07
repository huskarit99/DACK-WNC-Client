import React from 'react'

const ChildCategoryRow = ( {category, index}) => {
  return (
    <tr>
      <td>{index +1}</td>
      <td>{category.name}</td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <button data-toggle="modal" title="Edit" className="pd-setting-ed" data-target={`#editCategory` + index}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
        <button data-toggle="modal" title="Trash" className="pd-setting-ed" data-target={`#delCategory` + index}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
      </td>
    </tr>
  )
}

export default ChildCategoryRow
