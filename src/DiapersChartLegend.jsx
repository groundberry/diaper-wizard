import React from 'react';
import './DiapersChartLegend.css';

function DiapersChartLegend() {
  return (
    <div
      className="DiapersChartLegend"
    >
      <h1 className="DiapersChartLegend-header">Diaper Sizes</h1>
      <ul className="DiapersChartLegend-list">
        <li>Size NB/Newborn (Up to 10 lb) - For small or average-sized newborn infants.</li>
        <li>Size 1 (8-14 lb) - For larger newborns and infants up to 3 months old.</li>
        <li>Size 2 (12-18 lb) - For infants from 2 to 6 months old.</li>
        <li>Size 3 (16-28 lb) - For infants and toddlers from 5 months to 2 years old.</li>
      </ul>
    </div>
  );
}

export default DiapersChartLegend;
