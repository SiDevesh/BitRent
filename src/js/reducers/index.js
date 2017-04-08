'use strict';

import { combineReducers } from 'redux';
import routesState from './routes_state';
import authState from './auth_state';
import mainScreenState from './main_screen_state';
import firstScreenState from './first_screen_state';

const CombinedReducer = combineReducers({
  routesState,
  authState,
  firstScreenState,
  mainScreenState
})

export default CombinedReducer;
