import { initialState } from './initialState';
import { IState } from './types';

export const actorReducer = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case 'LOAD_ACTORS_SUCCESS': {
      return {
        ...state,
        actors: action.payload,
      }
    }
    case 'LOAD_ACTORS_FAILURE': {
      return {
      }
    }
    case 'SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: action.payload,
      }
    }
    default:
      return state
  }
}