import React, { Fragment } from 'react'
import UpdateStatusCategoryModal from '../Modal/Category/UpdateStatusCategoryModal'
import ChildCategoryRow from '../ChildCategoryRow/ChildCategoryRow'
import AddCategoryModal from '../Modal/Category/AddCategoryModal'
import UpdateNameCategoryModal from '../Modal/Category/UpdateNameCategoryModal'

const ChildCategoryList = ({ root_category_id, categories, index, forceUpdate, setMessageAlert }) => {
  return (
    <tr>
      <td style={{ padding: '0px 15%' }} colspan={4} class="padding-fix text-center">
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
                  <AddCategoryModal index={index} root_category_id={root_category_id} forceUpdate={forceUpdate} />
                </tr>
              </thead>
              <tbody>
                {categories && categories.length > 0 && categories.map((category, index) => {
                  return <Fragment key={category._id}>
                    <ChildCategoryRow category={category} index={index} />
                    <UpdateNameCategoryModal category={category} index={index} forceUpdate={forceUpdate}/>
                    <UpdateStatusCategoryModal category={category} index={index} forceUpdate={forceUpdate} setMessageAlert={setMessageAlert}/>
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
