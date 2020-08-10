import React, { Component } from 'react';
import './index.css';
import RacerForm from '../../components/racerForm';
import RacerInfo from '../../components/racerInfo';

class Racer extends Component {
  constructor() {
      super();
      this.state = {
        'data': []
      }
  }

  getRacers = async(e) => {
    e.preventDefault();

    let year = e.target.elements.year.value;
    let season = e.target.elements.season.value;

    if (year === '' || year == null) {
      year = '2000';
    }

    if (season === '' || season === null) {
      season = '1';
    }

    const URL = `http://ergast.com/api/f1/${year}/${season}/driverStandings.json`;

    let response = await fetch(URL);

    let data = await response.json();
    data = data.MRData.StandingsTable.StandingsLists[0].DriverStandings

    this.setState({ data });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <RacerForm getRacers={this.getRacers} />
        </div>
        <div className="col-md-12">
          <RacerInfo data={this.state.data} />
        </div>
      </div> // ends row
    );
  }
}

export default Racer;
