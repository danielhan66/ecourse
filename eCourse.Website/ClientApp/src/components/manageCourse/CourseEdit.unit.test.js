import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {CourseEdit} from './CourseEdit'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    course: {},
    jobDone: true,
    authors: [],
    fetchAuthors: jest.fn(),
    fetchCourse: jest.fn(),
    updateCourse: jest.fn()
  }

  const enzymeWrapper = shallow(<CourseEdit {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('CourseEdit', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)    
  })
})