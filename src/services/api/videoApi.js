import Axios from "axios";

import videoEnum from "../../utils/enums/videoEnum";

const ENDPOINT = "http://localhost:5000/api/video-controller/";
Axios.defaults.withCredentials = true;

const getVideosByCourseId = async (id) => {
  const PATH = ENDPOINT + `videos/${id}`;
  try {
    const result = await Axios({
      method: "get",
      url: PATH,
    });
    return result.data.videos;
  } catch (e) {
    return null;
  }
};

const addVideo = async ({ courseId, video, title, isPreviewed }) => {
  const PATH = ENDPOINT + `video`;
  try {
    await Axios({
      method: "post",
      data: {
        courseId,
        video,
        title,
        isPreviewed,
      },
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
      case videoEnum.TITLE_IS_EMPTY: {
        message = "Title must be not empty !!!";
        break;
      }
      case videoEnum.COURSE_ID_IS_EMPTY: {
        message = "Course ID must be not empty !!!";
        break;
      }
      case videoEnum.VIDEO_IS_EMPTY: {
        message = "Video must be not empty !!!";
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

export { getVideosByCourseId, addVideo };
