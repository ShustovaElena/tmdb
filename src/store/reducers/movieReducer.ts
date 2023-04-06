import { IState, IAction } from './types';

const initialState: IState = {
  movies: [],
  filterName: 'popularity.desc',
  searchName: '',
  totalPages: 0
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
    case 'SET_FILTER_NAME': {
      return {
        ...state,
        filterName: action.payload,
      }
    }
    case 'SET_TOTAL_PAGES': {
      return {
        ...state,
        totalPages: action.payload,
      }
    }
    case 'SET_SEARCH_NAME': {
      return {
        ...state,
        searchName: action.payload,
      }
    }
    default:
      return state
  }
}