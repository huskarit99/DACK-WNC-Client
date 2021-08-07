import React, { Fragment, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { createBrowserHistory } from 'history';
import { getUsersByRoleNameApi } from '../../../../services/api/userApi';
import { studentListState } from '../../../../state/userState'
import StudentRow from './containers/StudentRow.jsx/StudentRow';
import Pagination from './containers/Pagination/Pagination';
import DeleteStudentModal from './containers/Modal/DeleteStudentModal';
import jwtEnum from '../../../../utils/enums/jwtEnum';

const StudentList = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page")) || 1;
  const [studentList, setStudentList] = useRecoilState(studentListState);
  const history = createBrowserHistory({ forceRefresh: true });
  useEffect(() => {
    if (location.pathname === '/students') {
      getUsersByRoleNameApi('student', page).then(result => {
        if (result.isSuccess) {
          setStudentList(result.data);
        } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
          history.push('/login');
        }
      });
    }
  }, [])
  return (
    <div className="product-status mg-b-15">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="product-status-wrap">
              <h4>Danh sách học viên</h4>
              <div className="asset-inner">
                <table>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên học viên</th>
                      <th>Email</th>
                      <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Cài đặt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentList && studentList.users && studentList.users.map((student, index) => {
                      return <Fragment key={index}>
                        <StudentRow student={student} index={index + 1 + (page - 1) * 5} page={page} />
                        <DeleteStudentModal student={student} index={index + 1 + (page - 1) * 5} page={page} />
                      </Fragment>
                    })}
                  </tbody>
                </table>
              </div>
              {studentList && studentList.page_number && <Pagination page={page} page_number={studentList.page_number} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentList
