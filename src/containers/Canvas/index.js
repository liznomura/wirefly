import React, { Component } from 'react';
import { connect } from 'react-redux';
import getTreeNode from '../../helpers';

class Canvas extends Component {
  render() {
    let childNodes = this.props.pageTree._root.children.map(getTreeNode, this);
    return (
      <div className="canvas">
      {childNodes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tool: state.tool,
    pageTree: state.PageTree
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

Canvas = connect(mapStateToProps, mapDispatchToProps)(Canvas);

export default Canvas;
