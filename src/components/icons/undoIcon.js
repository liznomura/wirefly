import React, { Component } from 'react';
import { connect } from 'react-redux';
import { undo } from '../../actions';

class UndoIcon extends Component {

  render() {
    return (
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 512.053 512.053"
        style={{ enableBackground: 'new 0 0 512.053 512.053' }}
        className="rightBarIcon"
      >
        <g>
          <g>
            <title>Undo</title>
            <path
              d="M496.197,343.5C461.595,226.721,356.4,145.057,234.672,139.34V53.793c0-8.619-5.184-16.405-13.163-19.712    c-7.979-3.328-17.152-1.472-23.253,4.629l-192,192c-8.341,8.341-8.341,21.824,0,30.165l192,192    c6.101,6.101,15.275,7.957,23.253,4.629c7.979-3.285,13.163-11.093,13.163-19.712v-109.78    c41.429-4.203,153.195,0.043,237.675,142.037c3.755,6.336,10.453,9.557,17.536,9.557c2.155,0,4.309-0.299,6.464-0.875    c9.237-2.539,15.68-11.947,15.68-21.547C512.475,418.636,507.141,380.385,496.197,343.5z"
              fill="#FFFFFF"
              className="iconHover"
              onClick={ this.props.undo }
            />
          </g>
        </g>
      </svg>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    undo: () => {
      dispatch(undo());
    }
  };
};

UndoIcon = connect(mapStateToProps, mapDispatchToProps)(UndoIcon);

export default UndoIcon;
