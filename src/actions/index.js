// action types
export const UPDATE_ROW_HEIGHT = 'UPDATE_ROW_HEIGHT';
export const ADD_CHILDREN = 'ADD_CHILDREN';

// action creation
export const updateRowHeight = (name, height) => {
  return {
    type: UPDATE_ROW_HEIGHT,
    name,
    height
  };
};

export const addChildren = (row, child) => {
  // child param:
  // { name: '', height: '', children: [] }
  return {
    type : ADD_CHILDREN,
    row,
    child
  };
};