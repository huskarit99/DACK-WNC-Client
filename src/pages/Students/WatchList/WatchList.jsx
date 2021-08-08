import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CourseItem from '../../../parts/components/Courses/CourseItem'
import { getWatchListByStudentIdApi } from '../../../services/api/watchListApi'
import { createBrowserHistory } from "history";
import jwtEnum from '../../../utils/enums/jwtEnum'
import Pagination from './containers/Pagination/Pagination'

const WatchList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page")) || 1;
  const history = createBrowserHistory({ forceRefresh: true });
  const [watchList, setWatchList] = useState(null);
  const [messageAlert, setMessageAlert] = useState('');

  useEffect(() => {
    getWatchListByStudentIdApi(page).then(result => {
      if (result.isSuccess) {
        setWatchList(result.data);
        console.log(result.data);
        setMessageAlert('');
      } else if (result.message === jwtEnum.TOKEN_IS_EXPIRED || result.message === jwtEnum.NO_TOKEN) {
        history.push('/login');
      } else {
        setMessageAlert(result.message);
      }
    });
  }, []);
  return (
    <div>
      <div className="login-form-area edu-pd mg-b-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="tab-content-details shadow-reset">
                <h2>Danh sách khóa học yêu thích</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {messageAlert === '' ?
      <div className="courses-area">
        <div className="container-fluid">
          <div className="row">
            {watchList && watchList.watch_lists && watchList.watch_lists.map((course, index) =>{
              return <CourseItem course={course} key={index} setMessageAlert={setMessageAlert} setWatchList={setWatchList}/>
            })}
          </div>
          <div className="mg-b-30">
          {watchList && watchList.page_number && <Pagination page={page} page_number={watchList.page_number} setWatchList={setWatchList}/>}
          </div>
        </div>
      </div>
      :
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="alert alert-info alert-st-two" role="alert">
            <i className="fa fa-times edu-danger-error admin-check-pro admin-check-pro-none" aria-hidden="true"></i>
            <p className="message-mg-rt message-alert-none"><strong>Oh!</strong> {messageAlert}</p>
          </div>
        </div>}
    </div>
  )
}

export default WatchList
