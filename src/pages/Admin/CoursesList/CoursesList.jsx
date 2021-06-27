import React from 'react'

const CoursesList = () => {
  return (
    <div className="product-status mg-b-15">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="product-status-wrap">
              <h4>Danh sách khóa học</h4>
              <div className="asset-inner">
                <table>
                  <tr>
                    <th>STT</th>
                    <th>Khóa học</th>
                    <th>Giảng viên</th>
                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Cài đặt</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Web Development Book</td>
                    <td>Web Development Book</td>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Web Development Book</td>
                    <td>Web Development Book</td>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Web Development Book</td>
                    <td>Web Development Book</td>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="custom-pagination">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesList
