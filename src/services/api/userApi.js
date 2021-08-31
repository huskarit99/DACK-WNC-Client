import Axios from "axios";
import jwtEnum from "../../utils/enums/jwtEnum";

import stateOfAuthentication from "../../utils/enums/stateOfAuthentication";
import {
  loginResponseEnum,
  updateOneResponseEnum,
  registerResponseEnum,
  addTeacherResponseEnum,
} from "../../utils/enums/userEnum";

// const ENDPOINT = "http://localhost:5000/api/user-controller/";
const ENDPOINT = process.env.REACT_APP_ENDPOINT + "api/user-controller/";
Axios.defaults.withCredentials = true;

const authTokenApi = async () => {
  const PATH = ENDPOINT + "auth/token";
  try {
    const result = await Axios({
      method: "post",
      url: PATH,
    });
    return {
      state: stateOfAuthentication.SUCCESS,
      role: result.data.role,
    };
  } catch (error) {
    return {
      state: stateOfAuthentication.FAIL,
      role: "",
    };
  }
};
const getUsersByRoleNameApi = async (role, page) => {
  const PATH = ENDPOINT + `users?rolename=${role}&page=${page}`;
  try {
    const response = await Axios({
      method: "get",
      url: PATH,
    });
    return {
      isSuccess: true,
      data: response.data,
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

const getTeachersApi = async () => {
  const PATH = ENDPOINT + `teachers`;
  try {
    const result = await Axios({
      method: "get",
      url: PATH,
    });
    return {
      isSuccess: true,
      data: result.data.teachers,
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

const getSelfInfoApi = async () => {
  try {
    const PATH = ENDPOINT + "user";
    const response = await Axios({
      method: "get",
      url: PATH,
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

const registerApi = async (email, name, password, rePassword) => {
  const PATH = ENDPOINT + "user";
  let message = "";
  try {
    await Axios({
      method: "post",
      url: PATH,
      data: {
        email: email,
        name: name,
        password: password,
        rePassword: rePassword,
      },
    });
    message = "Create user successful !!!";
    return {
      isSuccess: true,
      message: message,
    };
  } catch (error) {
    if (!error || !error.response || !error.response.data)
      return {
        isSuccess: false,
        message: "Server Error !!!",
      };
    switch (error.response.data.code) {
      case registerResponseEnum.NAME_IS_EMPTY: {
        message = "Name must be not empty !!!";
        break;
      }
      case registerResponseEnum.EMAIL_IS_EMPTY: {
        message = "Email must be not empty !!!";
        break;
      }
      case registerResponseEnum.PASSWORD_IS_EMPTY: {
        message = "Password must be not empty !!!";
        break;
      }
      case registerResponseEnum.EMAIL_IS_NOT_VALID: {
        message = "Email went wrong !!!";
        break;
      }
      case registerResponseEnum.EMAIL_IS_UNAVAILABLE: {
        message = "Email is unavailable !!!";
        break;
      }
      case registerResponseEnum.PASSWORD_IS_LESS_THAN_6_LETTERS: {
        message = "Password must be not less than 6 letters !!!";
        break;
      }
      case registerResponseEnum.PASSWORD_DOES_NOT_MATCH: {
        message = "Password does not match !!!";
        break;
      }
      case registerResponseEnum.SERVER_ERROR: {
        message = "Server Error !!!";
        break;
      }
      case stateOfAuthentication.FAIL: {
        message = "Access denied !!!";
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
const loginApi = async (email, password) => {
  const path = ENDPOINT + "auth/user";
  try {
    await Axios({
      // withCredentials: true,
      method: "post",
      url: path,
      data: {
        email: email,
        password: password,
      },
    });
    return {
      isSuccess: true,
    };
  } catch (error) {
    let message = "";
    if (!error || !error.response || !error.response.data)
      return {
        isSuccess: false,
        message: "Server Error !!!",
      };
    switch (error.response.data.code) {
      case loginResponseEnum.EMAIL_IS_EMPTY: {
        message = "Email must be not empty !!!";
        break;
      }
      case loginResponseEnum.EMAIL_IS_NOT_VALID: {
        message = "Email is invalid !!!";
        break;
      }
      case loginResponseEnum.PASSWORD_IS_EMPTY: {
        message = "Password must be not empty !!!";
        break;
      }
      case loginResponseEnum.WRONG_EMAIL: {
        message = "Email went wrong !!!";
        break;
      }
      case loginResponseEnum.WRONG_PASSWORD: {
        message = "Password went wrong !!!";
        break;
      }
      case loginResponseEnum.SERVER_ERROR: {
        message = "Server Error !!!";
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

const logoutApi = async () => {
  const PATH = ENDPOINT + "refresh-token";
  try {
    await Axios({
      method: "delete",
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

const updateUserByIdApi = async (id, status) => {
  const PATH = ENDPOINT + `user`;
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

const addTeacherApi = async (email, name) => {
  const PATH = ENDPOINT + "teacher";
  try {
    await Axios({
      method: "post",
      url: PATH,
      data: {
        email: email,
        name: name,
      },
    });
    return {
      isSuccess: true,
      message: "Thêm giảng viên thành công",
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
      case addTeacherResponseEnum.EMAIL_IS_UNAVAILABLE: {
        message = "Email giảng viên đã tồn tại !!!";
        break;
      }
      case addTeacherResponseEnum.EMAIL_IS_EMPTY: {
        message = "Email giảng viên rỗng !!!";
        break;
      }
      case addTeacherResponseEnum.NAME_IS_EMPTY: {
        message = "Tên giảng viên rỗng !!!";
        break;
      }
      case addTeacherResponseEnum.SERVER_ERROR: {
        message = "Server Error !!!";
        break;
      }
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

const updateUserApi = async (email, password, name) => {
  const PATH = ENDPOINT + "update-user";
  let message = "";
  try {
    await Axios({
      method: "put",
      url: PATH,
      data: {
        email: email,
        password: password ? password : "",
        name: name,
      },
    });
    message = "Update user successful !!!";
    return {
      isSuccess: true,
      message: message,
    };
  } catch (error) {
    if (!error || !error.response || !error.response.data)
      return {
        isSuccess: false,
        message: "Server Error !!!",
      };
    switch (error.response.data.code) {
      case loginResponseEnum.NAME_IS_EMPTY: {
        message = "Name must be not empty !!!";
        break;
      }
      case loginResponseEnum.PASSWORD_IS_EMPTY: {
        message = "Password must be not empty !!!";
        break;
      }
      case loginResponseEnum.PASSWORD_IS_LESS_THAN_6_LETTERS: {
        message = "Password must be not less than 6 letters !!!";
        break;
      }
      case stateOfAuthentication.FAIL: {
        message = "Access denied !!!";
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
  authTokenApi,
  getUsersByRoleNameApi,
  getTeachersApi,
  registerApi,
  loginApi,
  logoutApi,
  getSelfInfoApi,
  updateUserByIdApi,
  addTeacherApi,
  updateUserApi,
};
