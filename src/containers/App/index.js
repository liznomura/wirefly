import React, { Component } from 'react';
import Toolbar from '../Toolbar';
import BaseTool from '../DivBase';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Toolbar />
        <BaseTool />
      </div>
    );
  }
}

export default App;
