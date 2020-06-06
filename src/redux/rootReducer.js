import { combineReducers } from 'redux';

import authUser from './authUser/reducer';
import errorReducer from './error/reducer';
import usersReducer from './users/reducers';

const rootReducer = combineReducers({
  currentUser: authUser,
  users: usersReducer,
  error: errorReducer,
});

export default rootReducer;
