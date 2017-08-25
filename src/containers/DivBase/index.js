import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContainer, addDiv } from '../../actions';
import Container from '../../components/container.js';

class BaseTool extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    switch (this.props.tool) {
      case 'container':
        this.props.addContainer();
        break;

      case 'div':
      this.props.addDiv(e.target.id);

      default:
        return;
    }
  }

  render() {
    return (
      <div className="baseTool" onClick={this.handleClick}>
        {this.props.containers.map(container =>
          <Container key={container.id} containerId={container.id} handleClick={this.handleClick}/>
        )}
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
  return {
    addContainer: () => {
      dispatch(addContainer());
    },
    addDiv: (id) => {
      dispatch(addDiv(id));
    }
  };
};

BaseTool = connect(mapStateToProps, mapDispatchToProps)(BaseTool);

export default BaseTool;
