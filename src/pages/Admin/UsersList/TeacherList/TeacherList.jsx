import React, { Fragment, useEffect, useState, useReducer } from 'react'
import { useLocation } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { getUsersByRoleNameApi } from '../../../../services/api/userApi';
import TeacherRow from './containers/TeacherRow.jsx/TeacherRow';
import Pagination from './containers/Pagination/Pagination';
import UpdateTeacherModal from './containers/Modal/UpdateTeacherModal';
import AddTeacherModal from './containers/Modal/AddTeacherModal';
import jwtEnum from '../../../../utils/enums/jwtEnum';
import apiStateEnum from '../../../../utils/enums/apiStateEnum';
const TeacherList = () => {

  const location = useLocation();
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const pathName = location.pathname;
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page")) || 1;
  const [teacherList, setTeacherList] = useState(null);
  const history = createBrowserHistory({ forceRefresh: true });
  const [messageAlert, setMessageAlert] = useState('');
  const [apiState, setApiState] = useState(apiStateEnum.PROCESSING);
  useEffect(() => {
    if (location.pathname === '/teachers') {
      getUsersByRoleNameApi('teacher', page).then(result => {
        if (result.isSuccess) {
          setTeacherList(result.data);
          setMessageAlert('');
          setApiState(apiStateEnum.SUCCESS);
        } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
          history.push('/login');
        } else {
          setMessageAlert(result.message);
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
                  <h4>Danh sách giảng viên</h4>
                  <p style={{ color: 'red' }}>{messageAlert}</p>
                  <div className="add-product">
                    <a data-toggle="modal" data-target="#addTeacher" href="#">Thêm giảng viên</a>
                  </div>
                  <AddTeacherModal forceUpdate={forceUpdate} setMessageAlert={setMessageAlert}/>
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
                          return <Fragment key={teacher._id}>
                            <TeacherRow teacher={teacher} index={index + 1 + (page - 1) * 5} />
                            <UpdateTeacherModal teacher={teacher} index={index + 1 + (page - 1) * 5} forceUpdate={forceUpdate} />
                          </Fragment>
                        })}
                      </tbody>
                    </table>
                  </div>
                  {<Pagination page={page} page_number={teacherList && teacherList.page_number} pathName={pathName} />}
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

export default TeacherList
