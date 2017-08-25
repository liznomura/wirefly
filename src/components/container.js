import React, { Component } from 'react';
import { connect } from 'react-redux';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" id={this.props.containerId} onClick={this.props.handleClick}>
      </div>
      );
  }
}

export default Container;
