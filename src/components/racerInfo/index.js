import React, { Component } from 'react';
import './index.css';

class RacerInfo extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Position</th>
              <th scope="col">Name</th>
              <th scope="col">Nationality</th>
              <th scope="col">Sponsor</th>
              <th scope="col">Points</th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.data[0] &&
            this.props.data.map(standing =>
              <tr key={standing.position}>
                <th scope="row">{standing.position}</th>
                <td><a href={standing.Driver.url}>{standing.Driver.givenName} {standing.Driver.familyName}</a></td>
                <td>{standing.Driver.nationality}</td>
                <td>{standing.Constructors[0].name}</td>
                <td>{standing.points}</td>
              </tr>
            )
          }
          </tbody>
        </table>
            {
              this.props.data.cod === '404' &&
                <h3 className="error">ERROR</h3>
            }
        </div> {/* ends col 12 */}
      </div> // ends row
    );
  }
}

export default RacerInfo;
