import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tool from '../../components/tool.js';
import { setTool } from '../../actions';
import Menu from '../Menu';

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
      <div className={ this.props.isVisible ? "visible toolbar" : "toolbar" }>
      <Menu />
      <Tool handleOnClick={this.handleOnClick} dataType="container" />
      <Tool handleOnClick={this.handleOnClick} dataType="div" />
      <Tool handleOnClick={this.handleOnClick} dataType="image" />
      <Tool handleOnClick={this.handleOnClick} dataType="button" />
      <Tool handleOnClick={this.handleOnClick} dataType="heading" />
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    isVisible: state.isToolbarVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTool: tool => {
      dispatch(setTool(tool));
    }
  };
};

Toolbar = connect(mapStateToProps, mapDispatchToProps)(Toolbar);

export default Toolbar;