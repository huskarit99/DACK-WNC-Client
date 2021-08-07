import React, { Fragment, useEffect } from 'react'
import { useLocation } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import RootCategoryRow from '../../../parts/components/Categories/RootCategoryRow'
import ChildCategoryList from '../../../parts/components/Categories/ChildCategoryList'
import { createBrowserHistory } from "history";
import  categoryListState  from '../../../state/categoryState';
import { getCategoriesByPageApi } from '../../../services/api/categoryApi';
import jwtEnum from '../../../utils/enums/jwtEnum';
import Pagination from './containers/Pagination/Pagination';
import AddRootCategoryModal from './containers/Modal/RootCategory/AddRootCategoryModal';
import EditRootCategoryModal from './containers/Modal/RootCategory/UpdateRootCategoryModal';
import DeleteRootCategoryModal from './containers/Modal/RootCategory/DeleteRootCategoryModal';
import messageAlertState from '../../../state/messageAlertState';

const CategoryList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page")) || 1;
  const [categoryList, setCategoryList] = useRecoilState(categoryListState);
  const history = createBrowserHistory({ forceRefresh: true });
  const messageAlert = useRecoilValue(messageAlertState);

  useEffect(() => {
    getCategoriesByPageApi(page).then(result => {
      if (result.isSuccess) {
        setCategoryList(result.data);
      } else if (result.message === jwtEnum.NO_TOKEN || result.message === jwtEnum.TOKEN_IS_EXPIRED) {
        history.push('/login');
      }
    })

  }, []);
  return (
    <div className="product-status mg-b-15">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="product-status-wrap">
              <h4>Danh sách lĩnh vực</h4>
              <p style={{ color: 'red' }}>{messageAlert}</p>
              {/* Thêm lĩnh vực cha */}
              <div className="add-product">
                <a data-toggle="modal" data-target="#addRootCategory" href="#">Thêm lĩnh vực</a>
              </div>
              <AddRootCategoryModal page={page} />
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
                      return <Fragment key={index}>
                        <RootCategoryRow root_category={root_category} index={index} page={page} />
                        <EditRootCategoryModal root_category={root_category} index={index} page={page} />
                        <DeleteRootCategoryModal root_category={root_category} index={index} page={page} />
                        <ChildCategoryList root_category_id={root_category._id} categories={root_category.categories} index={index} page={page} />
                      </Fragment>
                    })}
                  </tbody>
                </table>
              </div>
              {categoryList && categoryList.page_number && <Pagination page={page} page_number={categoryList.page_number} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryList
