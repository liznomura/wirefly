export const ADD_CONTAINER = 'ADD_CONTAINER';
export const ADD_DIV = 'ADD_DIV';
export const SET_TOOL = 'SET_TOOL';
export const ADD_CHILD = 'ADD_CHILD';

let keyId = 0;

export const addContainer = () => {
  return {
    type: ADD_CONTAINER,
    container: {
      id: keyId++,
      type: 'container',
      width: '100%',
      height: '20%',
      properties: {
        display: 'block'
      },
      children: []
    }
  };
};

export const addDiv = (id) => {
  return {
    type: ADD_DIV,
    parentId: id,
    div: {
      id: keyId++,
      type: 'div',
      width: '100%',
      height: '100%',
      properties: {
        display: 'block'
      },
      children: []
    }
  };
};

export const setTool = tool => {
  return {
    type : SET_TOOL,
    tool
  };
};

export const addChild = () => {
  // type: flex-child
  // width
  // height
  // properties
  // children
};

