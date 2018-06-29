import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders with class name', () => {
    expect(wrapper.hasClass('App')).toBe(true);
  });

  it('renders a calendar', () => {
    expect(wrapper.find('Calendar')).toHaveLength(1);
  });

  it('has one header', () => {
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });

  it('has one content', () => {
    expect(wrapper.find('.App-content')).toHaveLength(1);
  });
});
