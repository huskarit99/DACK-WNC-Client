import React from 'react'

const StudentRow = ({student, index}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <button  data-toggle="modal"  title="Trash" className="pd-setting-ed" data-target={`#del` + index}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
      </td>
    </tr>
  )
}

export default StudentRow
