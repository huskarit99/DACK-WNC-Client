import React from 'react'
import Pagination from '../../../parts/components/Pagination/Pagination'
import RootCategoryRow from '../../../parts/components/Categories/RootCategoryRow'

const CategoriesList = () => {
  return (
    <div className="product-status mg-b-15">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="product-status-wrap">
              <h4>Danh sách lĩnh vực</h4>
              <div className="add-product">
                <a href="#">Thêm lĩnh vực</a>
              </div>
              <div className="asset-inner">
                <table>
                  <tr>
                    <th>STT</th>
                    <th>Tên lĩnh vực</th>
                    <th style={{textAlign: 'center', verticalAlign: 'middle'}}>Xem chi tiết</th>
                    <th style={{textAlign: 'center', verticalAlign: 'middle'}}>Cài đặt</th>
                  </tr>
                  <RootCategoryRow/>
                  <RootCategoryRow/>
                  <RootCategoryRow/>
                </table>
              </div>
              <Pagination/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesList
