import Axios from "axios";

import stateOfAuthentication from "../../utils/enums/stateOfAuthentication";
import {
  loginResponseEnum,
  updateOneResponseEnum,
  registerResponseEnum,
} from "../../utils/enums/userEnum";

const ENDPOINT = "http://localhost:5000/api/user-controller/";
Axios.defaults.withCredentials = true;

const authTokenApi = async () => {
  const PATH = ENDPOINT + "auth/token";
  try {
    const result = await Axios({
      method: "post",
      url: PATH,
    });
    return ({
      state: stateOfAuthentication.SUCCESS,
      role: result.data.role
    });
  } catch (error) {
    return ({
      state: stateOfAuthentication.FAIL,
      role: ""
    });
  }
};
const getUsersApi = async () => {
  const PATH = ENDPOINT + "users";
  try {
    const response = await Axios({
      method: "get",
      url: PATH,
    });
    return response.data;
  } catch (error) {
    return null;
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
// const updateUserApi = async (password, name) => {
//   const PATH = ENDPOINT + "user";
//   let message = "";
//   try {
//     await Axios({
//       method: "put",
//       url: PATH,
//       data: {
//         password: password,
//         name: name,
//       },
//     });
//     message = "Update user successful !!!";
//     return {
//       isSuccess: true,
//       message: message,
//     };
//   } catch (error) {
//     if (!error || !error.response || !error.response.data)
//       return {
//         isSuccess: false,
//         message: "Server Error !!!",
//       };
//     switch (error.response.data.code) {
//       case updateOneUserResponseEnum.NAME_IS_EMPTY: {
//         message = "Name must be not empty !!!";
//         break;
//       }
//       case updateOneUserResponseEnum.PASSWORD_IS_LESS_THAN_6_LETTERS: {
//         message = "Password must be not less than 6 letters !!!";
//         break;
//       }
//       case stateOfAuthentication.FAIL: {
//         message = "Access denied !!!";
//         break;
//       }
//       default: {
//         message = "Server Error !!!!";
//       }
//     }
//     return {
//       isSuccess: false,
//       message: message,
//     };
//   }
// };
// const signupApi = async (username, password, name, roleOfUser) => {
//   const PATH = ENDPOINT + "user";
//   let message = "";
//   try {
//     await Axios({
//       method: "post",
//       url: PATH,
//       data: {
//         username: username,
//         password: password,
//         name: name,
//         roleOfUser: roleOfUser,
//       },
//     });
//     message = "Create user successful !!!";
//     return {
//       isSuccess: true,
//       message: message,
//     };
//   } catch (error) {
//     if (!error || !error.response || !error.response.data)
//       return {
//         isSuccess: false,
//         message: "Server Error !!!",
//       };
//     switch (error.response.data.code) {
//       case createOneUserResponseEnum.NAME_IS_EMPTY: {
//         message = "Name must be not empty !!!";
//         break;
//       }
//       case createOneUserResponseEnum.USERNAME_IS_EMPTY: {
//         message = "Username must be not empty !!!";
//         break;
//       }
//       case createOneUserResponseEnum.PASSWORD_IS_EMPTY: {
//         message = "Password must be not empty !!!";
//         break;
//       }
//       case createOneUserResponseEnum.ROLE_OF_USER_IS_EMPTY: {
//         message = "Role of user must be not empty !!!";
//         break;
//       }
//       case createOneUserResponseEnum.USERNAME_IS_UNAVAILABLE: {
//         message = "Username is unavailable !!!";
//         break;
//       }
//       case createOneUserResponseEnum.PASSWORD_IS_LESS_THAN_6_LETTERS: {
//         message = "Password must be not less than 6 letters !!!";
//         break;
//       }
//       case createOneUserResponseEnum.ROLE_OF_USER_IS_INVALID: {
//         message = "Role of user is invalid !!!";
//         break;
//       }
//       case createOneUserResponseEnum.SERVER_ERROR: {
//         message = "Server Error !!!";
//         break;
//       }
//       case stateOfAuthentication.FAIL: {
//         message = "Access denied !!!";
//         break;
//       }
//       default: {
//         message = "Server Error !!!!";
//       }
//     }
//     return {
//       isSuccess: false,
//       message: message,
//     };
//   }
// };
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

const signoutApi = async () => {
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
      isSuccess: false
    }
  }
};
export {
  authTokenApi,
  getUsersApi,
  // signupApi,
  loginApi,
  signoutApi,
  getSelfInfoApi,
  // updateUserApi,
};
