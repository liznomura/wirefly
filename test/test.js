const expect = require('chai').expect;
const wireFrameJson = require('./fixtures/wireFrame.json');
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
    expect(JSON.stringify(generator.createRoot(wireFrameJson))).to.equal(JSON.stringify(rootComponent));
  });

  it('generator.createChildren() should render an array of react component strings', () => {
    expect(generator.createChildren())
  })
})