import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';

const rootReducer = combineReducers({
  user,
  router: routerReducer, // from reduxRouter
});

export default rootReducer;
