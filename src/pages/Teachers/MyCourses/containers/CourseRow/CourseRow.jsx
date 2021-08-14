import React from 'react'

const CourseRow = ({course, index}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{course.name}</td>
      <td>{course.is_completed ? "Hoàn thành": "Chưa hoàn thành"}</td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <button className="pd-setting-ed">
          <a className="fa fa-pencil-square-o" aria-hidden="true" href={"/edit-course/"+ course._id} />
        </button>
      </td>
    </tr>
  )
}

export default CourseRow
