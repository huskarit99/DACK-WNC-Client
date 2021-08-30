import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { getTeachersApi } from '../../../../../services/api/userApi';
const SortByTeacher = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page")) || 1;
  const categoryid = params.get('categoryid') || 'none';
  const [sort, setSort] = useState('Giảng viên');
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    getTeachersApi().then(result => {
      if (result.isSuccess) {
        setTeachers(result.data);
        if (categoryid !== 'none') {
          setSort('Giảng viên');
        }
      }
    })
  }, [useLocation()]);

  return (
    <div class="button-drop-style-one">
      <button type="button" class="btn btn-custon-four btn-primary dropdown-toggle1" data-toggle="dropdown">{sort} <i class="fa fa-angle-down"></i>
      </button>
      <ul class="dropdown-menu btn-dropdown-menu another-drop-pro-two dropdown-toggle1 sp-btn-dp-1" role="menu">
        {sort !== 'Giảng viên' && <li>
          <Link
            to={pathname + '?page=' + page} onClick={() => setSort('Giảng viên')}>Mặc định
          </Link>
        </li>}
        {teachers && teachers.map((teacher) => {
          return <li key={teacher._id}>
            <Link
              to={pathname + `?teacherid=${teacher._id}` + '&page=' + page}
              onClick={() => setSort(teacher.name)}>{teacher.name}
            </Link>
          </li>
        })}

      </ul>
    </div>
  )
}

export default SortByTeacher
