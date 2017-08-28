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

// const initialState = {
//   tool: '',
//   isToolbarVisible: false,
//   containers: [
//     {
//       id: 0,
//       type: 'page',
//       width: '100%',
//       height: '100%',
//       properties: {},
//       children: [
//         {
//           id: 29,
//           type: 'container',
//           width: '100%',
//           height: '100%',
//           properties: {},
//           children: []
//         }
//       ]
//     }
//   ]
// };

const wireflyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEMENT:
      let newTree = _.cloneDeep(state.PageTree);
      console.log('HERE', action.element.parentId);
      newTree.add(action.element.properties, action.element.parentId, newTree.traversalBF);
      return newTree;

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
