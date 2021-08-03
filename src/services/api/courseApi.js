import Axios from 'axios';

import courseEnum from '../../utils/enums/courseEnum';

const ENDPOINT = 'http://localhost:5000/api/course-controller/';
Axios.defaults.withCredentials = true;

const getCoursesApi = async(page) => {
  const PATH = ENDPOINT + `courses?page=${page}`;
  try {
    const result = await Axios({
      method: 'get',
      url: PATH
    });
    return {
      isSucess: true,
      data: result.data
    }
  } catch (e) {
    return {
      isSucess: false
    };
  }
}

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

const getCoursesByCategoryIdApi = async(search) => {
  const PATH = ENDPOINT + `courses-by-category-id?categoryid=${search.categoryid}&page=${search.page}`;
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

const getCoursesBySearchApi = async(search) => {
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

const getCourseByIdApi = async(id) => {
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

const getMostSubscribedCoursesApi = async(query) => {
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

const deleteCourseApi = async(id) => {
  const PATH = ENDPOINT + `course/${id}`;
  try {
    const result = await Axios({
      method: 'delete',
      url: PATH
    });
    return {
      isSucess: true
    }
  } catch (e) {
    return {
      isSucess: false
    }
  }
}

export {
  getCoursesApi,
  getAllByCriteria,
  getCoursesByCategoryIdApi,
  getCoursesBySearchApi,
  getCourseByIdApi,
  getMostSubscribedCoursesApi,
  deleteCourseApi
}