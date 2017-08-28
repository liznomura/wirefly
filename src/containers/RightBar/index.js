import React, { Component } from 'react';
import UndoIcon from '../../components/icons/undoIcon.js';
import RedoIcon from '../../components/icons/redoIcon.js';

class RightBar extends Component {
  render() {
    return (
      <div className="rightbar">
        <UndoIcon />
        <RedoIcon />
      </div>
      );
  }
}

export default RightBar;