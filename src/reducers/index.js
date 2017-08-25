import { SET_TOOL, ADD_ELEMENT } from '../actions';
import { normalize, schema } from 'normalizr';

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

      const mySchema = { containers: [ container ] };
      const normalData = normalize(state.containers, mySchema);

      console.log(normalData);


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
