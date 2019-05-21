import {CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS, CREATE_COURSE_FAILURE, UPDATE_COURSE_REQUEST, UPDATE_COURSE_SUCCESS, UPDATE_COURSE_FAILURE, DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS, DELETE_COURSE_FAILURE, FETCH_COURSE_REQUEST, FETCH_COURSE_SUCCESS, FETCH_COURSE_FAILURE, FETCH_COURSES_REQUEST, FETCH_COURSES_SUCCESS, FETCH_COURSES_FAILURE} from '../actions'

const initialState = { courses: [], course: null, jobDone: false, isLoading: false, error: null };

const reducer = (state, action) => {
  state = state || initialState;

  switch(action.type){
    case FETCH_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_COURSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        course: action.course
      };
    case FETCH_COURSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        courses: action.courses
      };
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case CREATE_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        jobDone: false
      };
    case CREATE_COURSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        jobDone: true
      };
    case CREATE_COURSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case UPDATE_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        jobDone: false
      };
    case UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        jobDone: true
      };
    case UPDATE_COURSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
      case DELETE_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        jobDone: false
      };
    case DELETE_COURSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        jobDone: true
      };
    case DELETE_COURSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state;
  }
};
export default reducer;