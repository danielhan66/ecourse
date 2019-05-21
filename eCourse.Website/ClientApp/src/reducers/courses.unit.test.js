import * as actions from '../actions'
import reducer from './courses'

describe('courses reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      { courses: [], course: null, jobDone: false, isLoading: false, error: null }
    );
  });

  it('should handle create a course', () => {
    expect(reducer(undefined, {
      type: actions.CREATE_COURSE_SUCCESS,
    })).toEqual(
      { courses: [], course: null, jobDone: true, isLoading: false, error: null }
    );
  });

  it('should handle update a course', () => {
    expect(reducer(undefined, {
      type: actions.CREATE_COURSE_SUCCESS,
    })).toEqual(
      { courses: [], course: null, jobDone: true, isLoading: false, error: null }
    );
  });

  it('should handle delete a course', () => {
    expect(reducer(undefined, {
      type: actions.DELETE_COURSE_SUCCESS,
    })).toEqual(
      { courses: [], course: null, jobDone: true, isLoading: false, error: null }
    );
  });
})