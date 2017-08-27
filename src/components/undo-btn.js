import React, { Component } from 'react';
import { connect } from 'react-redux';

class UndoBtn extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="menuBtn"/>
      );
  }
}

const mapStateToProps = state => {
  return {
    isToolbarVisible: state.isToolbarVisible
  };
};

UndoBtn = connect(mapStateToProps)(UndoBtn);

export default UndoBtn;