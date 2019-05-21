import { take, put, call, fork, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { api } from '../services'
import * as actions from '../actions'

export function* fetchAuthors(){
  try {
    const authors = yield call(api.fetchAuthors);
    yield put(actions.fetchAuthorsSuccess(authors));
  }catch(error){
    yield put(actions.fetchAuthorsFailure(error))
  }
}

export function* fetchCourse(id){
  try {
    const course = yield call(api.fetchCourse, id);
    yield put(actions.fetchCourseSuccess(course));
  }catch(error){
    yield put(actions.fetchCourseFailure(error))
  }
}

export function* fetchCourses(searchText){
  try {
    const courses = yield call(api.fetchCourses, searchText);
    yield put(actions.fetchCoursesSuccess(courses));
  }catch(error){
    yield put(actions.fetchCoursesFailure(error))
  }
}

export function* createCourse(course){
  try {
    const response = yield call(api.createCourse, course);
    yield put(actions.createCourseSuccess());
  }catch(error){
    yield put(actions.createCourseFailure(error))
  }
}

export function* updateCourse(course){
  try {
    const response = yield call(api.updateCourse, course);
    yield put(actions.updateCourseSuccess());
  }catch(error){
    yield put(actions.updateCourseFailure(error))
  }
}

export function* deleteCourse(id){
  try {
    const response = yield call(api.deleteCourse, id);
    yield put(actions.deleteCourseSuccess());
  }catch(error){
    yield put(actions.deleteCourseFailure(error))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.FETCH_COURSES_REQUEST,(action) => fetchCourses(action.searchText)),
    takeEvery(actions.FETCH_COURSE_REQUEST, (action) => fetchCourse(action.id)),
    takeLatest(actions.FETCH_AUTHORS_REQUEST, fetchAuthors),
    takeEvery(actions.CREATE_COURSE_REQUEST, (action) => createCourse(action.course)),
    takeEvery(actions.UPDATE_COURSE_REQUEST, (action) => updateCourse(action.course)),
    takeEvery(actions.DELETE_COURSE_REQUEST, (action) => deleteCourse(action.id))
  ])
}