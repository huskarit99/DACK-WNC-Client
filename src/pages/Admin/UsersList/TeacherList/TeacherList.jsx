import React, { Fragment, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil';
import { createBrowserHistory } from 'history';
import { getUsersByRoleNameApi } from '../../../../services/api/userApi';
import { messageAlertState, teacherListState } from '../../../../state/userState'
import TeacherRow from './containers/TeacherRow.jsx/TeacherRow';
import Pagination from './containers/Pagination/Pagination';
import DeleteTeacherModal from './containers/Modal/DeleteTeacherModal';
import AddTeacherModal from './containers/Modal/AddTeacherModal';
const TeacherList = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page")) || 1;
  const [teacherList, setTeacherList] = useRecoilState(teacherListState);
  const history = createBrowserHistory({ forceRefresh: true });
  const messageAlert = useRecoilValue(messageAlertState);
  useEffect(() => {
    if (location.pathname === '/teachers') {
      getUsersByRoleNameApi('teacher', page).then(result => {
        if (result.isSuccess) {
          setTeacherList(result.data);
        } else {
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
              <h4>Danh sách giảng viên</h4>
              <p style={{ color: 'red' }}>{messageAlert}</p>
              <div className="add-product">
                <a data-toggle="modal" data-target="#addTeacher" href="#">Thêm giảng viên</a>
              </div>
              <AddTeacherModal page={page} />
              <div className="asset-inner">
                <table>
                  <thead><tr>
                    <th>STT</th>
                    <th>Tên giảng viên</th>
                    <th>Email</th>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Cài đặt</th>
                  </tr></thead>
                  <tbody>
                    {teacherList && teacherList.users && teacherList.users.map((teacher, index) => {
                      return <Fragment>
                        <TeacherRow teacher={teacher} key={index} index={index + 1 + (page - 1) * 5} page={page} />
                        <DeleteTeacherModal teacher={teacher} key={index + 1024} index={index + 1 + (page - 1) * 5} page={page} />
                      </Fragment>
                    })}
                  </tbody>
                </table>
              </div>
              {teacherList && teacherList.page_number && <Pagination page={page} page_number={teacherList.page_number} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherList
