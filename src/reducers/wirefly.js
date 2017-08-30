import { SET_TOOL, ADD_ELEMENT, ADD_ERR, TOGGLE_VISIBILITY, DELETE_ELEMENT } from '../actions';
import _ from 'lodash';
import PageTree from './PageTree';
import arrayTree from './PageTree/arrayTree.json';
import createTree from './PageTree/createTree';

const Page = new PageTree({ tree: createTree(arrayTree) });

const initialState = {
  tool: '',
  isToolbarVisible: false,
  showError: '',
  PageTree: Page
};

const wireflyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEMENT:
      let newAddTree = _.cloneDeep(state.PageTree);
      newAddTree.add(action.element.properties, action.element.parentId, newAddTree.traversalBF);
      return Object.assign({}, state, { PageTree: newAddTree });

    case ADD_ERR:
      return Object.assign({}, state, { showError: action.errMsg });

    case SET_TOOL:
      return Object.assign({}, state, { tool: action.tool });

    case TOGGLE_VISIBILITY:
      return Object.assign({}, state, {
        isToolbarVisible: !state.isToolbarVisible
      });

    case DELETE_ELEMENT:
      let newDelTree = _.cloneDeep(state.PageTree);
      newDelTree.remove(action.id, newDelTree.traversalBF);
      return Object.assign({}, state, { PageTree: newDelTree });

    default:
      return state;
  }
};

export default wireflyReducer;
