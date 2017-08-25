import React, { Component } from 'react';
import getTreeNode from '../helpers';

class Element extends Component {
  render() {
    let childNodes = null;
    if (this.props.node.children && this.props.node.children.length > 0) {
      childNodes = this.props.node.children.map(getTreeNode, this);
    }
    return (
      <div className={this.props.node.type}>
           {childNodes}
      </div>
    )
  }
}

export default Element;
