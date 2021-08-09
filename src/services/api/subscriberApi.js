import Axios from 'axios';
import jwtEnum from '../../utils/enums/jwtEnum';

const ENDPOINT = 'http://localhost:5000/api/subscriber-controller/';
Axios.defaults.withCredentials = true;

const getSubscribersByCourseIdApi = async(id) => {
  const PATH = ENDPOINT + `subscribers/${id}`;
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

const subscribeApi = async(course_id) => {
  const PATH = ENDPOINT + 'subscribe';
  try {
    const result = await Axios({
      method: 'post',
      url: PATH,
      data: {
        course_id: course_id
      }
    });
    return {
      isSuccess: true,
      subscriber: result.data.subscriber,
      is_subscribed: result.data.is_subscribed
    }
  } catch (error) {
    let message = "";
    if (!error || !error.response || !error.response.data) {
      return {
        isSuccess: false,
        message: "Server Error !!!",
      };
    }
    switch (error.response.data.code) {
      case jwtEnum.NO_TOKEN:
        {
          message = jwtEnum.NO_TOKEN;
          break;
        }
      case jwtEnum.TOKEN_IS_EXPIRED:
        {
          message = jwtEnum.TOKEN_IS_EXPIRED;
          break;
        }
      default:
        {
          message = "Server Error !!!!";
        }
    }
    return {
      isSuccess: false,
      message: message,
    };
  }
}

const ratingApi = async(request) => {
  const PATH = ENDPOINT + 'rating';
  try {
    const result = await Axios({
      method: 'put',
      url: PATH,
      data: {
        course_id: request.course_id,
        rating: request.rating,
        comment: request.comment
      }
    });
    return {
      isSuccess: true,
      subscriber: result.data.subscriber,
      is_rated: result.data.is_rated
    }
  } catch (error) {
    let message = "";
    if (!error || !error.response || !error.response.data) {
      return {
        isSuccess: false,
        message: "Server Error !!!",
      };
    }
    switch (error.response.data.code) {
      case jwtEnum.NO_TOKEN:
        {
          message = jwtEnum.NO_TOKEN;
          break;
        }
      case jwtEnum.TOKEN_IS_EXPIRED:
        {
          message = jwtEnum.TOKEN_IS_EXPIRED;
          break;
        }
      default:
        {
          message = "Server Error !!!!";
        }
    }
    return {
      isSuccess: false,
      message: message,
    };
  }
}

export {
  getSubscribersByCourseIdApi,
  subscribeApi,
  ratingApi
}