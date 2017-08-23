const hbs = require('handlebars');

const childSource = `import React from 'react';
{{#each child.children}}
import {{name}} from './{{name}}';
{{/each}}

const {{child.name}} = (props) => {
  return (
    <div>
    {{#each child.children}}
      <{{name}} />
    {{/each}}
    </div>
  );
};

export default {{child.name}};`

const childTemplate = hbs.compile(childSource);

module.exports = childTemplate;