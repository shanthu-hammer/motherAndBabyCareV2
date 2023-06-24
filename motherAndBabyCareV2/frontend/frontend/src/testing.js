import React, { Component } from "react";
import TestingJunior from '../src/testingjunior'
class Testing extends Component {
  count = 0;
  name='santhu'
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }
  incre = () => {
    let a = 5;
    this.setState({ count:  ++this.state.count });
  };
  render() {
    return (
      <>
        <h1>hello my name is {this.state.count}</h1>
        <button onClick={this.incre}></button>
        <TestingJunior aaa= {this.name} bbb='second one '/>
      </>
    );
  }
}

export default Testing;
