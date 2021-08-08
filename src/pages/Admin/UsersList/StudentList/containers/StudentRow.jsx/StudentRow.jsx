import React from 'react'

const StudentRow = ({student, index}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        {student.status ? <button  data-toggle="modal"  title="Trash" className="pd-setting-ed" data-target={`#del` + index}><i className="fa fa-unlock" aria-hidden="true"></i></button>
        : <button  data-toggle="modal"  title="Trash" className="pd-setting-ed" data-target={`#del` + index}><i className="fa fa-lock" aria-hidden="true" style={{color: 'red'}}></i></button>}
      </td>
    </tr>
  )
}

export default StudentRow
