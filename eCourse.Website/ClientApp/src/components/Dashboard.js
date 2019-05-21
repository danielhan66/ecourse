import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Dashboard extends Component {
    constructor(props) {
    super(props);
    this.txtSearch = React.createRef();
    this.searchCourse = this.searchCourse.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    // This method is called when the component is first added to the document
    this.props.fetchCourses();
  }

  searchCourse() {
    this.props.fetchCourses(this.txtSearch.current.value);
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.props.fetchCourses(this.txtSearch.current.value);
    }
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <div class="input-group add-on">
          <input class="form-control" placeholder="Search..." onKeyDown={this.handleKeyDown} ref={this.txtSearch} type="text"/>
          <div class="input-group-btn">&nbsp;
          <button class="btn btn-primary" onClick={this.searchCourse} type="submit">Search</button>
          </div>
        </div>
        {renderCoursesTable(this.props)}
        {/* {renderPagination(this.props)} */}
      </div>
    );
  }
}

function renderCoursesTable(props) {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Author</th>
          <td>Picture</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {props.courses? props.courses.map(course =>
          <tr key={course.courseId}>
            <td>{course.courseId}</td>
            <td>{course.title}</td>
            <td>{course.description}</td>
            <td>{course.authorName}</td>
            <td><img src={course.authorPic} /></td>
            <td>
              <Link className='btn btn-default pull-left' to={`/manage_course/edit/${course.courseId}`}>Edit</Link>
              <Link className='btn btn-default pull-left' to={`/manage_course/delete/${course.courseId}`}>Delete</Link>
            </td>
          </tr>
        ):null}
      </tbody>
      <tfoot>
        <tr>
            <th colSpan="6"><Link className='btn btn-secondary pull-left' to="/manage_course/add">Add</Link></th>
        </tr>
      </tfoot>
    </table>
  );
}

const mapStateToProps = state => ({
  ...state.courses
})

const mapDispatchToProps = dispatch => ({
  fetchCourses: (searchText) => dispatch(actions.fetchCourses(searchText))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);