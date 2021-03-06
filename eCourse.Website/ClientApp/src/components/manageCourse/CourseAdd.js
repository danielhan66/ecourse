import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import * as actions from '../../actions';

export const CourseAdd = props => {
  const [state, setState] = useState({jobDone: true, redirect: false});

  // componentDidMount
  React.useEffect(() => {
      props.fetchAuthors();
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

  return (
    <div>
      {state.redirect && (<Redirect to='/dashboard' />)}
      <header className="header"><h1>Add a course</h1></header>
      <Formik
      initialValues={{'id': 0}}
      enableReinitialize={true}
      validate={values => {
        let errors = {};
        if (!values.title) {
          errors.title = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        props.createCourse(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div class="form-group">
          <label htmlFor="title" style={{ display: 'block' }}>
              Title
          </label>
          <input
              id="title"
              placeholder="Enter course title"
              type="text"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.title && touched.title ? 'text-input error form-control' : 'text-input form-control'
              }
          />
          {errors.title && touched.title && errors.title}
          </div>
          <div class="form-group">
          <label htmlFor="password" style={{ display: 'block' }}>
              Description
          </label>
          <textarea
          id="description"
          placeholder="Enter course description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.title && touched.title ? 'text-input error form-control' : 'text-input form-control'
          }
          rows="5"></textarea>
          {errors.description && touched.description && errors.description}
          </div>
          <div class="form-group">
          <label htmlFor="email" style={{ display: 'block' }}>
              Author
          </label>
          <select
          name="authorId"
          value={values.authorId}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ display: 'block' }}
          class="form-control"
          >
            <option value="" label="Select a author" />
            {
              props.authors ? (
                props.authors.map(author => (<option value={author.id} label={author.name} />))
              ) : null
            }
          </select>
          {errors.authorId && touched.authorId && errors.authorId}
          </div>
          <Link className='btn btn-secondary pull-left' to="/dashboard">Back</Link>
          &nbsp;&nbsp;
          <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
    </div>
  )
};

const mapStateToProps = state => ({
  jobDone: state.courses.jobDone,
  authors: state.authors.authors
})

const mapDispatchToProps = dispatch => ({
  fetchAuthors: () => dispatch(actions.fetchAuthors()),
  createCourse: (course) => dispatch(actions.createCourse(course))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseAdd);