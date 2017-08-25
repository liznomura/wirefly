import React, { Component } from 'react';
import { connect } from 'react-redux';

class Canvas extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  }

  render() {
    return (
      <div className="canvas" onClick={this.handleClick}>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tool: state.tool,
    containers: state.containers
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

Canvas = connect(mapStateToProps, mapDispatchToProps)(Canvas);

export default Canvas;
