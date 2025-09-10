import { call, put, takeLatest } from "redux-saga/effects";
import { loginSuccess, loginFailure } from "./actions";
import { LOGIN_REQUEST } from "./types";
import api from "@/api/axiosConfig";

function* loginSaga(action: any): any {
  try {
    const { username, password } = action.payload;
    const response = yield call(api.post, "/auth/login", { username, password });
    yield put(loginSuccess(response.data.token));
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
