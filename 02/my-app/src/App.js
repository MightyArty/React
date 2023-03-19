import "./App.css";
import PersonDetails from "./PersonDetails";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <PersonDetails country="Israel" city="Ariel" street="Ir Ha Yona" />
        <button className="btn btn-info">Cliclk here</button>
      </div>
    );
  }
}
