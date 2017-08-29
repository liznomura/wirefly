import { SET_TOOL, ADD_ELEMENT, TOGGLE_VISIBILITY } from '../actions';
import _ from 'lodash';
import PageTree from './PageTree';
import arrayTree from './PageTree/arrayTree.json';
import createTree from './PageTree/createTree';

const Page = new PageTree({ tree: createTree(arrayTree) });

const initialState = {
  tool: '',
  isToolbarVisible: false,
  PageTree: Page
};

const wireflyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEMENT:
      let newTree = _.cloneDeep(state.PageTree);
      newTree.add(action.element.properties, action.element.parentId, newTree.traversalBF);
      return Object.assign({}, state, { PageTree: newTree });

    case SET_TOOL:
      return Object.assign({}, state, { tool: action.tool });

    case TOGGLE_VISIBILITY:
      return Object.assign({}, state, {
        isToolbarVisible: !state.isToolbarVisible
      });

    default:
      return state;
  }
};

export default wireflyReducer;
