export const SET_TOOL = 'SET_TOOL';
export const ADD_ELEMENT = 'ADD_ELEMENT';
export const ADD_ERR = 'ADD_ERR';
export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
export const DELETE_ELEMENT = 'DELETE_ELEMENT';

export const UNDO_ACTION = 'UNDO_ACTION';
export const REDO_ACTION = 'REDO_ACTION';

export const setTool = tool => {
  return {
    type: SET_TOOL,
    tool
  };
};

export const addCheck = (parentId, tool) => (dispatch, getState) => {
  var tree = getState().wirefly.present.PageTree;
  var parent = null;
  var errMsg = '';

  tree.contains(element => {
    if (element.data.id == parentId) {
      parent = element;
      return;
    }
  }, tree.traversalBF);

  console.log(parent.data.properties.type);

  // add condition checks
  if (parent) {
    if (
      (parent.data.properties.type !== 'container' &&
        parent.data.properties.type !== 'column') &&
      tool === 'column'
    ) {
      errMsg = 'Columns must be placed in container-type boxes.'
    }

    if (tool === 'container' && parent.data.properties.type === 'container') {
      errMsg = 'Containers cannot be placed in other containers. Try insert a column instead.'
    }

    if (
      (tool !== 'container' && tool !== 'column') &&
      parent.children.length > 0
    ) {
      errMsg = 'Only one element per container-type box.';
    }

    // if it passes checks
    if (!errMsg) {
      dispatch(addElement(parentId, tool));
    } else {
      dispatch(addErr(errMsg));
    }
  } else {
    throw new Error('Parent node not found');
  }
};

export const addErr = errMsg => {
  return {
    type: ADD_ERR,
    errMsg
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
          height: '100%'
        }
      }
    }
  };
};

export const toggleVisibility = () => {
  return {
    type: TOGGLE_VISIBILITY
  };
};

export const deleteElement = (id) => {
  return {
    type: DELETE_ELEMENT,
    id
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
