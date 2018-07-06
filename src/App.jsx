/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import Calendar from './Calendar';
import DiapersChart from './DiapersChart';
import calculator from './utils/calculator';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      startDate: '',
      endDate: '',
      numberOfDiapers: 0,
    };

    this.onPickStartDate = this.onPickStartDate.bind(this);
    this.onPickEndDate = this.onPickEndDate.bind(this);
    this.getNumberOfDays = this.getNumberOfDays.bind(this);
  }

  onPickStartDate(e) {
    const start = e.target.value;
    this.setState({
      startDate: start,
    });
  }

  onPickEndDate(e) {
    const end = e.target.value;
    this.setState({
      endDate: end,
    });
  }

  getNumberOfDays() {
    const { startDate, endDate } = this.state;
    const selectedPeriod = Date.parse(endDate) - Date.parse(startDate);
    const minutes = 1000 * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    return Math.round(selectedPeriod / days);
  }

  render() {
    const {
      startDate,
      endDate,
    } = this.state;
    let numberOfDays;
    let numberOfDiapers;

    if (startDate !== '' && endDate !== '') {
      numberOfDays = this.getNumberOfDays();
      numberOfDiapers = calculator(numberOfDays);
    } else {
      numberOfDays = null;
      numberOfDiapers = null;
    }

    return (
      <div className="App">
        <header className="App-header">
          <span className="App-icon" role="img" aria-label="Baby">🚼</span>
          <h1 className="App-title">Diaper Wizard</h1>
        </header>
        <Calendar
          start={startDate}
          end={endDate}
          onPickStartDate={this.onPickStartDate}
          onPickEndDate={this.onPickEndDate}
        />
        <p className="App-content">Diapers needed for the first {numberOfDays} days: {numberOfDiapers}</p>
        <DiapersChart
          days={numberOfDays}
        />
      </div>
    );
  }
}

export default App;
