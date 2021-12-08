import React, { Component } from "react";

export default class Avatar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="avatar">
       
        <span className={`isOnline ${this.props.isOnline}`}></span>
      </div>
    );
  }
}