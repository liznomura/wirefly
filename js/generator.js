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

const getRows = () => {

}

const compFileName = (name) => {
  return `./${name}.js`;
}

module.exports = {
  createRoot,

};