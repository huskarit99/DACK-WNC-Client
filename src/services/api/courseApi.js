import Axios from "axios";
import categoryEnum from "../../utils/enums/categoryEnum";

import jwtEnum from "../../utils/enums/jwtEnum";
import courseEnum from "../../utils/enums/courseEnum";

const ENDPOINT = "http://localhost:5000/api/course-controller/";
Axios.defaults.withCredentials = true;

const getCoursesApi = async(page, categoryid, teacherid) => {
  const PATH = ENDPOINT + `courses?categoryid=${categoryid}&teacherid=${teacherid}&page=${page}`;
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
        break;
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

const getCoursesByTeacherIdApi = async (page) => {
  const PATH = ENDPOINT + `teacher/courses?page=${page}`;
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
        break;
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

const getAllByCriteria = async () => {
  const PATH = ENDPOINT + "criteria";
  try {
    const result = await Axios({
      method: "get",
      url: PATH,
    });
    return result.data;
  } catch (e) {
    return null;
  }
};

const getCoursesByCategoryIdApi = async(search) => {
  const PATH = ENDPOINT + `courses/category?categoryid=${search.categoryid}&page=${search.page}`;
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
      case categoryEnum.CATEGORY_HAS_BEEN_DELETED: {
        message = "Danh mục đã bị xóa.";
      }
      case categoryEnum.CATEGORY_ID_IS_INVALID: {
        message = "Id danh mục không tồn tại.";
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

const getCoursesBySearchApi = async(search) => {
  const PATH = ENDPOINT + `search?keyword=${search.keyword}&sort=${search.sort}&page=${search.page}`;
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
    if (!error || !error.response || !error.response.data) {
      return {
        isSuccess: false,
        message: "Server Error !!!",
      };
    }
    return {
      isSuccess: false,
      message: "Server Error !!!",
    };
  }
};

const getCourseByIdApi = async (id) => {
  const PATH = ENDPOINT + `course/${id}`;
  try {
    const result = await Axios({
      method: "get",
      url: PATH,
    });
    return {
      isSuccess: true,
      data: result.data.course,
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
      case courseEnum.ID_IS_INVALID: {
        message = "ID khóa học không hợp lệ";
      }
      case courseEnum.COURSE_HAS_BEEN_DELETED: {
        message = "Khóa học đã bị xóa";
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

const getMostSubscribedCoursesApi = async (query) => {
  const PATH =
    ENDPOINT +
    `most-subscribed-courses?id=${query.id}&categoryid=${query.category_id}`;
  try {
    const result = await Axios({
      method: "get",
      url: PATH,
    });
    return result.data.most_subscribed_courses;
  } catch (e) {
    return null;
  }
};

const updateCourseByAdminApi = async (id, status) => {
  const PATH = ENDPOINT + `course-by-admin`;
  try {
    await Axios({
      method: "put",
      url: PATH,
      data: {
        id: id,
        status: status,
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

const updateCourseViewApi = async (id) => {
  const PATH = ENDPOINT + `course-view/${id}`;
  try {
    await Axios({
      method: "put",
      url: PATH,
    });
    return {
      isSuccess: true,
    };
  } catch (error) {
    return {
      isSuccess: false,
    };
  }
};

const addOne = async ({
  name,
  categoryId,
  price,
  image,
  detail,
  description,
}) => {
  const PATH = ENDPOINT + `course`;
  try {
    await Axios({
      method: "post",
      data: {
        name: name,
        categoryId: categoryId,
        price: price,
        image: image,
        detail: detail,
        description: description,
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
      case courseEnum.NAME_IS_EMPTY: {
        message = "Name must be not empty !!!";
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

const updateOne = async ({
  id,
  name,
  categoryId,
  price,
  image,
  detail,
  description,
  discount,
  isCompleted,
}) => {
  const PATH = ENDPOINT + `course`;
  try {
    await Axios({
      method: "put",
      data: {
        id,
        name,
        categoryId,
        price,
        image,
        detail,
        description,
        discount,
        isCompleted,
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
      case courseEnum.NAME_IS_EMPTY: {
        message = "Name must be not empty !!!";
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
  addOne,
  updateOne,
  getCoursesApi,
  getAllByCriteria,
  getCoursesByCategoryIdApi,
  getCoursesBySearchApi,
  getCourseByIdApi,
  getMostSubscribedCoursesApi,
  updateCourseByAdminApi,
  updateCourseViewApi,
  getCoursesByTeacherIdApi,
};
