import React from 'react'
import Pagination from '../../../parts/components/Pagination/Pagination'
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
                  <tr>
                    <td>1</td>
                    <td>Web Development Book</td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}><i class="fa fa-eye" aria-hidden="true"/></td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>
                      <button data-toggle="tooltip" title="Edit" className="pd-setting-ed"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                      <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Quality Bol pen</td>
                    <td  style={{textAlign: 'center', verticalAlign: 'middle'}}><i class="fa fa-eye" aria-hidden="true"/></td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>
                      <button data-toggle="tooltip" title="Edit" className="pd-setting-ed"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                      <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Box of pendrive</td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}><i class="fa fa-eye" aria-hidden="true"/></td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>
                      <button data-toggle="tooltip" title="Edit" className="pd-setting-ed"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                      <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                    </td>
                  </tr>
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
