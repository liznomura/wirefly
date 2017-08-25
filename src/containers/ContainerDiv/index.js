import React from 'react';
import DivBase from '../containers/DivBase';
import { connect } from 'react-redux';

class Container extends DivBase {
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
