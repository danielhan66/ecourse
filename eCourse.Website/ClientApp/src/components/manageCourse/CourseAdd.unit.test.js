import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {CourseAdd} from './CourseAdd'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    jobDone: true,
    authors: [],
    fetchAuthors: jest.fn(),
    createCourse: jest.fn()
  }

  const enzymeWrapper = shallow(<CourseAdd {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('CourseAdd', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)    
  })
})