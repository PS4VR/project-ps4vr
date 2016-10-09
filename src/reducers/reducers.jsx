import { combineReducers } from 'redux-immutable';
import sample from './sampleReducers';
import routerReducer  from './routeReducers'

const rootReducer = combineReducers({
  sample,
  routing: routerReducer
});

export default rootReducer;        