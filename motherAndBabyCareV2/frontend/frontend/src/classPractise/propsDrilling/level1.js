import React, { Component } from "react";
import "./level1.css";
import Level2i from "./level2";
import Level2ii from "./level2ii";
import { Container, Row, Col } from "react-bootstrap";
class Level1Reacts extends Component {
  a = 10;
  constructor(props) {
    super(props);
    this.state = {
      prd1: 0,
      prd2: 0,
    };
  }

  decre1 = () => {
    this.setState({ prd1: --this.state.prd1 });
  };
  incre1 = () => {
    this.setState({ prd1: ++this.state.prd1 });
  };
  decre2 = () => {
    this.setState({ prd2: --this.state.prd2 });
  };
  incre2 = () => {
    this.setState({ prd2: ++this.state.prd2 });
  };

  render() {
    return (
      <>
        <div>
          Total Number of products is {this.state.prd1 + this.state.prd2}
        </div>
        <Level2i
          prd1={this.state.prd1}
          inbtn={this.incre1}
          drbtn={this.decre1}
        />
        <Level2ii
          prd2={this.state.prd2}
          inbtn={this.incre2}
          drbtn={this.decre2}
        />
      </>
    );
  }
}

export default Level1Reacts;
