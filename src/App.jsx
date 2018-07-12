/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import Calendar from './Calendar';
import DiapersSummary from './DiapersSummary';
import DiapersChart from './DiapersChart';
import getArrayOfDiapers from './utils/getArrayOfDiapers';
import calculator from './utils/calculator';
import getNumberOfDays from './utils/getNumberOfDays';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      birthDate: '',
      startDate: '',
      endDate: '',
      startingDay: 1,
      numberOfDiapers: 0,
    };

    this.onPickBirthDate = this.onPickBirthDate.bind(this);
    this.onPickStartDate = this.onPickStartDate.bind(this);
    this.onPickEndDate = this.onPickEndDate.bind(this);
  }

  onPickBirthDate(e) {
    const birth = e.target.value;
    this.setState({
      birthDate: birth,
      startDate: birth,
    });
  }

  onPickStartDate(e) {
    const { birthDate } = this.state;
    const start = e.target.value;

    this.setState({
      startDate: start,
      startingDay: 1 + getNumberOfDays(birthDate, start),
    });
  }

  onPickEndDate(e) {
    const end = e.target.value;
    this.setState({
      endDate: end,
    });
  }

  render() {
    const {
      birthDate,
      startDate,
      endDate,
      startingDay,
    } = this.state;
    let numberOfDays;
    let arrayOfDiapers;
    let numberOfDiapers;

    if (startDate !== '' && endDate !== '') {
      numberOfDays = getNumberOfDays(startDate, endDate);
      arrayOfDiapers = getArrayOfDiapers(startingDay, numberOfDays);
      numberOfDiapers = calculator(arrayOfDiapers);
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
          birth={birthDate}
          start={startDate}
          end={endDate}
          onPickBirthDate={this.onPickBirthDate}
          onPickStartDate={this.onPickStartDate}
          onPickEndDate={this.onPickEndDate}
        />
        <DiapersSummary
          days={numberOfDays}
          diapers={numberOfDiapers}
        />
        <DiapersChart
          startingDay={startingDay}
          days={numberOfDays}
        />
      </div>
    );
  }
}

export default App;
