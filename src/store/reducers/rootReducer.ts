import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { actorReducer } from './actorReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  actors: actorReducer
})

export default rootReducer;