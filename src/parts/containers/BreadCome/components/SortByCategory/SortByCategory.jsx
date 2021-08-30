import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { getCategoriesApi } from '../../../../../services/api/categoryApi';
const SortByCategory = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page")) || 1;
  const teacherid = params.get('teacherid') || 'none';
  const [sort, setSort] = useState('Lĩnh vực');
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategoriesApi().then(result => {
      if (result.isSuccess) {
        setCategories(result.data);
        if (teacherid !== 'none') {
          setSort('Lĩnh vực');
        }
      }
    })
  }, [useLocation()]);

  return (
    <div class="button-drop-style-one">
      <button type="button" class="btn btn-custon-four btn-primary dropdown-toggle1" data-toggle="dropdown">{sort} <i class="fa fa-angle-down"></i>
      </button>
      <ul class="dropdown-menu btn-dropdown-menu another-drop-pro-two dropdown-toggle1 sp-btn-dp-1" role="menu">
        {sort !== 'Lĩnh vực' && <li>
          <Link
            to={pathname + '?page=' + page} onClick={() => setSort('Lĩnh vực')}>Mặc định
          </Link>
        </li>}
        {categories && categories.map((category) => {
          return <li key={category._id}>
            <Link
              to={pathname + `?categoryid=${category._id}` + '&page=' + page}
              onClick={() => setSort(category.name)}>{category.name}
            </Link>
          </li>
        })}

      </ul>
    </div>
  )
}

export default SortByCategory
