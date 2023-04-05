import { IState, IAction } from './types';

const initialState: IState = {
  movies: []
};

export const movieReducer = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case 'LOAD_MOVIES_SUCCESS': {
      return {
        ...state,
        movies: action.payload,
      }
    }
    case 'LOAD_MOVIES_FAILURE': {
      return {
      }
    }
    default:
      return state
  }
}