import React, { Component } from 'react';
import Toolbar from '../Toolbar';
import Canvas from '../Canvas';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

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
