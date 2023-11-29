import {
  delay,
  all,
  call,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { fetchedSearchMovies } from "../redux/search";
import { API_KEY } from "../config";
import TheMovieDbApi from "../lib/api";

const api = new TheMovieDbApi(API_KEY);

function* fetchSearchMovies(action) {
  yield delay(500);

  yield put(fetchedSearchMovies(yield call(api.searchMovies, action.payload)));
}

export default function* watcherSaga() {
  yield all([yield takeLatest()]);
}