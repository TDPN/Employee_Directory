import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./component/EmployeeCard/Card";
import Employees from "./component/Employees/Employees.json";
// import FilterSort from "./component/Buttons/FilterSort";
import {Dropdown,Table} from 'react-bootstrap';
import Hero from "./component/Hero";
import Container from "./component/Container";
import Row from "./component/Row";
import Col from "./component/Col";


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
       <Hero backgroundImage="https://i.ytimg.com/vi/EU0xS355BlQ/maxresdefault.jpg">
       <h1 className="title">U.S.S. Enterprise-D Crew</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <Dropdown onSelect={this.handleSelect}>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item eventKey="0">ID</Dropdown.Item>
                <Dropdown.Item eventKey="1">Name</Dropdown.Item>
                <Dropdown.Item eventKey="2">Rank</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
            <Col size="md-12">
      
               {this.state.Employees.map((Employee) => (
              <Card
              key={Employee.id}
              name={Employee.name}
              rank={Employee.rank}
              image={Employee.image}
              />
               ))}
      
            </Col>
         </Row>
      </Container>
    </div>
    );
  }
}
export default App;
