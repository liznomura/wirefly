import React, { Component } from 'react';
import Toolbar from '../Toolbar';
import Canvas from '../Canvas';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // grab dimensions of container
    // grab height of rows
    // update state with dimensions of container and height of rows thru actions
    // i hate react
  }

  render() {
    return (
      <div className="container">
        <Toolbar />
        <Canvas heightRef={el => this.rowElement = el}/>
      </div>
    );
  }
}

export default App;
