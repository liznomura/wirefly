export const SET_TOOL = 'SET_TOOL';
export const ADD_ELEMENT = 'ADD_ELEMENT';
export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';

let keyId = 1;
export const setTool = tool => {
  return {
    type : SET_TOOL,
    tool
  };
};

export const addElement = (parentId, tool) => {
  return {
    type: ADD_ELEMENT,
    parentId,
    element: {
      id: keyId++,
      type: tool,
      width: '100%',
      height: '100%',
      properties: {
        display: 'block'
      },
      children: []
    }
  };
};

export const toggleVisibility = () => {
  return {
    type: TOGGLE_VISIBILITY
  };
};