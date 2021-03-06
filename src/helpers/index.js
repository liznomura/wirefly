import React from 'react';
import Element from '../components/element.js';

const getTreeNode = function(child, index) {
  return (
      <Element node={child} key={child.id} />
  );
};

export default getTreeNode;