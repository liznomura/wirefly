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
        <Canvas />
      </div>
    );
  }
}

export default App;
