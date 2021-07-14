import React from 'react'
import AddEditCategoryModal from '../Modals/AddEditCategoryModal'
import DeleteCategoryModal from '../Modals/DeleteCategoryModal'

const ChildCategoryRow = () => {
  return (
    <tr>
      <td>1</td>
      <td>Web Development Book</td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <button data-toggle="modal" title="Edit" className="pd-setting-ed" data-target="#PrimaryModalalert"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
        <AddEditCategoryModal />
        <button data-toggle="modal" title="Trash" className="pd-setting-ed" data-target="#WarningModalalert"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        <DeleteCategoryModal />
      </td>
    </tr>
  )
}

export default ChildCategoryRow
