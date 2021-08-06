import React, { Fragment } from 'react'
import AddCategoryModal from '../../../pages/Admin/CategoryList/containers/Modal/Category/AddCategoryModal'
import EditCategoryModal from '../../../pages/Admin/CategoryList/containers/Modal/Category/UpdateCategoryModal'
import DeleteCategoryModal from '../../../pages/Admin/CategoryList/containers/Modal/Category/DeleteCategoryModal'
import ChildCategoryRow from './ChildCategoryRow'

const ChildCategoryList = ({ root_category_id, categories, index, page }) => {
  return (
    <tr>
      <td style={{ padding: '0px 15%' }} colspan={4} class="padding-fix text-center">
        {/* id tương ứng với id của category cha */}
        <div id={index} class="order-details panel-collapse out collapse"
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
                        data-target={`#addCategory` + index}>
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
                  <AddCategoryModal index={index} root_category_id={root_category_id}/>
                </tr>
              </thead>
              <tbody>
                {categories && categories.length > 0 && categories.map((category, index) => {
                  return <Fragment key={index}>
                    <ChildCategoryRow category={category} index={index} />
                    <EditCategoryModal category={category} index={index} page={page} />
                    <DeleteCategoryModal category={category} index={index} page={page} />
                  </Fragment>
                })}
              </tbody>
            </table>
          </div>
        </div>

      </td>
    </tr>
  )
}

export default ChildCategoryList
