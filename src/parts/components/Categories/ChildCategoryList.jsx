import React from 'react'
import ChildCategoryRow from './ChildCategoryRow'

const ChildCategoryList = () => {
  return (
    <tr>
      <td style={{ padding: '0px 15%' }} colspan="4" class="padding-fix text-center">
        {/* id tương ứng với id của category cha */}
        <div id="1" class="order-details panel-collapse out collapse"
          role="tabpanel" aria-labelledby="heading0" aria-expanded="false"
          style={{ height: '0px' }}>
          <div className="asset-inner">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên lĩnh vực</th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Cài đặt</th>
                  {/* Thêm category con */}
                  <th>
                    <div style={{ textAlign: 'right' }}>
                      <a data-toggle="modal"
                        data-target="#addChildCategory{{_id}}">
                        <button style={{ backgroundColor: '#006DF0' }}
                          data-toggle="tooltip" title="Edit"
                          class="pd-setting-ed">
                          <i style={{ color: 'white' }}
                            class="fa fa-plus"
                            aria-hidden="true"></i>
                        </button>
                      </a>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <ChildCategoryRow/>
                <ChildCategoryRow/>
                <ChildCategoryRow/>
              </tbody>
            </table>
          </div>
        </div>

      </td>
    </tr>
  )
}

export default ChildCategoryList
