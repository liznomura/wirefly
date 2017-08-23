import { UPDATE_ROW_HEIGHT, ADD_CHILDREN } from '../actions';

const initialState = {
  container: {
    width: '70%',
    height: '100%'
  },
  rows: [
  {
    name: 'header',
    height: '',
    children: []
  },
  {
    name: 'body',
    height: '',
    children: []
  },
  {
    name: 'footer',
    height: '',
    children: []
  }
  ]
};

const wireflyReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ROW_HEIGHT:
    return Object.assign({}, state, { rows:
      state.rows.map(row => {
        if (row.name === action.name) {
          return Object.assign({}, row, { height: action.height });
        }

        return row;
      })
    });

    case ADD_CHILDREN:
    return Object.assign({}, state, { rows:
      state.rows.map(row => {
        if (row.name === action.name) {
          return Object.assign({}, row, {
            children: [...row.children, action.child]
          });
        }

        return row;
      })
    });

    default:
    return state;
  }
};

export default wireflyReducer;
