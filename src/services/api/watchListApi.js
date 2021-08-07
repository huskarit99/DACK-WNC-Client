import Axios from 'axios';

const ENDPOINT = 'http://localhost:5000/api/watch-list-controller/';
Axios.defaults.withCredentials = true;

const getWatchList = async(course_id) => {
  const PATH = ENDPOINT + `watch-list?courseid=${course_id}`;
  try {
    const result = await Axios({
      method: 'get',
      url: PATH
    });
    return result.data.is_liked;
  } catch (e) {
    return false;
  }
}

const addWatchList = async(course_id) => {
  const PATH = ENDPOINT + 'add-watch-list';
  try {
    const result = await Axios({
      method: 'post',
      url: PATH,
      data: {
        course_id: course_id
      }
    });
    return {
      isSuccess: true
    }
  } catch (e) {
    return {
      isSuccess: false
    }
  }
}

const deleteWatchList = async(course_id) => {
  const PATH = ENDPOINT + `delete-watch-list/${course_id}`;
  try {
    const result = await Axios({
      method: 'delete',
      url: PATH,
    });
    return {
      isSuccess: true
    }
  } catch (e) {
    return {
      isSuccess: false
    }
  }
}

export {
  getWatchList,
  addWatchList,
  deleteWatchList
}