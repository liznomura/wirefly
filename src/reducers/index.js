import { SET_TOOL } from '../actions';

const initialState = {
  tool: '',
  containers: [
  {
    id: 0,
    type: 'page',
    width: '100%',
    height: '100%',
    properties: {},
    children: []
  }
  ]
};

const wireflyReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_CONTAINER:
    //   return Object.assign({}, state, {
    //     tool: '',
    //     containers: [...state.containers, action.container]
    //   });

    case SET_TOOL:
      return Object.assign({}, state, { tool: action.tool });

    default:
      return state;
  }
};

export default wireflyReducer;
