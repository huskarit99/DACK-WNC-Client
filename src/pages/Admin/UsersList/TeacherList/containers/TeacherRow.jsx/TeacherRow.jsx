import React from 'react'

const TeacherRow = ({teacher, index}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{teacher.name}</td>
      <td>{teacher.email}</td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <button  data-toggle="modal"  title="Trash" className="pd-setting-ed" data-target={`#del` + index}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
      </td>
    </tr>
  )
}

export default TeacherRow
