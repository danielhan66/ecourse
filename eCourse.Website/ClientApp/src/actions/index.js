export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST'
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS'
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE'

export const FETCH_COURSE_REQUEST = 'FETCH_COURSE_REQUEST'
export const FETCH_COURSE_SUCCESS = 'FETCH_COURSE_SUCCESS'
export const FETCH_COURSE_FAILURE = 'FETCH_COURSE_FAILURE'

export const CREATE_COURSE_REQUEST = 'CREATE_COURSE_REQUEST'
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS'
export const CREATE_COURSE_FAILURE = 'CREATE_COURSE_FAILURE'

export const UPDATE_COURSE_REQUEST = 'UPDATE_COURSE_REQUEST'
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS'
export const UPDATE_COURSE_FAILURE = 'UPDATE_COURSE_FAILURE'

export const DELETE_COURSE_REQUEST = 'DELETE_COURSE_REQUEST'
export const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS'
export const DELETE_COURSE_FAILURE = 'DELETE_COURSE_FAILURE'

export const FETCH_AUTHORS_REQUEST = 'FETCH_AUTHORS_REQUEST'
export const FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS'
export const FETCH_AUTHORS_FAILURE = 'FETCH_AUTHORS_FAILURE'

export function fetchCourses(searchText){
  return {
    type: FETCH_COURSES_REQUEST,
    searchText
  }
}

export function fetchCoursesSuccess(courses){
  return {
    type: FETCH_COURSES_SUCCESS,
    courses
  }
}

export function fetchCoursesFailure(error){
  return {
    type: FETCH_COURSES_FAILURE,
    error,
  }
}

export function fetchCourse(id){
  return {
    type: FETCH_COURSE_REQUEST,
    id
  }
}

export function fetchCourseSuccess(course){
  return {
    type: FETCH_COURSE_SUCCESS,
    course
  }
}

export function fetchCourseFailure(error){
  return {
    type: FETCH_COURSE_FAILURE,
    error,
  }
}

export function createCourse(course){
  return {
    type: CREATE_COURSE_REQUEST,
    course
  }
}

export function createCourseSuccess(){
  return {
    type: CREATE_COURSE_SUCCESS,
  }
}

export function createCourseFailure(error){
  return {
    type: CREATE_COURSE_FAILURE,
    error,
  }
}

export function updateCourse(course){
  return {
    type: UPDATE_COURSE_REQUEST,
    course
  }
}

export function updateCourseSuccess(){
  return {
    type: UPDATE_COURSE_SUCCESS,
  }
}

export function updateCourseFailure(error){
  return {
    type: UPDATE_COURSE_FAILURE,
    error,
  }
}

export function deleteCourse(id){
  return {
    type: DELETE_COURSE_REQUEST,
    id
  }
}

export function deleteCourseSuccess(){
  return {
    type: DELETE_COURSE_SUCCESS,
  }
}

export function deleteCourseFailure(error){
  return {
    type: DELETE_COURSE_FAILURE,
    error,
  }
}

export function fetchAuthors(){
  return {
    type: FETCH_AUTHORS_REQUEST
  }
}

export function fetchAuthorsSuccess(authors){
  return {
    type: FETCH_AUTHORS_SUCCESS,
    authors
  }
}

export function fetchAuthorsFailure(error){
  return {
    type: FETCH_AUTHORS_FAILURE,
    error,
  }
}