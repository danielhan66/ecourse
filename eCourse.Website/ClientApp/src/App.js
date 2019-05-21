import React from 'react';
import { Route } from 'react-router';
import Layout from './components/layout';
import Home from './components/Home';
import About from './components/About';
import CourseAdd from './components/manageCourse/CourseAdd';
import CourseEdit from './components/manageCourse/CourseEdit';
import CourseDelete from './components/manageCourse/CourseDelete';
import Dashboard from './components/Dashboard';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/manage_course/add' component={CourseAdd} />
    <Route exact path='/manage_course/edit/:id' component={CourseEdit} />
    <Route exact path='/manage_course/delete/:id' component={CourseDelete} />
    <Route exact path='/dashboard' component={Dashboard} />
  </Layout>
);
