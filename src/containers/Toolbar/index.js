import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tool from '../../components/tool.js';
import { setTool } from '../../actions';
import ToolbarBtn from '../../components/toolbarbtn.js';

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.toggleVis = this.toggleVis.bind(this);
  }

  handleOnClick(e) {
    this.props.setTool(e.target.dataset.type);
  }

  toggleVis() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    return (
      <div className={ this.state.isVisible ? "visible toolbar" : "toolbar" }>
      <ToolbarBtn toggleVis={this.toggleVis} />
      <Tool handleOnClick={this.handleOnClick} dataType="container" />
      <Tool handleOnClick={this.handleOnClick} dataType="div" />
      <Tool handleOnClick={this.handleOnClick} dataType="image" />
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