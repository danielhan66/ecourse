import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Welcome to eCourse</h1>
    <p>Welcome to eCourse home page, happy days</p>
  </div>
);

export default connect()(Home);
