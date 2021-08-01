import Axios from 'axios';

import courseEnum from '../../utils/enums/courseEnum';

const ENDPOINT = 'http://localhost:5000/api/course-controller/';
Axios.defaults.withCredentials = true;

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

const getAllBySearch = async(search) => {
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

const getCourseById = async(id) => {
  const PATH = ENDPOINT + `course/${id}`;
  try {
    const result = await Axios({
      method: 'get',
      url: PATH
    });
    return result.data.course;
  } catch (e) {
    return null;
  }
}

const getMostSubscribedCourses = async(query) => {
  const PATH = ENDPOINT + `most-subscribed-courses?id=${query.id}&categoryid=${query.category_id}`;
  try {
    const result = await Axios({
      method: 'get',
      url: PATH
    });
    return result.data.most_subscribed_courses;
  } catch (e) {
    return null;
  }
}

export {
  getAllByCriteria,
  getAllByCategoryId,
  getAllBySearch,
  getCourseById,
  getMostSubscribedCourses
}