const expect = require('chai').expect;
const wireFrameJson = require('./fixtures/wireFrame.json');
const generator = require('../js/generator.js');
const childTemplate = require('../js/templates/child.js');

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
    const expected = [
      `import React from 'react';

const Header = (props) => {
  return (
    <div>
    </div>
  );
};

export default Header;`,
    `import React from 'react';

const Logo = (props) => {
  return (
    <div>
    </div>
  );
};

export default Logo;`,
    `import React from 'react';

const Button = (props) => {
  return (
    <div>
    </div>
  );
};

export default Button;`,
    `import React from 'react';

const Body = (props) => {
  return (
    <div>
    </div>
  );
};

export default Body;`,
    `import React from 'react';

const Image = (props) => {
  return (
    <div>
    </div>
  );
};

export default Image;`
    ];
    const actual = generator.createComponents(wireFrameJson.rows, childTemplate);

    expect(actual).to.deep.equal(expected);
  })
})