import { SET_TOOL, ADD_ELEMENT } from '../actions';

const initialState = {
  tool: '',
  containers: [
    {
      id: 0,
      type: 'page',
      width: '100%',
      height: '100%',
      properties: {},
      children: [
        {
          id: 29,
          type: 'container',
          width: '100%',
          height: '100%',
          properties: {},
          children: [
            {
              id: 30,
              type: 'div',
              width: '100%',
              height: '100%',
              properties: {},
              children: []
            },
                        {
              id: 31,
              type: 'div',
              width: '100%',
              height: '100%',
              properties: {},
              children: []
            },
                                    {
              id: 32,
              type: 'div',
              width: '100%',
              height: '100%',
              properties: {},
              children: []
            }
          ]
        }
      ]
    }
  ]
};

const wireflyReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_ELEMENT:
      console.log('add element', action.element.type);
      // return Object.assign({}, state, {
      //   tool: '',
      //   containers: [...state.containers, action.container]
      // });

    case SET_TOOL:
      return Object.assign({}, state, { tool: action.tool });

    default:
      return state;
  }
};

export default wireflyReducer;
