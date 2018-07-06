import React from 'react';
import PropTypes from 'prop-types';
import getArrayOfDiapers from './utils/getArrayOfDiapers';
import './DiapersChart.css';

function DiapersChart(props) {
  if (props.days == null) {
    return null;
  }

  const arrayOfDiapers = getArrayOfDiapers(props.days);
  return (
    <table className="DiapersChart">
      <tbody>
        <tr>
          <th>Day</th>
          <th>Number of diapers</th>
        </tr>
      </tbody>
      <tbody>
        {arrayOfDiapers.map((array, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{arrayOfDiapers[i]}</td>
          </tr>
          ))}
      </tbody>
    </table>
  );
}

DiapersChart.propTypes = {
  days: PropTypes.number,
};

DiapersChart.defaultProps = {
  days: null,
};

export default DiapersChart;
