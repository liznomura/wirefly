import { SET_TOOL, ADD_ELEMENT } from '../actions';
import PageTree from './PageTree';
import arrayTree from './PageTree/arrayTree.json';
import createTree from './PageTree/createTree';

const Page = new PageTree({tree: createTree(arrayTree) });

const initialState = {
  tool: '',
  PageTree: Page
};

const wireflyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEMENT:

    case SET_TOOL:
      return Object.assign({}, state, { tool: action.tool });

    default:
      return state;
  }
};

export default wireflyReducer;
