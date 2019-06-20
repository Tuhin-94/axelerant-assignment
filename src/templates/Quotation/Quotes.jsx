import React, { Component } from "react";

class Quotes extends Component {
  render() {
    return (
      <div>
        <p> {this.props.text}</p>
        <h4 style={{ display: "flex", justifyContent: "center" }}>
          {this.props.name}
        </h4>
      </div>
    );
  }
}
export default Quotes;
