import Axios from "axios";
import jwtEnum from "../../utils/enums/jwtEnum";
import watchListEnum from "../../utils/enums/watchListEnum";
// const ENDPOINT = 'http://localhost:5000/api/watch-list-controller/';
const ENDPOINT = process.env.REACT_APP_ENDPOINT + "api/watch-list-controller/";
Axios.defaults.withCredentials = true;

const getWatchListApi = async (course_id) => {
  const PATH = ENDPOINT + `watch-list?courseid=${course_id}`;
  try {
    const result = await Axios({
      method: "get",
      url: PATH,
    });
    return result.data.is_liked;
  } catch (e) {
    return false;
  }
};

const getWatchListByStudentIdApi = async (page) => {
  const PATH = ENDPOINT + `watch-lists?page=${page}`;
  try {
    const result = await Axios({
      method: "get",
      url: PATH,
    });
    return {
      isSuccess: true,
      data: result.data,
    };
  } catch (error) {
    let message = "";
    if (!error || !error.response || !error.response.data) {
      return {
        isSuccess: false,
        message: "Server Error !!!",
      };
    }
    switch (error.response.data.code) {
      case jwtEnum.NO_TOKEN: {
        message = jwtEnum.NO_TOKEN;
      }
      case jwtEnum.TOKEN_IS_EXPIRED: {
        message = jwtEnum.TOKEN_IS_EXPIRED;
        break;
      }
      case watchListEnum.WATCH_LIST_IS_EMPTY: {
        message = "Danh sách yêu thích rỗng !!!";
        break;
      }
      default: {
        message = "Server Error !!!!";
      }
    }
    return {
      isSuccess: false,
      message: message,
    };
  }
};

const addWatchListApi = async (course_id) => {
  const PATH = ENDPOINT + "add-watch-list";
  try {
    const result = await Axios({
      method: "post",
      url: PATH,
      data: {
        course_id: course_id,
      },
    });
    return {
      isSuccess: true,
    };
  } catch (error) {
    let message = "";
    if (!error || !error.response || !error.response.data) {
      return {
        isSuccess: false,
        message: "Server Error !!!",
      };
    }
    switch (error.response.data.code) {
      case jwtEnum.NO_TOKEN: {
        message = jwtEnum.NO_TOKEN;
      }
      case jwtEnum.TOKEN_IS_EXPIRED: {
        message = jwtEnum.TOKEN_IS_EXPIRED;
        break;
      }
      default: {
        message = "Server Error !!!!";
      }
    }
    return {
      isSuccess: false,
      message: message,
    };
  }
};

const deleteWatchListApi = async (course_id) => {
  const PATH = ENDPOINT + `delete-watch-list/${course_id}`;
  try {
    const result = await Axios({
      method: "delete",
      url: PATH,
    });
    return {
      isSuccess: true,
    };
  } catch (error) {
    let message = "";
    if (!error || !error.response || !error.response.data) {
      return {
        isSuccess: false,
        message: "Server Error !!!",
      };
    }
    switch (error.response.data.code) {
      case jwtEnum.NO_TOKEN: {
        message = jwtEnum.NO_TOKEN;
      }
      case jwtEnum.TOKEN_IS_EXPIRED: {
        message = jwtEnum.TOKEN_IS_EXPIRED;
        break;
      }
      default: {
        message = "Server Error !!!!";
      }
    }
    return {
      isSuccess: false,
      message: message,
    };
  }
};

export {
  getWatchListApi,
  addWatchListApi,
  deleteWatchListApi,
  getWatchListByStudentIdApi,
};
