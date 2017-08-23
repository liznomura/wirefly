//generator needs to render a root component app based on the container dimensions, child components must be present in render method

//needs to traverse row array and render components based on its name, and children elements

const rootTemplate = require('./templates/root.js');
const childTemplate = require('./templates/child.js');

const createRoot = ({ container, rows }) => {
  return rootTemplate({ rows });
};

const createChildren = ({ rows }) => {
  return rows.map(row => {
    childTemplate({ row });
  });
}

function createComponents(comp, template) { //component

  return recurse(comp, template).reduce((arr, curr) => {
    return arr.concat(curr);
  })
}

function recurse(comp, template) {
  if(comp.length <= 0) return comp;

  return comp.map(child => {
    let str = template({ name: child.name });
    return [str].concat(...recurse(child.children, template));
  })
}

module.exports = {
  createRoot,
  createComponents
};