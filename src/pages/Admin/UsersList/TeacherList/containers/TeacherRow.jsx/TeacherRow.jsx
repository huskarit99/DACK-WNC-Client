import React from 'react'

const TeacherRow = ({teacher, index}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{teacher.name}</td>
      <td>{teacher.email}</td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        {teacher.status ? <button  data-toggle="modal"  title="Trash" className="pd-setting-ed" data-target={`#del` + index}><i className="fa fa-unlock" aria-hidden="true"></i></button>
        : <button  data-toggle="modal"  title="Trash" className="pd-setting-ed" data-target={`#del` + index}><i className="fa fa-lock" aria-hidden="true" style={{color: 'red'}}></i></button>}
      </td>
    </tr>
  )
}

export default TeacherRow
