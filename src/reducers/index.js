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
  //switch case
  switch (action.type) {
    case UPDATE_ROW_HEIGHT:
      let updatedRows = state.rows.map(row => {
        if (row.name === action.name) {
          return Object.assign({}, row, { height: action.height });
        }

        return row;
      });

      return Object.assign({}, state, { rows: updatedRows });

    case ADD_CHILDREN:
      let updatedRows = state.rows.map(row => {
        if (row.name === action.name) {
          return Object.assign({}, row, {
            children: [...row.children, action.child]
          });
        }

        return row;
      });
      return Object.assign({}, state, { rows: updatedRows });

    default:
      return state;
  }
};

export default wireflyReducer;
