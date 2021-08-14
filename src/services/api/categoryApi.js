import Axios from "axios";

import categoryEnum from "../../utils/enums/categoryEnum";
import jwtEnum from "../../utils/enums/jwtEnum";

const ENDPOINT = "http://localhost:5000/api/category-controller/";
Axios.defaults.withCredentials = true;

const getCategoriesApi = async () => {
  const PATH = ENDPOINT + "categories";
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

const getCategoriesForTeacherApi = async () => {
  const PATH = ENDPOINT + "teacher/categories";
  try {
    const result = await Axios({
      method: "get",
      url: PATH,
    });
    return {
      isSuccess: true,
      categories: result.data.categories,
    };
  } catch (e) {
    return {
      isSuccess: false,
    };
  }
};

const getCategoriesByPageApi = async (page) => {
  const PATH = ENDPOINT + `categories/${page}`;
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

const addRootCategoryApi = async (name) => {
  const PATH = ENDPOINT + "root-category";
  try {
    await Axios({
      method: "post",
      url: PATH,
      data: {
        name: name,
      },
    });
    return {
      isSuccess: true,
      message: "Thêm lĩnh vực cha thành công",
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
      case categoryEnum.ROOT_CATEGORY_NAME_IS_EMPTY: {
        message = "Tên danh mục cha trống";
        break;
      }
      case categoryEnum.ROOT_CATEGORY_NAME_IS_UNAVAILABLE: {
        message = "Tên danh mục cha đã tồn tại";
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

const updateNameRootCategoryApi = async (id, name) => {
  const PATH = ENDPOINT + "root-category/name";
  try {
    await Axios({
      method: "put",
      url: PATH,
      data: {
        id: id,
        name: name,
      },
    });
    return {
      isSuccess: true,
      message: "Chỉnh sửa lĩnh vực cha thành công",
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
      case categoryEnum.ID_IS_EMPTY: {
        message = "ID danh mục cha trống";
        break;
      }
      case categoryEnum.ROOT_CATEGORY_NAME_IS_EMPTY: {
        message = "Tên danh mục cha trống";
        break;
      }
      case categoryEnum.ROOT_CATEGORY_NAME_IS_UNAVAILABLE: {
        message = "Tên danh mục cha đã tồn tại";
        break;
      }
      case categoryEnum.ID_IS_INVALID: {
        message = categoryEnum.ID_IS_INVALID;
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

const updateStatusRootCategoryApi = async (id, status) => {
  const PATH = ENDPOINT + `root-category/status`;
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
      case categoryEnum.ID_IS_EMPTY: {
        message = "ID danh mục cha trống";
        break;
      }
      case categoryEnum.STATUS_IS_EMPTY: {
        message = "Trạng thái danh mục cha rỗng";
        break;
      }
      case categoryEnum.ROOT_CATEGORY_HAS_BEEN_DELETED: {
        message = "Danh mục cha đã bị xóa";
        break;
      }
      case categoryEnum.CATEGORY_IS_AVAILABLE: {
        message = "Danh sách danh mục con còn tồn tại";
        break;
      }
      case categoryEnum.ID_IS_INVALID: {
        message = categoryEnum.ID_IS_INVALID;
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

const addCategoryApi = async (id, name) => {
  const PATH = ENDPOINT + "category";
  try {
    await Axios({
      method: "post",
      url: PATH,
      data: {
        name: name,
        root_category_id: id,
      },
    });
    return {
      isSuccess: true,
      message: "Thêm lĩnh vực con thành công",
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
      case categoryEnum.CATEGORY_NAME_IS_EMPTY: {
        message = "Tên danh mục con trống !!!";
        break;
      }
      case categoryEnum.ROOT_CATEGORY_ID_IS_EMPTY: {
        message = "ID danh mục cha trống !!!";
        break;
      }
      case categoryEnum.ROOT_CATEGORY_ID_IS_INVALID: {
        message = "I danh mục cha không hợp lệ !!!";
        break;
      }
      case categoryEnum.ROOT_CATEGORY_HAS_BEEN_DELETED: {
        message = "Danh mục cha đã bị xóa";
        break;
      }
      case categoryEnum.CATEGORY_NAME_IS_UNAVAILABLE: {
        message = "Tên danh mục con đã tồn tại !!!";
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

const updateNameCategoryApi = async (id, name) => {
  const PATH = ENDPOINT + "category/name";
  try {
    await Axios({
      method: "put",
      url: PATH,
      data: {
        id: id,
        name: name,
      },
    });
    return {
      isSuccess: true,
      message: "Chỉnh sửa lĩnh vực con thành công",
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
      case categoryEnum.ID_IS_EMPTY: {
        message = "ID danh mục con trống !!!";
        break;
      }
      case categoryEnum.CATEGORY_NAME_IS_EMPTY: {
        message = "Tên danh mục con trống !!!";
        break;
      }
      case categoryEnum.CATEGORY_NAME_IS_UNAVAILABLE: {
        message = "Tên danh mục con đã tồn tại !!!";
        break;
      }
      case categoryEnum.ID_IS_INVALID: {
        message = "ID danh mục con không hợp lệ !!!";
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

const updateStatusCategoryApi = async (id, status) => {
  const PATH = ENDPOINT + "category/status";
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
      case categoryEnum.ID_IS_EMPTY: {
        message = "ID danh mục con trống !!!";
        break;
      }
      case categoryEnum.STATUS_IS_EMPTY: {
        message = "Trạng thái danh mục con trống !!!";
        break;
      }
      case categoryEnum.CATEGORY_HAS_BEEN_DELETED: {
        message = "Danh mục con đã bị xóa";
        break;
      }
      case categoryEnum.AVAILABLE_COURSE_LIST: {
        message = "Danh sách khóa học còn tồn tại";
        break;
      }
      case categoryEnum.ID_IS_INVALID: {
        message = "ID danh mục con không hợp lệ";
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
  getCategoriesApi,
  getCategoriesForTeacherApi,
  getCategoriesByPageApi,
  addRootCategoryApi,
  updateNameRootCategoryApi,
  updateStatusRootCategoryApi,
  addCategoryApi,
  updateNameCategoryApi,
  updateStatusCategoryApi,
};
