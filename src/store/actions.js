import { API } from "../services/api";

export const USER_LOGIN = "USER_LOGIN";
export const USERS_FOR_VALIDATION = "USERS_FOR_VALIDATION";
export const USER_UPDATED = "USER_UPDATED"

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
export const updateUserAction = (user) => actionCreator(USER_UPDATED, user)


export const getUserThunk = (id) => {
  return async (dispatch, getState) => {
    await API.getUser(id).then((res) => 
      dispatch(addUserAction(res))
    )
  }
}

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

export const updateUserThunk = (user) => {
  return async (dispatch, getState) => {
    await API.updateUser(user).then((res) => dispatch(updateUserAction(res)))
  }
}