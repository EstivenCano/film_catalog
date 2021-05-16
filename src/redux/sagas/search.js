import { put, call, takeLatest } from "redux-saga/effects";
import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_COMPLETE,
  SEARCH_MOVIE_BY_ID_COMPLETE,
  SEARCH_MOVIE_BY_ID_START, 
  SEARCH_MOVIE_BY_ID_ERROR,
  SEARCH_MOVIE_BY_CATEGORY_START,
  SEARCH_MOVIE_BY_CATEGORY_COMPLETE,
  SEARCH_MOVIE_BY_CATEGORY_ERROR,
} from "../../constants/actionTypes";

import { apiCall, searchByTitle, getLatest } from "../api";

//eslint-disable-next-line require-yield
export function* searchMovie({ payload }) {
  try {
    const results = yield call(searchByTitle, payload.movieName , null, null, 'GET')
    yield put({ type: SEARCH_MOVIE_COMPLETE, results})
  } catch (error) {
    yield put({type: SEARCH_MOVIE_ERROR, error})
  }
}

export function* searchMovieById({payload}){
  try {
    const movie = yield call(apiCall, `&i=${payload.movieId}` , null, null, 'GET')
    yield put({type: SEARCH_MOVIE_BY_ID_COMPLETE, movie})
  } catch (error) {
    yield put({type: SEARCH_MOVIE_BY_ID_ERROR, error})
  }
}

export function* searchLatest({payload}){
  try {
    const results = yield call(getLatest,payload.categoryName,  null, 'GET')
    yield put({type: SEARCH_MOVIE_BY_CATEGORY_COMPLETE, results})
  } catch (error) {
    yield put({type: SEARCH_MOVIE_BY_CATEGORY_ERROR, error})
  }
}

export default function* search() {
  yield takeLatest(SEARCH_MOVIE_START, searchMovie);
  yield takeLatest(SEARCH_MOVIE_BY_ID_START, searchMovieById);
  yield takeLatest(SEARCH_MOVIE_BY_CATEGORY_START, searchLatest);

}
