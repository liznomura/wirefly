import React, { Component } from 'react';
import Toolbar from '../Toolbar';
import Canvas from '../Canvas';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Toolbar />
      <Canvas />
      </div>
    );
  }
}

export default App;
