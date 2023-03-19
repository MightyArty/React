import React, { Component } from "react";

export default class PersonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tom",
      age: 27,
      profession: "Teacher",
    };
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Profession</th>
              <th>Country</th>
              <th>City</th>
              <th>Street</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{this.state.name}</td>
              <td>{this.state.age}</td>
              <td>{this.state.profession}</td>

              <td>{this.props.country}</td>
              <td>{this.props.city}</td>
              <td>{this.props.street}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
