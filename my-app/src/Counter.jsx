import React, { Component } from "react";

class Counter extends Component {
  state = { count: 5 };          // PDF starts you off at 5

  incrementCount = () =>
    this.setState(({ count }) => ({ count: count + 1 }));  // PDF tells you to use setState

  render() {
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button className = "counter-btn" onClick={this.incrementCount}>+1</button>
      </div>
    );
  }
}

export default Counter;