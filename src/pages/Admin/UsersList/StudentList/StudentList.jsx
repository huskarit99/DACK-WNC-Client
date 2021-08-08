import React, { Fragment, useEffect, useState, useReducer } from 'react'
import { useLocation } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { getUsersByRoleNameApi } from '../../../../services/api/userApi';
import StudentRow from './containers/StudentRow.jsx/StudentRow';
import Pagination from './containers/Pagination/Pagination';
import UpdateStudentModal from './containers/Modal/UpdateStudentModal';
import jwtEnum from '../../../../utils/enums/jwtEnum';
import apiStateEnum from '../../../../utils/enums/apiStateEnum';

const StudentList = () => {

  const location = useLocation();
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const pathName = location.pathname;
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page")) || 1;
  const [studentList, setStudentList] = useState(null);
  const history = createBrowserHistory({ forceRefresh: true });
  const [messageAlert, setmessageAlert] = useState('');
  const [apiState, setApiState] = useState(apiStateEnum.PROCESSING);
  useEffect(() => {
    if (location.pathname === '/students') {
      getUsersByRoleNameApi('student', page).then(result => {
        if (result.isSuccess) {
          setStudentList(result.data);
          setmessageAlert('');
          setApiState(apiStateEnum.SUCCESS);
        } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
          history.push('/login');
        } else {
          setmessageAlert(result.message);
          setApiState(apiStateEnum.FAIL);
        }
      });
    }
  }, [useLocation(), ignored])
  return (
    <Fragment>
      {apiState === apiStateEnum.SUCCESS ?
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
                            <StudentRow student={student} index={index + 1 + (page - 1) * 5} />
                            <UpdateStudentModal student={student} index={index + 1 + (page - 1) * 5} forceUpdate={forceUpdate} />
                          </Fragment>
                        })}
                      </tbody>
                    </table>
                  </div>
                  <Pagination page={page} page_number={studentList && studentList.page_number} pathName={pathName} />
                </div>
              </div>
            </div>
          </div>
        </div> : apiState === apiStateEnum.FAIL ?
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="alert alert-danger alert-mg-b alert-st-four" role="alert">
              <i className="fa fa-times edu-danger-error admin-check-pro admin-check-pro-none" aria-hidden="true" />
              <p className="message-mg-rt message-alert-none"><strong>Oh!</strong> {messageAlert}</p>
            </div>
          </div> :
          <Fragment />
      }
    </Fragment>

  )
}

export default StudentList
