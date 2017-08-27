import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Toolbar from '../Toolbar';
import RightBar from '../RightBar';
import Canvas from '../Canvas';


class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <Toolbar />
        <RightBar />
        <Canvas containers={this.props.containers} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    containers: state.containers
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
