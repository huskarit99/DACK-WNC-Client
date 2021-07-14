import React from 'react'
import Pagination from '../../../parts/components/Pagination/Pagination'
import RootCategoryRow from '../../../parts/components/Categories/RootCategoryRow'
import ChildCategoryList from '../../../parts/components/Categories/ChildCategoryList'

const CategoriesList = () => {
  return (
    <div className="product-status mg-b-15">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="product-status-wrap">
              <h4>Danh sách lĩnh vực</h4>
              {/* Thêm lĩnh vực cha */}
              <div className="add-product">
                <a data-toggle="modal" title="Edit" className="pd-setting-ed" data-target="#PrimaryModalalert">Thêm lĩnh vực</a>
              </div>
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
                    {/* Cặp lĩnh vực cha và danh sách lĩnh vực con, Mở danh sách lĩnh vực con thông qua id của lĩnh vực cha  */}
                    <RootCategoryRow />
                    <ChildCategoryList />
                  </tbody>
                </table>
              </div>
              {/* Phân trang */}
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesList
