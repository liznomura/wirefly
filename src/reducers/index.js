import { combineReducers } from 'redux';
import wireflyReducer from './wirefly';

import { ADD_ELEMENT, UNDO_ACTION, REDO_ACTION } from '../actions';
import undoable, { includeAction } from 'redux-undo';

const rootReducer = combineReducers({
  wirefly: undoable(wireflyReducer, {
    filter: includeAction([ADD_ELEMENT]),
    limit: 10,
    debug: true,
    undoType: UNDO_ACTION,
    redoType: REDO_ACTION
  })
});

export default rootReducer;
