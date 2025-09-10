import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";

export const loginRequest = (username: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: { username, password },
});

export const loginSuccess = (token: string) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
