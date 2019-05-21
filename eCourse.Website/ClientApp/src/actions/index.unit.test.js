import * as actions from '../actions'
describe('actions', () => {
  it('should create an action to create a course', () => {
    const course = {title: 'c#', description: 'c# programming'};
    const expectedAction = {
      type: actions.CREATE_COURSE_REQUEST,
      course: course
    };
    expect(actions.createCourse(course)).toEqual(expectedAction);
  }),
  it('should create an action to update a course', () => {
    const course = {id: 2, title: 'react', description: 'reactjs programming'};
    const expectedAction = {
      type: actions.UPDATE_COURSE_REQUEST,
      course: course
    };
    expect(actions.updateCourse(course)).toEqual(expectedAction);
  }),
  it('should create an action to delete a course', () => {
    const id = 2;
    const expectedAction = {
      type: actions.DELETE_COURSE_REQUEST,
      id: id
    }
    expect(actions.deleteCourse(id)).toEqual(expectedAction)
  })
})