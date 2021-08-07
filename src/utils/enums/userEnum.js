const loginResponseEnum = {
  SUCCESS: 'login_success',
  EMAIL_IS_EMPTY: 'email_is_empty',
  EMAIL_IS_NOT_VALID: 'email_is_not_valid',
  PASSWORD_IS_EMPTY: 'password_is_empty',
  WRONG_EMAIL: 'wrong_email',
  WRONG_PASSWORD: 'wrong_password',
  SERVER_ERROR: 'server_error'
};

const registerResponseEnum = {
  SUCCESS: 'register_success',
  NAME_IS_EMPTY: 'fullname_is_empty',
  EMAIL_IS_EMPTY: 'email_is_empty',
  EMAIL_IS_NOT_VALID: 'email_is_not_valid',
  PASSWORD_IS_EMPTY: 'password_is_empty',
  EMAIL_IS_UNAVAILABLE: 'email_is_unavailable',
  SERVER_ERROR: 'server_error',
  PASSWORD_DOES_NOT_MATCH: 'password_does_not_match',
  PASSWORD_IS_LESS_THAN_6_LETTERS: 'password_is_less_than_6_letters'
};

const updateOneResponseEnum = {
  SUCCESS: 'update_success',
  NAME_IS_EMPTY: 'name_is_empty',
  PASSWORD_IS_EMPTY: 'password_is_empty',
  SERVER_ERROR: 'server_error',
  PASSWORD_IS_LESS_THAN_6_LETTERS: 'password_is_less_than_6_letters'
}

const addTeacherResponseEnum = {
  NAME_IS_EMPTY: 'name_is_empty',
  EMAIL_IS_EMPTY: 'email_is_empty',
  EMAIL_IS_UNAVAILABLE: 'email_is_unavailable',
  SERVER_ERROR: 'server_error',
}

export { loginResponseEnum, registerResponseEnum, updateOneResponseEnum, addTeacherResponseEnum };