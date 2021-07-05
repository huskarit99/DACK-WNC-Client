import React from 'react'
import EditCategoryModal from '../Modals/AddEditCategoryModal'
import DeleteCategoryModal from '../Modals/DeleteCategoryModal'

const RootCategoryRow = () => {
  // data-target để mở modal nên id của modal sẽ trùng với data-target
  return (
    <tr>
      <td>1</td>
      <td>Web Development Book</td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><i class="fa fa-eye" aria-hidden="true" /></td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <button data-toggle="modal" title="Edit" className="pd-setting-ed" data-target="#PrimaryModalalert"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
        <EditCategoryModal/>
        <button data-toggle="modal" title="Trash" className="pd-setting-ed" data-target="#WarningModalalert"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        <DeleteCategoryModal/>
      </td>
    </tr>
  )
}

export default RootCategoryRow
