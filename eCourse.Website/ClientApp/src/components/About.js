import React from 'react';
import { connect } from 'react-redux';

const About = props => (
  <div>
    <h1>About eCourse</h1>
    <p>eCourse was designed and implemented by Daniel Han</p>
    <p>Email: daniel_han39@yahoo.com.au  Mobile: 0452188660</p>
  </div>
);

export default connect()(About);