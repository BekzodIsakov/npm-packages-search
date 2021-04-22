import { combineReducers } from 'redux';

import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// useSelector from 'react-redux' doesn't know what
// will be indise our state. The below code tells
// useSelector to expect a type of Reducer function;
export type RootState = ReturnType<typeof reducers>;
