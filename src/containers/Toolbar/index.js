import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tool from '../../components/tool.js';
import { setTool } from '../../actions';

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    this.props.setTool(e.target.dataset.type);
  }

  render() {
    return (
      <div className="toolbar">
      <Tool handleOnClick={this.handleOnClick} dataType="container" />
      <Tool handleOnClick={this.handleOnClick} dataType="div" />
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setTool : tool => {
      dispatch(setTool(tool));
    }
  };
};

Toolbar = connect(mapStateToProps, mapDispatchToProps)(Toolbar);

export default Toolbar;