import React, { Component } from 'react';
import { connect } from 'react-redux';
import getTreeNode from '../helpers';
import { addElement } from '../actions';

class Element extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if(e.stopPropagation) e.stopPropagation();

    this.props.addElement(e.target.id, this.props.tool);
  }

  render() {
    let childNodes = null;
    if (this.props.node.children && this.props.node.children.length > 0) {
      childNodes = this.props.node.children.map(getTreeNode, this);
    }
    return (
      <div className={this.props.node.type} id={this.props.node.id} onClick={this.handleClick}>
        {childNodes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tool: state.tool
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addElement: (parentId, tool) => {
      dispatch(addElement(parentId, tool));
    }
  };
};

Element = connect(mapStateToProps, mapDispatchToProps)(Element);

export default Element;
