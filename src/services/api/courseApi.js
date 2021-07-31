import Axios from 'axios';

import courseEnum from '../../utils/enums/courseEnum';

const ENDPOINT = 'http://localhost:5000/api/course-controller/';


const getAllByCriteria = async() => {
  const PATH = ENDPOINT + 'criteria';
  try {
    const result = await Axios({
      method: 'get',
      url: PATH
    });
    return result.data;
  } catch (e) {
    return null;
  }
}

const getAllByCategoryId = async(search) => {
  const PATH = ENDPOINT + `courses-by-category-id?categoryid=${search.categoryid}&page=${search.page}`;
  console.log(PATH);
  try {
    const result = await Axios({
      method: 'get',
      url: PATH
    });
    return result.data;
  } catch (e) {
    return null;
  }
}

const getAlllBySearch = async(search) => {
  const PATH = ENDPOINT + `/search?keyword=${search.keyword}&sort=${search.sort}&page=${search.page}`;
  try {
    const result = await Axios({
      method: 'get',
      url: PATH
    });
    return result.data;
  } catch (e) {
    return null;
  }
}

export {
  getAllByCriteria,
  getAllByCategoryId,
  getAlllBySearch
}