import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleVisibility } from '../../actions';
import ToggleToolbarBtn from '../../components/toggle-toolbar-btn.js';

class Menu extends Component {
  constructor() {
    super();

    this.toggleVis = this.toggleVis.bind(this);
  }

    toggleVis() {
    this.props.toggleVisibility();
  }

  render() {
    return (
      <div className="menu">
      <ToggleToolbarBtn toggleVis={this.toggleVis} />
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    toggleVisibility: () => {
      dispatch(toggleVisibility());
    }
  };
};

Menu = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default Menu;