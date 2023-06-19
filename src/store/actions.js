import { API } from "../services/api";

export const USER_LOGIN = "USER_LOGIN";
export const USERS_FOR_VALIDATION = "USERS_FOR_VALIDATION";

const actionCreator = (type, payload) => {
  if (payload) {
    return { type, payload };
  } else {
    return { type };
  }
};

export const addUserAction = (user) => actionCreator(USER_LOGIN, user);
export const getUsersForValidationAction = (users) =>
  actionCreator(USERS_FOR_VALIDATION, users);

export const getUsersForValidationThunk = () => {
  return async (dispatch, getState) => {
    await API.getUsers().then((res) =>
      dispatch(getUsersForValidationAction(res))
    );
  };
};

export const registrationThunk = (user) => {
  return async (dispatch, getState) => {
    await API.registration(user).then((res) => dispatch(addUserAction(res)));
  };
};
