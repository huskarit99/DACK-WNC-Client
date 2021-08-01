import Axios from 'axios';

const ENDPOINT = 'http://localhost:5000/api/video-controller/';

const getVideosByCourseId = async(id) => {
  const PATH = ENDPOINT + `videos/${id}`;
  try {
    const result = await Axios({
      method: 'get',
      url: PATH
    });
    return result.data.videos;
  } catch (e) {
    return null;
  }
}

export {
  getVideosByCourseId
}