import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link, Redirect } from 'react-router-dom';

export const CourseDelete = props => {
  const [state, setState] = useState({jobDone: true, redirect: false});

  React.useEffect(() => {
    const courseId = props.match.params.id;
    if(courseId){
      props.fetchCourse(courseId);
    }
  }, []);

  React.useEffect(() => {
    if(state.jobDone === false && props.jobDone === true){
      if(!state.redirect){
        setState((prevState) => {
          return {
            ...prevState,
            redirect: true
          }
        });
      }
    }

    if(state.jobDone !== props.jobDone){
      setState((prevState) => {
        return {
          ...prevState,
          jobDone: props.jobDone
        }
      });
    }
  });

  const handleDeleteButtonClick = () => {
    const courseId = props.match.params.id;
    props.deleteCourse(courseId);
  };

  return (
  <div>
    {state.redirect && (<Redirect to='/dashboard' />)}
    <header className="header"><h3>You are about to delete course</h3></header>
    <h5>{props.course? props.course.title : null} by {props.course? props.course.authorName : null}</h5>

    <Link className='btn btn-secondary pull-left' to="/dashboard">Cancel</Link>
          &nbsp;&nbsp;
    <button className="btn btn-primary" onClick={handleDeleteButtonClick}>OK</button>
  </div>
)};

const mapStateToProps = state => ({
  course: state.courses.course,
  jobDone: state.courses.jobDone
})

const mapDispatchToProps = dispatch => ({
  fetchCourse: (courseId) => dispatch(actions.fetchCourse(courseId)),
  deleteCourse: (id) => dispatch(actions.deleteCourse(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseDelete);