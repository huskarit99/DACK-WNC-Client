import React, { Fragment, useEffect, useState, useReducer } from 'react'
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from "history";
import RootCategoryRow from './containers/RootCategoryRow/RootCategoryRow';
import ChildCategoryList from './containers/ChildCategoryList/ChildCategoryList';
import { getCategoriesByPageApi } from '../../../services/api/categoryApi';
import jwtEnum from '../../../utils/enums/jwtEnum';
import Pagination from './containers/Pagination/Pagination';
import AddRootCategoryModal from './containers/Modal/RootCategory/AddRootCategoryModal';
import UpdateNameRootCategoryModal from './containers/Modal/RootCategory/UpdateNameRootCategoryModal';
import UpdateStatusRootCategoryModal from './containers/Modal/RootCategory/UpdateStatusRootCategoryModal';
import apiStateEnum from '../../../utils/enums/apiStateEnum';

const CategoryList = () => {
  const location = useLocation();
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const pathName = location.pathname;
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page")) || 1;
  const [categoryList, setCategoryList] = useState(null);
  const history = createBrowserHistory({ forceRefresh: true });
  const [messageAlert, setMessageAlert] = useState('');
  const [apiState, setApiState] = useState(apiStateEnum.PROCESSING);

  useEffect(() => {
    getCategoriesByPageApi(page).then(result => {
      if (result.isSuccess) {
        setCategoryList(result.data);
        setMessageAlert('');
        setApiState(apiStateEnum.SUCCESS);
      } else if (result.message === jwtEnum.NO_TOKEN || result.message === jwtEnum.TOKEN_IS_EXPIRED) {
        history.push('/login');
      } else {
        setMessageAlert(result.message);
        setApiState(apiStateEnum.FAIL);
      }
    })

  }, [useLocation(), ignored]);
  return (
    <Fragment>
      {apiState === apiStateEnum.SUCCESS ?
        <div className="product-status mg-b-15">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="product-status-wrap">
                  <h4>Danh sách lĩnh vực</h4>
                  <p style={{ color: 'red' }}>{messageAlert}</p>
                  <div className="add-product">
                    <a data-toggle="modal" data-target="#addRootCategory" href="#">Thêm lĩnh vực</a>
                  </div>
                  <AddRootCategoryModal forceUpdate={forceUpdate} />
                  <div className="asset-inner">
                    <table>
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Tên lĩnh vực</th>
                          <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Xem chi tiết</th>
                          <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Cài đặt</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categoryList && categoryList.root_categories && categoryList.root_categories.map((root_category, index) => {
                          return <Fragment key={root_category._id}>
                            <RootCategoryRow root_category={root_category} index={index + 1 + (page - 1) * 5} />
                            <UpdateNameRootCategoryModal root_category={root_category} index={index + 1 + (page - 1) * 5} forceUpdate={forceUpdate}/>
                            <UpdateStatusRootCategoryModal root_category={root_category} index={index + 1 + (page - 1) * 5} forceUpdate={forceUpdate} setMessageAlert={setMessageAlert} />
                            <ChildCategoryList
                              root_category_id={root_category._id}
                              categories={root_category.categories}
                              index={index + 1 + (page - 1) * 5}
                              forceUpdate={forceUpdate}
                              page={page} 
                              setMessageAlert={setMessageAlert}/>
                          </Fragment>
                        })}
                      </tbody>
                    </table>
                  </div>
                  <Pagination page={page} page_number={categoryList && categoryList.page_number} pathName={pathName} />
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

export default CategoryList
