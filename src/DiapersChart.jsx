import React from 'react';
import PropTypes from 'prop-types';
import getArrayOfDiapers from './utils/getArrayOfDiapers';
import { getDiaperColor } from './utils/getDiaperInfo';
import './DiapersChart.css';

function DiapersChart(props) {
  const { startingDay, days } = props;
  const arrayOfDiapers = getArrayOfDiapers(startingDay, days);

  if (days == null) {
    return null;
  }

  return (
    <table className="DiapersChart">
      <tbody className="DiapersChart-header">
        <tr>
          <th>Day</th>
          <th>Number of diapers</th>
        </tr>
      </tbody>
      <tbody>
        {arrayOfDiapers.map((array, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={i} className={`DiapersChart-row ${getDiaperColor(i + startingDay)}`}>
            <td>{i + startingDay}</td>
            <td>{arrayOfDiapers[i]}</td>
          </tr>
          ))}
      </tbody>
    </table>
  );
}

DiapersChart.propTypes = {
  days: PropTypes.number,
  startingDay: PropTypes.number,
};

DiapersChart.defaultProps = {
  days: null,
  startingDay: null,
};

export default DiapersChart;
