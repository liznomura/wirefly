import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rows from '../Rows';

class Canvas extends Component {

  render() {
    return (
      <div className="canvas">
        {this.props.rows.map((row, i) => <Rows classType={row.name} key={i} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rows: state.rows
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

Canvas = connect(mapStateToProps, mapDispatchToProps)(Canvas);

export default Canvas;
