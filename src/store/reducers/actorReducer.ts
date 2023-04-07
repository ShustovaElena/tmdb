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
    case 'SET_TOTAL_PAGES_ACTORS': {
      return {
        ...state,
        actorsTotalPages: action.payload,
      }
    }
    case 'SET_PAGINATION_PAGE': {
      return {
        ...state,
        pagePagination: action.payload,
      }
    }
    default:
      return state
  }
}