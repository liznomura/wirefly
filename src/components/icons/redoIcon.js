import React, { Component } from 'react';
import { connect } from 'react-redux';
import { redo } from '../../actions';

class RedoIcon extends Component {
  render() {
    return (
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 491.807 491.807"
        style={{ enableBackground: 'new 0 0 491.807 491.807' }}
        className="rightBarIcon"
      >
        <g>
          <g>
            <title>Redo</title>
            <path
              d="M485.802,221.184l-184.32-184.32c-5.857-5.837-14.643-7.619-22.323-4.444c-7.659,3.154-12.636,10.65-12.636,18.924v82.002    c-117.842,4.833-220.651,84.398-253.583,198.41c-14.254,49.439-13.148,89.6-12.739,104.735l0.082,3.973    c0,9.216,6.164,17.306,15.032,19.743c1.823,0.492,3.645,0.737,5.448,0.737c7.086,0,13.844-3.707,17.592-9.994    c81.121-136.356,188.6-140.227,228.168-136.376v105.411c0,8.274,4.977,15.77,12.636,18.924c7.68,3.195,16.466,1.413,22.323-4.444    l184.32-184.32C493.809,242.135,493.809,229.191,485.802,221.184z"
              fill="#FFFFFF"
              className="iconHover"
              onClick={ this.props.redo }
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
    redo: () => {
      dispatch(redo());
    }
  };
};

RedoIcon = connect(mapStateToProps, mapDispatchToProps)(RedoIcon);

export default RedoIcon;
