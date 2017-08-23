import React, { Component } from 'react';

class Rows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows : {
        name: this.props.classType,
        height : '',
        children : []
      }
    };

    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'copy';
    return false;
  }

  handleDragEnter(e) {
    e.target.classList.add('over');
  }

  handleDragLeave(e) {
    e.target.classList.remove('over');
  }

  handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    let data = e.dataTransfer.getData('text');
    e.target.classList.remove('over');
    return false;
  }

  render() {
    let classList = [this.props.classType, 'row', 'flex-container'].join(' ');

    return (
      <div
        className={classList}
        onDragOver={this.handleDragOver}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDrop={this.handleDrop}
      />
    );
  }
}

export default Rows;


