export const SET_TOOL = 'SET_TOOL';
export const ADD_ELEMENT = 'ADD_ELEMENT';
export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';

export const UNDO_ACTION = 'UNDO_ACTION';
export const REDO_ACTION = 'REDO_ACTION';

export const setTool = tool => {
  return {
    type: SET_TOOL,
    tool
  };
};

export const addElement = (parentId, tool) => {
  return {
    type: ADD_ELEMENT,
    element: {
      parentId,
      properties: {
        type: tool,
        attr: {
          width: '100%',
          height: '100%',
        }
      }
    }
  }
}

  export const toggleVisibility = () => {
    return {
      type: TOGGLE_VISIBILITY
    };
  };

  export const undo = () => {
    return {
      type: UNDO_ACTION
    };
  };

  export const redo = () => {
    return {
      type: REDO_ACTION
    };
  };
