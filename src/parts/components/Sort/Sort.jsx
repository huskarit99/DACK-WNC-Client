import React from 'react'

const Sort = () => {
  return (
    <div class="button-drop-style-one">
      <button type="button" class="btn btn-custon-four btn-primary dropdown-toggle1" data-toggle="dropdown">Sắp xếp <i class="fa fa-angle-down"></i>
      </button>
      <ul class="dropdown-menu btn-dropdown-menu another-drop-pro-two dropdown-toggle1 sp-btn-dp-1" role="menu">
        <li><a href="#">Điểm đánh giá giảm dần</a>
        </li>
        <li><a href="#">Giá tăng dần</a>
        </li>
      </ul>
    </div>
  )
}

export default Sort
