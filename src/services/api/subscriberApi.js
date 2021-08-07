import Axios from 'axios';

const ENDPOINT = 'http://localhost:5000/api/subscriber-controller/';
Axios.defaults.withCredentials = true;

const getSubscribersByCourseId = async(id) => {
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

const subscribe = async(course_id) => {
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
  } catch (e) {
    return {
      isSuccess: false,
    }
  }
}

const rating = async(request) => {
  console.log(request);
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
  } catch (e) {
    return {
      isSuccess: false
    }
  }
}

export {
  getSubscribersByCourseId,
  subscribe,
  rating
}