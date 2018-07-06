import React from 'react';
import PropTypes from 'prop-types';

function DiapersSummary(props) {
  const { days, diapers } = props;

  if (days == null) {
    return null;
  }

  return (
    <p
      className="DiapersSummary"
    >
      You will need {diapers} diapers for the first {days} days of your baby.
    </p>
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
