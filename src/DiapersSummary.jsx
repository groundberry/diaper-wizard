import React from 'react';
import PropTypes from 'prop-types';
import './DiapersSummary.css';

function DiapersSummary(props) {
  const { days, diapers } = props;

  if (days == null) {
    return null;
  }

  return (
    <div
      className="DiapersSummary"
    >
      <p>You will need {diapers} diapers for the selected {days} days.</p>
    </div>
  );
}

DiapersSummary.propTypes = {
  days: PropTypes.number,
  diapers: PropTypes.number,
};

DiapersSummary.defaultProps = {
  days: null,
  diapers: null,
};

export default DiapersSummary;
