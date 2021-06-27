import { createStore, combineReducers } from 'redux';

import reducer from '../reducers/index';

const rootReducer = combineReducers({
  game: reducer
});

const store = () => {
  return createStore(rootReducer);
};

export default store;
