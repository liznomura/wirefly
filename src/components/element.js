import React, { Component } from 'react';
import getTreeNode from '../helpers';

class Element extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if(e.stopPropagation) e.stopPropagation();
    console.log(e.target);
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

export default Element;
