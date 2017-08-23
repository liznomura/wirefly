import React, { Component } from 'react';
import Tool from '../../components/tool.js';

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  handleDragStart(e) {
    e.target.style.opacity = '0.4';
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text', e.target.dataset.type);
  }

  handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

render() {
  return (
    <div className="toolbar" id="toolbar">
    <Tool dataType="div" dragStart={this.handleDragStart} dragEnd={this.handleDragEnd} />
    <Tool dataType="image" dragStart={this.handleDragStart} dragEnd={this.handleDragEnd} />
    </div>
    );
}

}

export default Toolbar;