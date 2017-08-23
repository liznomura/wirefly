const hbs = require('handlebars');

const rootSource = `import React, { Component } from 'react';
{{#each rows}}import {{name}} from './{{name}}';
{{/each}}

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      {{#each rows}}
        <{{name}} />
      {{/each}}
      </div>
    );
  }
}

export default App;`;

const rootTemplate = hbs.compile(rootSource);


module.exports = rootTemplate;