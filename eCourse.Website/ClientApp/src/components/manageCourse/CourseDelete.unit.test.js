import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {CourseDelete} from './CourseDelete'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    jobDone: true,
    authors: [],
    fetchAuthors: jest.fn(),
    createCourse: jest.fn()
  }

  const enzymeWrapper = shallow(<CourseDelete {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('CourseDelete', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)    
  })
})