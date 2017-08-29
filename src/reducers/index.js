import { combineReducers } from 'redux';
import wireflyReducer from './wirefly';

import { ADD_ELEMENT, SET_TOOL, TOGGLE_VISIBILITY, UNDO_ACTION, REDO_ACTION } from '../actions';
import undoable, { includeAction } from 'redux-undo';

const rootReducer = combineReducers({
  wirefly: undoable(wireflyReducer, {
    filter: includeAction([SET_TOOL, TOGGLE_VISIBILITY, ADD_ELEMENT]),
    limit: 10,
    debug: true,
    undoType: UNDO_ACTION,
    redoType: REDO_ACTION
  })
});

export default rootReducer;
