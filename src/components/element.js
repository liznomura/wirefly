import React, { Component } from 'react';
import { connect } from 'react-redux';
import getTreeNode from '../helpers';
import { addCheck, deleteElement } from '../actions';
import Tab from './hover-tab';

class Element extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  handleClick(e) {
    if (e.stopPropagation) e.stopPropagation();
    if (this.props.tool) {
      this.props.addCheck(e.target.id, this.props.tool);
    }
  }

  handleDel(e) {
    if(e.stopPropagation) e.stopPropagation();
    this.props.deleteEl(e.target.dataset.id);
  }

  render() {
    let childNodes = null;
    if (this.props.node.children && this.props.node.children.length > 0) {
      childNodes = this.props.node.children.map(getTreeNode, this);
    }
    return (
      <div
        className={this.props.node.data.properties.type + 'El'}
        id={this.props.node.data.id}
        onClick={this.handleClick}
      >
        <Tab elType={this.props.node.data.properties.type} elId={this.props.node.data.id} handleDel={this.handleDel}/>
        {childNodes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tool: state.wirefly.present.tool
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCheck: (parentId, tool) => {
      dispatch(addCheck(parentId, tool));
    },
    deleteEl: id => {
      dispatch(deleteElement(id));
    }
  };
};

Element = connect(mapStateToProps, mapDispatchToProps)(Element);

export default Element;
