import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRowHeight } from '../../actions';

class Rows extends Component {
  constructor(props) {
    super(props);

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
    // let data = e.dataTransfer.getData('text');
    e.target.classList.remove('over');
    return false;
  }

  componentDidMount() {
    let name = this.rowDiv.dataset.name;
    let height = this.rowDiv.offsetHeight;
    this.props.updateRowHeight(name, height);
  }

  render() {
    let classList = [this.props.classType, 'row', 'flex-container'].join(' ');

    return (
      <div
        ref={div => {this.rowDiv = div;}}
        className={classList}
        data-name={this.props.classType}
        onDragOver={this.handleDragOver}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDrop={this.handleDrop}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    rows: state.rows
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateRowHeight: (name, height) => {
      dispatch(updateRowHeight(name, height));
    }
  };
};

Rows = connect(mapStateToProps, mapDispatchToProps)(Rows);


export default Rows;


