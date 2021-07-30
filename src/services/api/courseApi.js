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

const getAllByCategoryId = async(category_id, page) => {
  const PATH = ENDPOINT + `courses?category-id=${category_id}&page=${page}`
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
  getAllByCriteria
}