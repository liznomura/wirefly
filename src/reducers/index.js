import {
  ADD_CONTAINER,
  ADD_DIV,
  SET_TOOL,
  ADD_CHILD,
  addContainer,
  addDiv,
  setTool,
  addChild
} from '../actions';

const initialState = {
  tool: '',
  page: {
    width: '100%',
    height: '100%',
    properties: {}
  },
  containers: []
};

const wireflyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTAINER:
      return Object.assign({}, state, {
        tool: '',
        containers: [...state.containers, action.container]
      });

    case SET_TOOL:
      return Object.assign({}, state, { tool: action.tool });

    case ADD_DIV:
      return Object.assign({}, state, {
        containers: [...state.containers.map(container => {
          if (container.id === action.parentId) {
            return Object.assign({}, container, {
              children: [...container.children, action.div]
            });
          }

          return container;
        })]
      });

    default:
      return state;
  }
};

export default wireflyReducer;
