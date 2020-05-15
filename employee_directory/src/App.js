import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./component/EmployeeCard/Card";
import Employees from "./component/Employees/Employees.json";
// import FilterSort from "./component/Buttons/FilterSort";

class App extends Component {
  state = {
    Employees
  };

  componentDidMount() {
    this.state.Employees.map((Employee) => {
    });
  }

  render() {
    return (
    <div>
      <h1 class="title">U.S.S. Enterprise-D Crew</h1>
      {this.state.Employees.map((Employee) => (
        <Card
          key={Employee.id}
          name={Employee.name}
          rank={Employee.rank}
          image={Employee.image}
        />
      ))}
    </div>
    );
  }
}
export default App;
