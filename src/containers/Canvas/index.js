import React, { Component } from 'react';
import { connect } from 'react-redux';
import getTreeNode from '../../helpers';

class Canvas extends Component {
  render() {
    let childNodes = this.props.pageTree._root.children.map(getTreeNode, this);
    return (
      <div className="canvas">
      <div className="pageEl">
      {childNodes}
      {console.log(this.props.showErr)}
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tool: state.wirefly.present.tool,
    pageTree: state.wirefly.present.PageTree,
    showErr: state.wirefly.present.showError
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

Canvas = connect(mapStateToProps, mapDispatchToProps)(Canvas);

export default Canvas;
