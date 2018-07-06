import React from 'react';
import { shallow } from 'enzyme';
import DiapersSummary from './DiapersSummary';

describe('DiapersSummary', () => {
  it('renders the total number of diapers needed for a given period of time', () => {
    const wrapper = shallow(<DiapersSummary days={3} diapers={12} />);
    expect(wrapper.hasClass('DiapersSummary')).toBe(true);
  });
});
