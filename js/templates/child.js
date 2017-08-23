const hbs = require('handlebars');

const childSource = `import React from 'react';

const {{name}} = (props) => {
  return (
    <div>
    </div>
  );
};

export default {{name}};`

const childTemplate = hbs.compile(childSource);

module.exports = childTemplate;