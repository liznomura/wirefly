export const SET_TOOL = 'SET_TOOL';
export const ADD_ELEMENT = 'ADD_ELEMENT';

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