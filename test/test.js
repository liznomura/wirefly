const expect = require('chai').expect;
const rootJson = require('./fixtures/rootComponent.json');
const generator = require('../js/generator.js');

describe('React Component Generator', () => {
  const rootComponent = `import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;`;
  it('generator.createRoot() should render the root component', () => {
    expect(JSON.stringify(generator.createRoot(rootJson))).to.equal(JSON.stringify(rootComponent));
  });
})