import React from 'react';
import { shallow } from 'enzyme';
import Calendar from './Calendar';

describe('Calendar', () => {
  let wrapper;
  const onPickBirthDate = jest.fn();
  const onPickStartDate = jest.fn();
  const onPickEndDate = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Calendar
      onPickBirthDate={onPickBirthDate}
      onPickStartDate={onPickStartDate}
      onPickEndDate={onPickEndDate}
    />);
  });

  it('renders a Calendar component', () => {
    expect(wrapper.hasClass('Calendar')).toBe(true);
  });

  it('has an input field for choosing the start date', () => {
    expect(wrapper.find('.Calendar-input-start').length).toBe(1);
  });

  it('calls the onPickStartDate callback when a date is choosen', () => {
    const evt = { target: { value: '2018-07-27' } };
    wrapper.find('.Calendar-input-start').simulate('change', evt);
    expect(onPickStartDate).toHaveBeenCalledWith(evt);
  });

  it('has an input field for choosing the end date', () => {
    expect(wrapper.find('.Calendar-input-end').length).toBe(1);
  });

  it('calls the onPickEndDate callback when a date is choosen', () => {
    const evt = { target: { value: '2018-08-27' } };
    wrapper.find('.Calendar-input-end').simulate('change', evt);
    expect(onPickEndDate).toHaveBeenCalledWith(evt);
  });
});
