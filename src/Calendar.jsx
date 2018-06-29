/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import './Calendar.css';

function Calendar(props) {
  return (
    <div className="Calendar">
      <fieldset>
        <legend className="Calendar-legend">Choose dates</legend>
        <div
          className="Calendar-field"
        >
          <div
            className="Calendar-label"
          >
            <label
              htmlFor="start"
            >
              Start
            </label>
          </div>
          <div
            className="Calendar-input"
          >
            <input
              className="Calendar-input-start"
              type="date"
              id="start"
              name="start"
              value={props.start}
              onChange={props.onPickStartDate}
            />
          </div>
        </div>
        <div
          className="Calendar-field"
        >
          <div
            className="Calendar-label"
          >
            <label
              htmlFor="end"
            >
              End
            </label>
          </div>
          <div
            className="Calendar-input"
          >
            <input
              className="Calendar-input-end"
              type="date"
              id="end"
              name="diapers"
              value={props.end}
              onChange={props.onPickEndDate}
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}

Calendar.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  onPickStartDate: PropTypes.func.isRequired,
  onPickEndDate: PropTypes.func.isRequired,
};

Calendar.defaultProps = {
  start: null,
  end: null,
};

export default Calendar;
