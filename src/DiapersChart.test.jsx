import React from 'react';
import { shallow } from 'enzyme';
import DiapersChart from './DiapersChart';

describe('DiapersChart', () => {
  it('renders a list of dates', () => {
    const wrapper = shallow(<DiapersChart days={3} />);
    expect(wrapper.hasClass('DiapersChart')).toBe(true);
  });
});
